export interface LoginFormProps {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  loading: boolean;
  loadingText: string;
  usernameError: string;
  passwordError: string;
  loginError: string;
  setUsernameError: (value: string) => void;
  setPasswordError: (value: string) => void;
  setLoginError: (value: string) => void;
  handleLogin: () => void;
}


export interface LoginButtonProps {
  loading: boolean;
  loadingText: string;
  onPress: () => void;
}