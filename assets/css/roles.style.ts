import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerInfo: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primaryDark,
  },

  subtitle: {
    fontSize: 13,
    color: COLORS.textMutedDark,
    marginTop: 4,
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.buttonBackground,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 5,
  },

  addButtonText: {
    color: COLORS.text,
    fontWeight: "bold",
  },

  list: {
    paddingBottom: 20,
    flexGrow: 1,
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.borderGray,

    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  roleInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: COLORS.primaryVeryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  roleName: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primaryDark,
  },

  roleId: {
    fontSize: 12,
    color: COLORS.textPlaceholder,
    marginTop: 4,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 10,
  },

  editButton: {
    width: 38,
    height: 38,
    backgroundColor: COLORS.primaryVeryLight,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  deleteButton: {
    width: 38,
    height: 38,
    backgroundColor: COLORS.errorLight,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 80,
    paddingHorizontal: 20,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: COLORS.primaryDark,
    marginTop: 16,
  },

  emptyText: {
    fontSize: 14,
    color: COLORS.textMutedDark,
    marginTop: 8,
    textAlign: "center",
    lineHeight: 20,
  },
});