import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";

import DrawerHeader from "@/components/navigation/DrawerHeader";
import DrawerNavigationItems from "@/components/navigation/DrawerNavigationItems";
import MonitoringHeader from "@/components/navigation/MonitoringHeader";

import { styles } from "@/assets/css/drawerStyle.styles";

const LOGO = require("../../../assets/img/Home_Dry_Forest.png");

const SCREEN_TITLES: Record<string, string> = {
  index: "Reboisement",
  create: "Créer un projet",
  "[id]": "Détails du reboisement",
  "details/[id]": "Détails du projet",

  "blocks/index": "Blocs de plantation",
  "blocks/create": "Créer un bloc",
  "blocks/[id]": "Détails d'un bloc",

  "subplots/index": "Sous-parcelles",
  "subplots/create": "Créer une sous-parcelle",
  "subplots/[id]": "Détails d'une sous-parcelle",

  "plantation/index": "Plantations",
  "plantation/create": "Créer une plantation",
  "plantation/[id]": "Détails d'une plantation",
  "plantation/edit/[id]": "Modifier une plantation",

  "monitoring/index": "Suivi des plantations",
  "monitoring/create": "Créer un suivi",
  "monitoring/[id]": "Détails d'un suivi",
};

export default function ReforestationLayout() {
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
          title: "Reboisement",
          drawerLabel: "Reboisement",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="leaf-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Création d'un projet */}
      <Drawer.Screen
        name="create"
        options={{
          title: "Créer un projet",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un reboisement */}
      <Drawer.Screen
        name="[id]"
        options={{
          title: "Détails du reboisement",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails complémentaires d'un projet */}
      <Drawer.Screen
        name="details/[id]"
        options={{
          title: "Détails du projet",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Gestion des blocs de plantation */}
      <Drawer.Screen
        name="blocks/index"
        options={{
          title: "Blocs de plantation",
          drawerLabel: "Blocs de plantation",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Création d'un bloc */}
      <Drawer.Screen
        name="blocks/create"
        options={{
          title: "Créer un bloc",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un bloc */}
      <Drawer.Screen
        name="blocks/[id]"
        options={{
          title: "Détails d'un bloc",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Gestion des sous-parcelles */}
      <Drawer.Screen
        name="subplots/index"
        options={{
          title: "Sous-parcelles",
          drawerLabel: "Sous-parcelles",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Création d'une sous-parcelle */}
      <Drawer.Screen
        name="subplots/create"
        options={{
          title: "Créer une sous-parcelle",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'une sous-parcelle */}
      <Drawer.Screen
        name="subplots/[id]"
        options={{
          title: "Détails d'une sous-parcelle",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Gestion des plantations */}
      <Drawer.Screen
        name="plantation/index"
        options={{
          title: "Plantations",
          drawerLabel: "Plantations",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="flower-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Création d'une plantation */}
      <Drawer.Screen
        name="plantation/create"
        options={{
          title: "Créer une plantation",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'une plantation */}
      <Drawer.Screen
        name="plantation/[id]"
        options={{
          title: "Détails d'une plantation",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Modification d'une plantation */}
      <Drawer.Screen
        name="plantation/edit/[id]"
        options={{
          title: "Modifier une plantation",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Suivi des plantations */}
      <Drawer.Screen
        name="monitoring/index"
        options={{
          title: "Suivi des plantations",
          drawerLabel: "Suivi des plantations",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="analytics-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Création d'un suivi */}
      <Drawer.Screen
        name="monitoring/create"
        options={{
          title: "Créer un suivi",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un suivi */}
      <Drawer.Screen
        name="monitoring/[id]"
        options={{
          title: "Détails d'un suivi",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}