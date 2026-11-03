import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 55,
    left: 16,
    right: 16,
    zIndex: 9999,
    elevation: 10,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 12,
  },

  message: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
  },
});