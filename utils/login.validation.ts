export function validateLogin(username: string, password: string) {
  return {
    usernameError: username.trim()
      ? ""
      : "Le nom d'utilisateur est obligatoire.",
    passwordError: password.trim()
      ? ""
      : "Le mot de passe est obligatoire.",
  };
}