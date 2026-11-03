
import { View, Text } from "react-native";
import { styles } from "@/assets/css/animalTrackingDetails.styles";
import { useLocalSearchParams } from "expo-router";

export default function AnimalTrackingDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Détails du suivi animalier
      </Text>

      <Text style={styles.subtitle}>
        Identifiant : {id}
      </Text>
    </View>
  );
}
