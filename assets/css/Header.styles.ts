import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.primary,
  },

  container: {
    height: 90,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.2)",
    elevation: 5,
  },

  left: {
    width: 50,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  center: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 6,
  },

  title: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "700",
  },

  username: {
    color: COLORS.text,
    fontSize: 13,
    opacity: 0.9,
  },

  right: {
    width: 70,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  logo: {
    width: 100,
    height: 40,
    borderRadius: 6,
  },

  logoPlaceholder: {
    width: 44,
    height: 32,
    backgroundColor: COLORS.whiteTransparent,
    borderRadius: 4,
  },
});

export default styles;