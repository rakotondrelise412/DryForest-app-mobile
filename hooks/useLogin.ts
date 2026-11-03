import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useRouter } from "expo-router";
import { login } from "@/services/auth.service";
import { saveToken } from "@/utils/storage";
import { validateLogin } from "@/utils/login.validation";

export function useLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Connexion");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (!loading) {
      setLoadingText("Connexion");
      return;
    }

    const messages = ["Connexion", "Connexion.", "Connexion..", "Connexion..."];
    let index = 0;

    const timer = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingText(messages[index]);
    }, 400);

    return () => clearInterval(timer);
  }, [loading]);

  const clearErrors = () => {
    setUsernameError("");
    setPasswordError("");
    setLoginError("");
  };

  const handleLogin = async () => {
    clearErrors();

    const errors = validateLogin(username, password);
    setUsernameError(errors.usernameError);
    setPasswordError(errors.passwordError);

    if (errors.usernameError || errors.passwordError) return;

    const startTime = Date.now();

    try {
      setLoading(true);
      Keyboard.dismiss();

      const response = await login({
        username: username.trim(),
        password,
      });

      const token = response.data.accessToken;

      if (
        typeof token !== "string" ||
        !token.trim() ||
        token.trim() === "undefined" ||
        token.trim() === "null"
      ) {
        throw new Error("Le serveur n'a pas retourné un JWT valide.");
      }

      await saveToken(token.trim());

      router.replace("/(app)/home");
    } catch (error: unknown) {
  console.error("Erreur de connexion :", error);

  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as {
      response?: {
        status?: number;
      };
    };

    const status = axiosError.response?.status;

    if (status === 401 || status === 403) {
      const message = "Nom d'utilisateur ou mot de passe incorrect.";
      setUsernameError(message);
      setPasswordError(message);
    } else if (status === 404) {
      setUsernameError("Nom d'utilisateur introuvable.");
    } else if (status !== undefined && status >= 500) {
      setLoginError("Erreur serveur. Veuillez réessayer.");
    } else {
      setLoginError("Une erreur est survenue. Veuillez réessayer.");
    }
  } else if (error instanceof Error) {
    setLoginError(error.message);
  } else {
    setLoginError("Une erreur inattendue est survenue.");
  }
} finally {
      const remaining = Math.max(0, 4000 - (Date.now() - startTime));

      if (remaining) {
        await new Promise((resolve) => setTimeout(resolve, remaining));
      }

      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    loading,
    loadingText,
    usernameError,
    passwordError,
    loginError,
    setUsernameError,
    setPasswordError,
    setLoginError,
    handleLogin,
  };
}
