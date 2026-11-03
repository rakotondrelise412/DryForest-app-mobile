import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { styles } from "../../assets/css/login";
import LoginButton from "./LoginButton";
import type { LoginFormProps } from "../../models/login.model";

export default function LoginForm(props: LoginFormProps) {
  const {
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
  } = props;

  const clearLoginError = () => setLoginError("");

  return (
    <View style={styles.formContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Bienvenue !</Text>
        <Text style={styles.subtitle}>Connectez-vous à votre espace.</Text>
      </View>

      <View style={styles.fieldContainer}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text style={styles.label}>Nom d'utilisateur</Text>

        <View
          style={[
            styles.passwordInputContainer,
            !!usernameError && styles.inputError,
          ]}
        >
          <Ionicons
            name="person-outline"
            size={21}
            color={COLORS.textSecondary}
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.usersInput}
            placeholder="Saisissez votre identifiant"
            placeholderTextColor={COLORS.textSecondary}
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setUsernameError("");
              clearLoginError();
            }}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="username"
            textContentType="username"
            returnKeyType="next"
            editable={!loading}
            accessibilityLabel="Nom d'utilisateur"
          />
        </View>

        {!!usernameError && (
          <Text style={styles.errorText} accessibilityRole="alert">
            {usernameError}
          </Text>
        )}
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Mot de passe</Text>

        <View
          style={[
            styles.passwordInputContainer,
            !!passwordError && styles.inputError,
          ]}
        >
          <Ionicons
            name="lock-closed-outline"
            size={21}
            color={COLORS.textSecondary}
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.passwordInput}
            placeholder="Saisissez votre mot de passe"
            placeholderTextColor={COLORS.textSecondary}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError("");
              clearLoginError();
            }}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="current-password"
            textContentType="password"
            returnKeyType="go"
            onSubmitEditing={handleLogin}
            editable={!loading}
            accessibilityLabel="Mot de passe"
          />

          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}
            disabled={loading}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={
              showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"
            }
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={COLORS.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {!!passwordError && (
          <Text style={styles.errorText} accessibilityRole="alert">
            {passwordError}
          </Text>
        )}
      </View>

      {!!loginError && (
        <View style={styles.loginErrorContainer}>
          <Text style={styles.loginErrorText} accessibilityRole="alert">
            {loginError}
          </Text>
        </View>
      )}

      <LoginButton
        loading={loading}
        loadingText={loadingText}
        onPress={handleLogin}
      />

      <Text style={styles.securityText}>
        Accès réservé aux utilisateurs autorisés.
      </Text>
    </View>
  );
}