import { styles } from "@/assets/css/usersScreen.styles";
import { Text, View } from "react-native";

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilisateurs</Text>
      <Text>Gestion des comptes utilisateurs.</Text>
    </View>
  );
}