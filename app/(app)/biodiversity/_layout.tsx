import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";

import DrawerHeader from "@/components/navigation/DrawerHeader";
import DrawerNavigationItems from "@/components/navigation/DrawerNavigationItems";
import MonitoringHeader from "@/components/navigation/MonitoringHeader";

import { styles } from "@/assets/css/drawerStyle.styles";

const LOGO = require("../../../assets/img/Home_Dry_Forest.png");

const SCREEN_TITLES: Record<string, string> = {
  index: "Biodiversité",
  "species/index": "Espèces végétales",
  "species/create": "Ajouter une espèce",
  "species/[id]": "Détails d'une espèce",
  "animals/index": "Animaux",
  "animals/create": "Ajouter un animal",
  "animals/[id]": "Détails d'un animal",
};

export default function BiodiversityLayout() {
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
      {/* Vue générale de la biodiversité */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Biodiversité",
          drawerLabel: "Biodiversité",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="leaf-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Gestion des espèces végétales */}
      <Drawer.Screen
        name="species/index"
        options={{
          title: "Espèces végétales",
          drawerLabel: "Espèces végétales",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="flower-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Ajouter une espèce */}
      <Drawer.Screen
        name="species/create"
        options={{
          title: "Ajouter une espèce",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'une espèce */}
      <Drawer.Screen
        name="species/[id]"
        options={{
          title: "Détails d'une espèce",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Gestion des animaux */}
      <Drawer.Screen
        name="animals/index"
        options={{
          title: "Animaux",
          drawerLabel: "Animaux",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="paw-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Ajouter un animal */}
      <Drawer.Screen
        name="animals/create"
        options={{
          title: "Ajouter un animal",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un animal */}
      <Drawer.Screen
        name="animals/[id]"
        options={{
          title: "Détails d'un animal",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}