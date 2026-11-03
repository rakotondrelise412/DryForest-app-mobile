import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";

import DrawerHeader from "@/components/navigation/DrawerHeader";
import DrawerNavigationItems from "@/components/navigation/DrawerNavigationItems";
import MonitoringHeader from "@/components/navigation/MonitoringHeader";

import { styles } from "@/assets/css/drawerStyle.styles";

const LOGO = require("../../../assets/img/Home_Dry_Forest.png");

const SCREEN_TITLES: Record<string, string> = {
  index: "Suivi des animaux",
  "animal-tracking": "Suivi des observations",
  "[id]": "Détails d'un suivi",
  "details/[id]": "Détails d'une observation",
};

export default function AnimalsLayout() {
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
      {/* Vue générale du suivi des animaux */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Suivi des animaux",
          drawerLabel: "Suivi des animaux",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="paw-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Ancienne route conservée */}
      <Drawer.Screen
        name="animal-tracking"
        options={{
          title: "Suivi des observations",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un suivi */}
      <Drawer.Screen
        name="[id]"
        options={{
          title: "Détails d'un suivi",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'une observation */}
      <Drawer.Screen
        name="details/[id]"
        options={{
          title: "Détails d'une observation",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}