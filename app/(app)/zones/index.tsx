import { View, Text } from "react-native";
import { styles } from "@/assets/css/animalTrackingDetails.styles";

export default function ZonesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gestion des zones
      </Text>

      <Text style={styles.subtitle}>
        Liste des zones forestières
      </Text>
    </View>
  );
}

