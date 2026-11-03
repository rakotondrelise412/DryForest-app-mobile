import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";

import DrawerHeader from "@/components/navigation/DrawerHeader";
import DrawerNavigationItems from "@/components/navigation/DrawerNavigationItems";
import MonitoringHeader from "@/components/navigation/MonitoringHeader";

import { styles } from "@/assets/css/drawerStyle.styles";

const LOGO = require("../../../assets/img/Home_Dry_Forest.png");

const SCREEN_TITLES: Record<string, string> = {
  index: "Utilisateurs et accès",

  create: "Créer un utilisateur",
  "[id]": "Détails d'un utilisateur",
  "edit/[id]": "Modifier un utilisateur",

  "persons/index": "Employés",
  "persons/create": "Ajouter un employé",
  "persons/[id]": "Détails d'un employé",
};

export default function UsersLayout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <View style={styles.drawerContainer}>
          {/* En-tête du menu */}
          <DrawerHeader onClose={() => props.navigation.closeDrawer()} />

          {/* Rubriques de navigation */}
          <DrawerNavigationItems props={props} />
        </View>
      )}
      screenOptions={{
        header: ({ route, options, navigation }) => (
          <MonitoringHeader
            title={options.title ?? SCREEN_TITLES[route.name] ?? route.name}
            username="Utilisateur connecté"
            logo={LOGO}
            onMenuPress={() => navigation.toggleDrawer()}
          />
        ),

        headerShown: true,

        drawerStyle: styles.drawer,

        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#FFFFFF",

        drawerActiveBackgroundColor: "rgba(255, 255, 255, 0.20)",
        drawerInactiveBackgroundColor: "transparent",

        drawerLabelStyle: styles.drawerLabel,
      }}
    >
      {/* Accueil du module */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Utilisateurs et accès",
          drawerLabel: "Utilisateurs et accès",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="shield-checkmark-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* Gestion des employés */}
      <Drawer.Screen
        name="persons/index"
        options={{
          title: "Employés",
          drawerLabel: "Employés",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Création d'un employé */}
      <Drawer.Screen
        name="persons/create"
        options={{
          title: "Ajouter un employé",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un employé */}
      <Drawer.Screen
        name="persons/[id]"
        options={{
          title: "Détails d'un employé",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Création d'un utilisateur */}
      <Drawer.Screen
        name="create"
        options={{
          title: "Créer un utilisateur",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un utilisateur */}
      <Drawer.Screen
        name="[id]"
        options={{
          title: "Détails d'un utilisateur",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Modification d'un utilisateur */}
      <Drawer.Screen
        name="edit/[id]"
        options={{
          title: "Modifier un utilisateur",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}