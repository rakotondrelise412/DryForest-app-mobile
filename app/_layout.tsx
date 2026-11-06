
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ToastProvider } from "@/components/common/ToastProvider";
import { LanguageProvider } from "@/hooks/useLanguage";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <ToastProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(app)" />
          </Stack>
        </ToastProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
