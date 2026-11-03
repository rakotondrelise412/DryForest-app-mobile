import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "@/assets/css/home";
import { COLORS } from "@/constants/colors";

type HomeButtonProps = {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
};

export default function HomeButton({
  title,
  icon,
  onPress,
}: HomeButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <Ionicons name={icon} size={23} color={COLORS.white} />

      <Text style={styles.buttonText}>{title}</Text>

      <Ionicons name="chevron-forward" size={20} color={COLORS.white} />
    </TouchableOpacity>
  );
}