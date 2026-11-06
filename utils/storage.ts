
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { Locale } from "@/models/animal-category.model";

const TOKEN_KEY = "access_token";
const LANGUAGE_KEY = "app_language";

const DEFAULT_LANGUAGE: Locale = "FR";

// ============================================================
// VALIDATION DE LA LANGUE
// ============================================================

const isValidLanguage = (value: string | null): value is Locale => {
  return value === "FR" || value === "MG" || value === "EN";
};

// ============================================================
// AUTHENTIFICATION
// ============================================================

export const saveToken = async (token: string): Promise<void> => {
  if (
    typeof token !== "string" ||
    !token.trim() ||
    token.trim() === "undefined" ||
    token.trim() === "null"
  ) {
    throw new Error("Impossible d'enregistrer un JWT invalide.");
  }

  await AsyncStorage.setItem(TOKEN_KEY, token.trim());
};

export const getToken = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  if (
    !token ||
    !token.trim() ||
    token.trim() === "undefined" ||
    token.trim() === "null"
  ) {
    await AsyncStorage.removeItem(TOKEN_KEY);
    return null;
  }

  return token.trim();
};

export const removeToken = async (): Promise<void> => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

// ============================================================
// LANGUE DE L'APPLICATION
// ============================================================

export const saveLanguage = async (
  language: Locale
): Promise<void> => {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
};

export const getSavedLanguage = async (): Promise<Locale> => {
  const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);

  if (isValidLanguage(savedLanguage)) {
    return savedLanguage;
  }

  return DEFAULT_LANGUAGE;
};
