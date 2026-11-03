import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";

import DrawerHeader from "@/components/navigation/DrawerHeader";
import DrawerNavigationItems from "@/components/navigation/DrawerNavigationItems";
import MonitoringHeader from "@/components/navigation/MonitoringHeader";

import { styles } from "@/assets/css/drawerStyle.styles";

const LOGO = require("../../../assets/img/Home_Dry_Forest.png");

const SCREEN_TITLES: Record<string, string> = {
  index: "Gestion des zones",
  create: "Créer une zone",
  "[id]": "Détails d'une zone",
  "edit/[id]": "Modifier une zone",
  "needs/index": "Besoins des zones",
  "needs/create": "Ajouter un besoin",
  "needs/[id]": "Détails des besoins",
};

export default function ZonesLayout() {
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
      {/* Liste et carte des zones */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Gestion des zones",
          drawerLabel: "Gestion des zones",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Création d'une zone */}
      <Drawer.Screen
        name="create"
        options={{
          title: "Créer une zone",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'une zone */}
      <Drawer.Screen
        name="[id]"
        options={{
          title: "Détails d'une zone",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Modification d'une zone */}
      <Drawer.Screen
        name="edit/[id]"
        options={{
          title: "Modifier une zone",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Besoins des zones */}
      <Drawer.Screen
        name="needs/index"
        options={{
          title: "Besoins des zones",
          drawerLabel: "Besoins des zones",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Ajouter un besoin */}
      <Drawer.Screen
        name="needs/create"
        options={{
          title: "Ajouter un besoin",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un besoin */}
      <Drawer.Screen
        name="needs/[id]"
        options={{
          title: "Détails des besoins",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}