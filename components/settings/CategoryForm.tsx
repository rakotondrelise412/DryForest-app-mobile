
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import FormModal from "@/components/common/FormModal";

import type {
  Category,
  CategoryFormData,
  Locale,
} from "@/models/animal-category.model";

import { styles } from "@/assets/css/categoryForm.style";
import { COLORS } from "@/constants/colors";

interface CategoryFormProps {
  visible: boolean;
  category: Category | null;
  loading: boolean;
  language: Locale;
  onClose: () => void;
  onSubmit: (data: CategoryFormData) => void;
}

const LANGUAGES: {
  locale: Locale;
  label: string;
  required: boolean;
}[] = [
  { locale: "FR", label: "Français", required: true },
  { locale: "MG", label: "Malagasy", required: false },
  { locale: "EN", label: "English", required: false },
];

export default function CategoryForm({
  visible,
  category,
  loading,
  language,
  onClose,
  onSubmit,
}: CategoryFormProps) {
  const [names, setNames] = useState<Record<Locale, string>>({
    FR: "",
    MG: "",
    EN: "",
  });

  const [error, setError] = useState("");

  const isEditing = category !== null;

  useEffect(() => {
    if (!visible) return;

    const initialNames: Record<Locale, string> = {
      FR: "",
      MG: "",
      EN: "",
    };

    category?.translations?.forEach((translation) => {
      initialNames[translation.locale] = translation.name;
    });

    setNames(initialNames);
    setError("");
  }, [visible, category]);

  const handleSubmit = () => {
    const frenchName = names.FR.trim();

    if (!frenchName) {
      setError("Le nom en français est obligatoire.");
      return;
    }

    const translations = LANGUAGES
      .filter(({ locale }) => names[locale].trim() !== "")
      .map(({ locale }) => {
        const existingTranslation = category?.translations.find(
          (translation) => translation.locale === locale,
        );

        return {
          ...(existingTranslation?.id
            ? { id: existingTranslation.id }
            : {}),
          locale,
          name: names[locale].trim(),
        };
      });

    onSubmit({ translations });
  };

  const handleNameChange = (locale: Locale, value: string) => {
    setNames((previous) => ({
      ...previous,
      [locale]: value,
    }));

    setError("");
  };

  return (
    <FormModal
      visible={visible}
      title={
        isEditing
          ? "Modifier la catégorie"
          : "Créer une catégorie"
      }
      onClose={onClose}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.form}>
          {LANGUAGES.map(({ locale, label, required }) => (
            <View key={locale} style={styles.field}>
              <Text style={styles.label}>
                {label}
                {required ? " *" : ""}
              </Text>

              <TextInput
                style={[
                  styles.input,
                  error && locale === "FR"
                    ? styles.inputError
                    : undefined,
                ]}
                value={names[locale]}
                onChangeText={(value) =>
                  handleNameChange(locale, value)
                }
                placeholder={`Nom en ${label.toLowerCase()}`}
                placeholderTextColor={COLORS.textPlaceholder}
                autoCapitalize="sentences"
                maxLength={150}
              />
            </View>
          ))}

          {!!error && (
            <Text style={styles.errorText}>{error}</Text>
          )}

          <TouchableOpacity
            style={[
              styles.submitButton,
              loading && styles.disabled,
            ]}
            onPress={handleSubmit}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color={COLORS.white} />
            ) : (
              <Text style={styles.submitText}>
                {isEditing
                  ? "Enregistrer les modifications"
                  : "Créer la catégorie"}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </FormModal>
  );
}
