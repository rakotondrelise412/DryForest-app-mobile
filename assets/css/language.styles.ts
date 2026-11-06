
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBackground,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.screenBackground,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  headerContent: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textDark,
  },

  headerSubtitle: {
    fontSize: 13,
    color: COLORS.textMutedDark,
    marginTop: 4,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 35,
  },

  currentLanguageCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 16,
    borderRadius: 14,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },

  currentLanguageIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: COLORS.primaryVeryLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  currentLanguageInfo: {
    flex: 1,
  },

  currentLanguageLabel: {
    fontSize: 12,
    color: COLORS.textLightGray,
    marginBottom: 4,
  },

  currentLanguageValue: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textDark,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 14,
  },

  languageList: {
    gap: 12,
  },

  languageCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },

  selectedLanguageCard: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryVeryLight,
  },

  flag: {
    fontSize: 30,
    marginRight: 14,
  },

  languageInfo: {
    flex: 1,
  },

  languageName: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.textDark,
  },

  selectedLanguageName: {
    color: COLORS.primary,
  },

  languageDescription: {
    fontSize: 12,
    color: COLORS.textLightGray,
    marginTop: 5,
  },

  radioButton: {
    width: 21,
    height: 21,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: COLORS.textPlaceholder,
  },

  savingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },

  savingText: {
    fontSize: 13,
    color: COLORS.textMutedDark,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: COLORS.primaryVeryLight,
    padding: 15,
    borderRadius: 12,
    marginTop: 28,
    gap: 10,
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 19,
    color: COLORS.primaryDark,
  },
});
