import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { styles } from "@/assets/css/MonitoringHeader.styles";
import { COLORS } from "@/constants/colors";
import { removeToken } from "@/utils/storage";
import { useToast } from "../common/ToastProvider";

type Props = {
  title?: string;
  username?: string;
  logo?: number;
  onMenuPress: () => void;
  menuOpen?: boolean;
};

type TooltipType = "menu" | "home" | "logout" | null;

export default function MonitoringHeader({
  title = "Dry Forest",
  username = "Utilisateur connecté",
  logo,
  onMenuPress,
  menuOpen = false,
}: Props) {
  const router = useRouter();
  const { showToast } = useToast();

  const [tooltip, setTooltip] = useState<TooltipType>(null);

  const goToHome = () => {
    setTooltip(null);
    router.push("/home");
  };

  const handleMenuPress = () => {
    setTooltip(null);
    onMenuPress();
  };

  const handleLogout = async () => {
    setTooltip(null);

    try {
      await removeToken();
      router.replace("/(auth)/login");
    } catch {
      showToast("Impossible de supprimer la session. Réessayez.", "error");
    }
  };

  return (
    <View style={styles.safe}>
      <View style={styles.container}>
        {/* BOUTON MENU */}
        <View style={styles.left}>
          {tooltip === "menu" && (
            <View pointerEvents="none" style={styles.tooltip}>
              <Text style={styles.tooltipText}>
                {menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              </Text>
            </View>
          )}

          <Pressable
            onPress={handleMenuPress}
            onHoverIn={() => setTooltip("menu")}
            onHoverOut={() => setTooltip(null)}
            accessibilityRole="button"
            accessibilityLabel={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            accessibilityHint="Affiche ou masque les rubriques de navigation"
            hitSlop={8}
            style={({ pressed }) => [
              styles.iconButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              name={menuOpen ? "close-outline" : "menu-outline"}
              size={28}
              color={COLORS.text}
            />
          </Pressable>
        </View>

        {/* TITRE ET UTILISATEUR */}
        <View style={styles.center}>
          {tooltip === "home" && (
            <View pointerEvents="none" style={styles.tooltip}>
              <Text style={styles.tooltipText}>
                Retourner à l&apos;accueil
              </Text>
            </View>
          )}

          <Pressable
            onPress={goToHome}
            onHoverIn={() => setTooltip("home")}
            onHoverOut={() => setTooltip(null)}
            accessibilityRole="link"
            accessibilityLabel="Accueil Dry Forest"
            accessibilityHint="Ouvre la page d'accueil"
            style={({ pressed }) => [
              styles.homeLink,
              pressed && styles.pressedHome,
            ]}
          >
            <View style={styles.titleRow}>
              <Ionicons
                name="home-outline"
                size={18}
                color={COLORS.text}
                style={styles.homeIcon}
              />

              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {title}
              </Text>
            </View>

            <Text
              style={styles.username}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {username}
            </Text>
          </Pressable>
        </View>

        {/* DÉCONNEXION ET LOGO */}
        <View style={styles.right}>
          <View style={styles.logoutContainer}>
            {tooltip === "logout" && (
              <View pointerEvents="none" style={styles.logoutTooltip}>
                <Text style={styles.tooltipText}>Se déconnecter</Text>
              </View>
            )}

            <Pressable
              style={({ pressed }) => [
                styles.logoutButton,
                pressed && styles.pressed,
              ]}
              onPress={handleLogout}
              onHoverIn={() => setTooltip("logout")}
              onHoverOut={() => setTooltip(null)}
              accessibilityLabel="Se déconnecter"
              accessibilityRole="button"
              hitSlop={8}
            >
              <Ionicons
                name="log-out-outline"
                size={22}
                color={COLORS.white}
              />
            </Pressable>
          </View>

          {logo ? (
            <Image
              source={logo}
              style={styles.logo}
              resizeMode="contain"
              accessible
              accessibilityLabel="Logo Dry Forest"
            />
          ) : (
            <View style={styles.logoPlaceholder} accessible={false} />
          )}
        </View>
      </View>
    </View>
  );
}