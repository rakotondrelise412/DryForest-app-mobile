import { Text, View } from "react-native";
import { styles } from "@/assets/css/usersScreen.styles";

export default function PlanataionIndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilisateurs et accès</Text>
      <Text>Gestion des employés et des comptes utilisateurs.</Text>
    </View>
  );
}