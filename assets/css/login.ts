import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  backgroundOverlay: {
  flex: 1,
  backgroundColor: COLORS.overlay,
},

  container: {
    flex: 1,
  },

  keyboardContainer: {
    flex: 1,
    width: "100%",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  loginContainer: {
    width: "100%",
    maxWidth: 440,
    alignItems: "center",
  },

  // Identité Dry Forest
  brandContainer: {
    width: "100%",
    alignItems: "center",
    lineHeight: 0,
    marginBottom: 28,
  },

  logoContainer: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: COLORS.placeholder,
    borderWidth: 1,
    borderColor: COLORS.textSecondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  treeImage: {
    width: 88,
    height: 88,
  },

  brandTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: 0.5,
    textAlign: "center",
  },

  brandSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 8,
    textAlign: "center",
  },

  // Formulaire
  formContainer: {
  width: "100%",
  backgroundColor: COLORS.formBackground,
  borderRadius: 24,
  paddingHorizontal: 22,
  paddingTop: 26,
  paddingBottom: 24,
  borderWidth: 1,
  borderColor: COLORS.inputBorder,
  elevation: 5,
  shadowColor: COLORS.shadow,
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.2,
  shadowRadius: 12,
},

  headingContainer: {
    marginBottom: 26,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 21,
  },

  // Champs de saisie
  fieldContainer: {
    width: "100%",
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 9,
  },

  
passwordInputContainer: {
  width: "100%",
  minHeight: 52,
  backgroundColor: COLORS.inputBackground,
  borderWidth: 1,
  borderColor: COLORS.inputBorder,
  borderRadius: 12,
  flexDirection: "row",
  alignItems: "center",
  overflow: "hidden",
},

usersInput: {
  flex: 1,
  minWidth: 0,
  minHeight: 50,
  height: 50,
  paddingHorizontal: 12,
  paddingVertical: 0,
  color: COLORS.text,
  outlineColor: COLORS.inputBorder,
  fontSize: 15,
  borderTopRightRadius: 11,
  borderBottomRightRadius: 11,
},

passwordInput: {
  flex: 1,
  minWidth: 0,
  minHeight: 50,
  height: 50,
  paddingHorizontal: 12,
  paddingVertical: 0,
  color: COLORS.text,
  fontSize: 15,
  outlineColor: COLORS.inputBorder,
},

inputIcon: {
  marginLeft: 12,
  marginRight: 8,
},

eyeButton: {
  width: 40,
  minHeight: 50,
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
},


  inputError: {
    borderWidth: 2,
    borderColor: COLORS.error,
  },


  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  loadingDots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  dot: {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: COLORS.text,
},

  dot1: {
    opacity: 0.4,
  },

  dot2: {
    opacity: 0.7,
  },

  dot3: {
    opacity: 1,
  },

  errorText: {
    color: COLORS.errorText,
    fontSize: 12,
    marginTop: 7,
    lineHeight: 17,
  },

  loginErrorContainer: {
    backgroundColor: COLORS.errorBackground,
    borderWidth: 1,
    borderColor: COLORS.error,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 11,
    marginBottom: 16,
  },

  loginErrorText: {
    color: COLORS.errorText,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },

  // Bouton
  button: {
    width: "100%",
    minHeight: 54,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    elevation: 3,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonDisabled: {
    opacity: 0.65,
  },

  buttonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  buttonArrow: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 12,
  },

  securityText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    lineHeight: 17,
    textAlign: "center",
    marginTop: 18,
  },

  // Pied de page
  footer: {
    width: "100%",
    alignItems: "center",
    marginTop: 28,
  },

  footerText: {
    color: COLORS.textSecondary,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
    textAlign: "center",
  },

  footerCopyright: {
    color: COLORS.textSecondary,
    fontSize: 11,
    marginTop: 8,
  },
});
