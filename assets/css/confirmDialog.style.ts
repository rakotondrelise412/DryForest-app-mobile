import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  container: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: COLORS.background,
    padding: 24,
    borderRadius: 18,
    alignItems: "center",
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.errorBackground,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  icon: {
    color: COLORS.error,
    fontSize: 28,
    fontWeight: "bold",
  },

  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: COLORS.primaryDark,
  },

  message: {
    marginTop: 12,
    marginBottom: 24,
    fontSize: 14,
    color: "#555555",
    textAlign: "center",
    lineHeight: 22,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    width: "100%",
  },

  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    alignItems: "center",
  },

  cancelText: {
    color: COLORS.primaryDark,
    fontWeight: "600",
  },

  confirmButton: {
    flex: 1,
    backgroundColor: COLORS.error,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  confirmText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  disabled: {
    opacity: COLORS.buttonDisabledOpacity,
  },
});