
import { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { removeToken } from "@/utils/storage";
import { styles } from "@/assets/css/home";
import { COLORS } from "@/constants/colors";
import { useToast } from "@/components/common/ToastProvider";
import HomeButton from "@/components/home/HomeButton";

const TREE = require("../../../assets/img/baobab.png");

export default function HomePage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [showLogoutTooltip, setShowLogoutTooltip] = useState(false);


  const handleLogout = async () => {
    setShowLogoutTooltip(false);

    try {
      await removeToken();
      router.replace("/(auth)/login");
    } catch {
      showToast("Impossible de supprimer la session. Réessayez.", "error");
    }
  };

  return (
    <ImageBackground
      source={TREE}
      style={styles.bg}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.appName}>DRY FOREST</Text>
            <Text style={styles.appSubtitle}>Gestion forestière</Text>
          </View>

          <View style={styles.logoutContainer}>
            {showLogoutTooltip && (
              <View pointerEvents="none" style={styles.logoutTooltip}>
                <Text style={styles.logoutTooltipText}>
                  Se déconnecter
                </Text>
              </View>
            )}

            <Pressable
              style={({ pressed }) => [
                styles.logoutButton,
                pressed && styles.logoutPressed,
              ]}
              onPress={handleLogout}
              onHoverIn={() => setShowLogoutTooltip(true)}
              onHoverOut={() => setShowLogoutTooltip(false)}
              accessibilityLabel="Se déconnecter"
              accessibilityRole="button"
              hitSlop={8}
            >
              <Ionicons
                name="log-out-outline"
                size={24}
                color={COLORS.white}
              />
            </Pressable>
          </View>
        </View>

        {/* CONTENU PRINCIPAL */}
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.welcome1}>BIENVENUE</Text>

          <Text style={styles.welcome2}>dans</Text>

          <Text style={styles.welcome3}>Dry Forest</Text>

          <Text style={styles.description}>
            Protégeons nos forêts et suivons
            {"\n"}
            ensemble les activités de terrain.
          </Text>

          <View style={styles.buttons}>
            <HomeButton
              title="Zones forestières"
              icon="map-outline"
              onPress={() => router.push("/zones")}
            />

            <HomeButton
              title="Reboisement et plantations"
              icon="leaf-outline"
              onPress={() => router.push("/reforestation")}
            />

            <HomeButton
              title="Espèces et biodiversité"
              icon="paw-outline"
              onPress={() => router.push("/biodiversity")}
            />

            <HomeButton
              title="Patrouilles"
              icon="walk-outline"
              onPress={() => router.push("/patrols")}
            />

            <HomeButton
              title="Suivi des animaux"
              icon="locate-outline"
              onPress={() => router.push("/animals/animal-tracking")}
            />

            <HomeButton
              title="Utilisateurs"
              icon="people-outline"
              onPress={() => router.push("/users")}
            />

            <HomeButton
              title="Paramètres"
              icon="settings-outline"
              onPress={() => router.push("/settings")}
            />
          </View>
        </ScrollView>

        {/* PIED DE PAGE */}
        <Text style={styles.footer}>
          Dry Forest — Application mobile
        </Text>
      </View>
    </ImageBackground>
  );

}