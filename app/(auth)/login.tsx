import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../../constants/colors";
import { styles } from "../../assets/css/login";
import { useLogin } from "../../hooks/useLogin";
import LoginForm from "../../components/forms/LoginForm";

export default function LoginScreen() {
  const login = useLogin();

  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.backgroundOverlay}>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={COLORS.primaryDark}
          />

          <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              bounces={false}
            >
              <View style={styles.loginContainer}>
                <View style={styles.brandContainer}>
                  <Text style={styles.brandTitle}>Dry Forest</Text>
                  <Text style={styles.brandSubtitle}>
                    Miaraka, andao arovantsika ny alantsika.
                  </Text>
                </View>

                <LoginForm {...login} />

                <View style={styles.footer}>
                  <Text style={styles.footerText}>
                    MIARO • MAMBOLY • MIKOLOKOLO
                  </Text>
                  <Text style={styles.footerCopyright}>
                    © Dry Forest
                  </Text>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}