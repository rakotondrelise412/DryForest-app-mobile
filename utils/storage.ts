import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "access_token";

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