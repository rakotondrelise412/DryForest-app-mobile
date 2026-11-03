import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.primary,
    zIndex: 10,
    elevation: 5,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  container: {
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  left: {
    width: 44,
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
  },

  iconButton: {
    width: 40,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  center: {
    flex: 1,
    minWidth: 0,
    justifyContent: "center",
    paddingHorizontal: 8,
    position: "relative",
  },

  homeLink: {
    alignSelf: "flex-start",
    maxWidth: "100%",
    justifyContent: "center",
    borderRadius: 6,
    paddingVertical: 4,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  homeIcon: {
    marginRight: 2,
  },

  title: {
    flexShrink: 1,
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "700",
  },

  username: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 3,
  },

   logoutButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.whiteTransparent,
    alignItems: "center",
    justifyContent: "center",
  },

  
right: {
  width: 112,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 8,
},

logoutContainer: {
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
},

logoutTooltip: {
  position: "absolute",
  right: 55,
  backgroundColor: COLORS.tooltipBackground,
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 8,
  zIndex: 9999,
  elevation: 10,
  minWidth: 120,
  alignItems: "center",
},

  logo: {
    width: 60,
    height: 42,
  },

  logoPlaceholder: {
    width: 44,
    height: 36,
    backgroundColor: COLORS.placeholder,
    borderRadius: 6,
  },

  pressed: {
    backgroundColor: COLORS.primaryDark,
    opacity: 0.85,
  },

  pressedHome: {
    opacity: 0.7,
  },

  tooltip: {
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 100,
    backgroundColor: COLORS.tooltipBackground,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 6,
    marginBottom: 6,
    maxWidth: 200,
    elevation: 8,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  tooltipText: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "500",
  },
});