
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 16,
    gap: 12,
  },

  info: {
    fontSize: 12,
    color: COLORS.textMutedDark,
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: COLORS.primaryVeryLight,
    alignItems: "center",
    justifyContent: "center",
  },

  pageButton: {
    minWidth: 36,
    height: 36,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    alignItems: "center",
    justifyContent: "center",
  },

  activePage: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  pageText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.primaryDark,
  },

  activePageText: {
    color: COLORS.white,
  },

  disabled: {
    opacity: 0.4,
  },
});
