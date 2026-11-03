import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { styles } from "@/assets/css/drawerStyle.styles";
import { COLORS } from "../../constants/colors";

interface DrawerHeaderProps {
  onClose: () => void;
}

export default function DrawerHeader({ onClose }: DrawerHeaderProps) {
  return (
    <View style={styles.drawerHeader}>
      <View style={styles.drawerHeaderContent}>
        <View style={styles.drawerTitleIndicator} />

        <View style={styles.drawerTitleContainer}>
          <Text style={styles.drawerTitle} numberOfLines={1}>
            Menu de navigation
          </Text>

          <Text style={styles.drawerSubtitle} numberOfLines={1}>
            DRY FOREST
          </Text>
        </View>
      </View>

      <Pressable
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel="Fermer le menu de navigation"
        hitSlop={8}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.12)",
          borderless: true,
        }}
        style={({ pressed }) => [
          styles.closeButton,
          pressed && styles.closeButtonPressed,
        ]}
      >
        {({ pressed }) => (
          <Ionicons
            name={pressed ? "close" : "close-outline"}
            size={25}
            color={COLORS.text}
          />
        )}
      </Pressable>
    </View>
  );
}
