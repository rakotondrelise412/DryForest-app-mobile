import { Text, View } from "react-native";
import { styles } from "@/assets/css/personScreen.styles";

export default function PersonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employés</Text>
      <Text>Gestion des employés de Dry Forest.</Text>
    </View>
  );
}