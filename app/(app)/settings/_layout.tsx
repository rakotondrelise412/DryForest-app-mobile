import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";

import DrawerHeader from "@/components/navigation/DrawerHeader";
import DrawerNavigationItems from "@/components/navigation/DrawerNavigationItems";
import MonitoringHeader from "@/components/navigation/MonitoringHeader";

import { styles } from "@/assets/css/drawerStyle.styles";

const LOGO = require("../../../assets/img/Home_Dry_Forest.png");

const SCREEN_TITLES: Record<string, string> = {
  index: "Paramètres",
  profile: "Profil utilisateur",
  security: "Sécurité",
  language: "Langue de l'application",
  synchronization: "Synchronisation",
  "reference-data/index": "Données de référence",
  "reference-data/roles": "Rôles",
  "reference-data/genders": "Genres",
  "reference-data/species-types": "Types d'espèces",
  "reference-data/severities": "Gravités",
  "reference-data/zone-types": "Types de zone",
  "reference-data/incident-types": "Types d'incident",
  "reference-data/observation-types": "Types d'observation",
  "reference-data/animal-categories": "Catégories d'animaux",
};

export default function SettingsLayout() {
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
      {/* Paramètres généraux */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Paramètres",
          drawerLabel: "Paramètres",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Profil utilisateur */}
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profil utilisateur",
          drawerLabel: "Profil utilisateur",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="person-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* Sécurité */}
      <Drawer.Screen
        name="security"
        options={{
          title: "Sécurité",
          drawerLabel: "Sécurité",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="lock-closed-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Langue */}
      <Drawer.Screen
        name="language"
        options={{
          title: "Langue de l'application",
          drawerLabel: "Langue",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="language-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Synchronisation */}
      <Drawer.Screen
        name="synchronization"
        options={{
          title: "Synchronisation",
          drawerLabel: "Synchronisation",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="sync-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Menu des données de référence */}
      <Drawer.Screen
        name="reference-data/index"
        options={{
          title: "Données de référence",
          drawerLabel: "Données de référence",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Référentiel des rôles */}
      <Drawer.Screen
        name="reference-data/roles"
        options={{
          title: "Rôles",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Référentiel des genres */}
      <Drawer.Screen
        name="reference-data/genders"
        options={{
          title: "Genres",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Référentiel des types d'espèces */}
      <Drawer.Screen
        name="reference-data/species-types"
        options={{
          title: "Types d'espèces",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Référentiel des gravités */}
      <Drawer.Screen
        name="reference-data/severities"
        options={{
          title: "Gravités",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Référentiel des types de zone */}
      <Drawer.Screen
        name="reference-data/zone-types"
        options={{
          title: "Types de zone",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Référentiel des types d'incident */}
      <Drawer.Screen
        name="reference-data/incident-types"
        options={{
          title: "Types d'incident",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Référentiel des types d'observation */}
      <Drawer.Screen
        name="reference-data/observation-types"
        options={{
          title: "Types d'observation",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Référentiel des catégories d'animaux */}
      <Drawer.Screen
        name="reference-data/animal-categories"
        options={{
          title: "Catégories d'animaux",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}