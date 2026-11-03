
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const genderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBackground,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 18,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: COLORS.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  headerText: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.textDark,
  },

  subtitle: {
    fontSize: 13,
    color: COLORS.textMutedDark,
    marginTop: 4,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 18,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textDark,
    marginLeft: 10,
  },

  countText: {
    fontSize: 13,
    color: COLORS.textMutedDark,
    marginBottom: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    marginBottom: 12,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: COLORS.primaryVeryLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  cardInfo: {
    flex: 1,
  },

  genderName: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textDark,
  },

  genderId: {
    fontSize: 12,
    color: COLORS.textMutedDark,
    marginTop: 4,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.screenBackground,
  },

  deleteButton: {
    backgroundColor: COLORS.errorLight,
  },

  addButton: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 24,
  },

  addButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 8,
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },

  emptyText: {
    fontSize: 15,
    color: COLORS.textMutedDark,
    marginTop: 12,
    textAlign: "center",
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },

  formCard: {
    backgroundColor: COLORS.background,
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textDark,
    marginBottom: 10,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    backgroundColor: COLORS.screenBackground,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: COLORS.textDark,
  },

  helperText: {
    fontSize: 12,
    color: COLORS.textMutedDark,
    marginTop: 8,
  },

  formButtons: {
    marginTop: 24,
    gap: 12,
  },

  submitButton: {
    height: 52,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  submitButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 8,
  },

  cancelButton: {
    height: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },

  cancelButtonText: {
    color: COLORS.textGray,
    fontWeight: "600",
    fontSize: 14,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  deleteConfirmation: {
  backgroundColor: COLORS.white,
  borderWidth: 1,
  borderColor: COLORS.borderLight,
  borderRadius: 14,
  padding: 18,
  marginTop: 15,
  marginBottom: 15,
},

confirmationTitle: {
  fontSize: 16,
  fontWeight: "bold",
  color: COLORS.primaryDark,
  marginBottom: 10,
},

confirmationMessage: {
  fontSize: 14,
  color: COLORS.textGray,
  lineHeight: 21,
  marginBottom: 18,
},

confirmationActions: {
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 10,
},

cancelDeleteButton: {
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: COLORS.borderLight,
},

cancelDeleteText: {
  color: COLORS.textGray,
  fontWeight: "600",
},

confirmDeleteButton: {
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 8,
  backgroundColor: COLORS.error,
  minWidth: 95,
  alignItems: "center",
},

confirmDeleteText: {
  color: COLORS.white,
  fontWeight: "bold",
},
});
