
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";
import { useToast } from "@/components/common/ToastProvider";
import { useLanguage } from "@/hooks/useLanguage";
import type { Locale } from "@/models/animal-category.model";
import { styles } from "@/assets/css/language.styles";

interface LanguageOption {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
}

const LANGUAGES: LanguageOption[] = [
  {
    code: "FR",
    name: "Français",
    nativeName: "Français",
    flag: "🇫🇷",
    description: "Utiliser le français dans l'application",
  },
  {
    code: "MG",
    name: "Malagasy",
    nativeName: "Malagasy",
    flag: "🇲🇬",
    description: "Ampiasao amin'ny teny Malagasy ny application",
  },
  {
    code: "EN",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    description: "Use English throughout the application",
  },
];

export default function LanguageScreen() {
  const { language, setLanguage } = useLanguage();
  const { showToast } = useToast();

  const [isSaving, setIsSaving] = useState(false);

  const handleLanguageChange = async (
    newLanguage: Locale
  ): Promise<void> => {
    if (newLanguage === language || isSaving) {
      return;
    }

    try {
      setIsSaving(true);

      await setLanguage(newLanguage);
    } catch (error) {
      console.error(
        "Erreur lors du changement de langue :",
        error
      );

      showToast(
        "Impossible d'enregistrer la langue sélectionnée. Veuillez réessayer.",
        "error"
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom"]}
    >
      {/* En-tête */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Retour"
        >
          <Ionicons
            name="arrow-back"
            size={23}
            color={COLORS.text}
          />
        </Pressable>

        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>
            Langue de l'application
          </Text>

          <Text style={styles.headerSubtitle}>
            Choisissez votre langue préférée
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Langue actuelle */}
        <View style={styles.currentLanguageCard}>
          <View style={styles.currentLanguageIcon}>
            <Ionicons
              name="language"
              size={25}
              color={COLORS.primary}
            />
          </View>

          <View style={styles.currentLanguageInfo}>
            <Text style={styles.currentLanguageLabel}>
              Langue actuelle
            </Text>

            <Text style={styles.currentLanguageValue}>
              {LANGUAGES.find(
                (item) => item.code === language
              )?.nativeName ?? "Français"}
            </Text>
          </View>

          <Ionicons
            name="checkmark-circle"
            size={25}
            color={COLORS.primary}
          />
        </View>

        {/* Liste des langues */}
        <Text style={styles.sectionTitle}>
          Sélectionner une langue
        </Text>

        <View style={styles.languageList}>
          {LANGUAGES.map((item) => {
            const isSelected = language === item.code;

            return (
              <Pressable
                key={item.code}
                style={[
                  styles.languageCard,
                  isSelected && styles.selectedLanguageCard,
                ]}
                onPress={() =>
                  handleLanguageChange(item.code)
                }
                disabled={isSaving}
                accessibilityRole="button"
                accessibilityState={{
                  selected: isSelected,
                  disabled: isSaving,
                }}
              >
                <Text style={styles.flag}>
                  {item.flag}
                </Text>

                <View style={styles.languageInfo}>
                  <Text
                    style={[
                      styles.languageName,
                      isSelected && styles.selectedLanguageName,
                    ]}
                  >
                    {item.name}
                  </Text>

                  <Text style={styles.languageDescription}>
                    {item.description}
                  </Text>
                </View>

                {isSelected ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={COLORS.primary}
                  />
                ) : (
                  <View style={styles.radioButton} />
                )}
              </Pressable>
            );
          })}
        </View>

        {/* Indicateur de sauvegarde */}
        {isSaving && (
          <View style={styles.savingContainer}>
            <ActivityIndicator
              size="small"
              color={COLORS.primary}
            />

            <Text style={styles.savingText}>
              Enregistrement de la langue...
            </Text>
          </View>
        )}

        {/* Information */}
        <View style={styles.infoCard}>
          <Ionicons
            name="information-circle-outline"
            size={21}
            color={COLORS.primary}
          />

          <Text style={styles.infoText}>
            Votre choix sera automatiquement enregistré.
            Vous conserverez cette langue même après avoir
            fermé l'application ou vous être déconnecté.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
