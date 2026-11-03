import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBackground,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 21,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 13,
    color: COLORS.textMutedDark,
    lineHeight: 20,
  },

  list: {
    paddingBottom: 25,
    gap: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderRadius: 14,
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 4,
  },

  cardDescription: {
    fontSize: 12,
    color: COLORS.textLightGray,
  },
});