
import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  // Menu latéral
  drawer: {
    backgroundColor: COLORS.primary,
    width: 270,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: COLORS.border,
  },

  drawerContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
  },

  // En-tête du menu
  drawerHeader: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 18,
    paddingRight: 12,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.border,
  },

  drawerHeaderContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 0,
    marginRight: 8,
  },

  drawerTitleIndicator: {
    width: 3,
    height: 34,
    borderRadius: 3,
    backgroundColor: COLORS.border,
    marginRight: 11,
  },

  drawerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    minWidth: 0,
  },

  drawerTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.2,
  },

  drawerSubtitle: {
    color: COLORS.text,
    opacity: 0.7,
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 1.5,
    marginTop: 4,
  },

  closeButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    overflow: "hidden",
  },

  closeButtonPressed: {
    opacity: 0.65,
    transform: [{ scale: 0.94 }],
  },

  // Zone de navigation
  drawerNavigationContainer: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },

  drawerScrollView: {
    flex: 1,
  },

  drawerContent: {
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 24,
    paddingHorizontal: 8,
  },

  // Rail de défilement
  drawerScrollTrack: {
    position: "absolute",
    top: 8,
    right: 3,
    bottom: 8,
    width: 3,
    borderRadius: 3,
    backgroundColor: COLORS.border,
    opacity: 0.25,
    overflow: "hidden",
  },

  // Curseur de défilement animé
  drawerScrollThumb: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderRadius: 3,
    backgroundColor: COLORS.text,
    opacity: 0.75,
  },

  // Libellés des rubriques
  drawerLabel: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.15,
  },

  // État tactile générique
  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.96 }],
  },
});
