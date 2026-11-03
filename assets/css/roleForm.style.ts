import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  form: {
    gap: 12,
  },

  label: {
    color: COLORS.primaryDark,
    fontWeight: "600",
    fontSize: 14,
  },

  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: COLORS.textDark,
  },

  inputError: {
    borderColor: COLORS.error,
  },

  errorText: {
    color: COLORS.error,
    fontSize: 13,
  },

  submitButton: {
    backgroundColor: COLORS.buttonBackground,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },

  submitText: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 15,
  },

  disabled: {
    opacity: COLORS.buttonDisabledOpacity,
  },
});