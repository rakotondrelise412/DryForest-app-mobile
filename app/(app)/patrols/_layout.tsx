import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";

import DrawerHeader from "@/components/navigation/DrawerHeader";
import DrawerNavigationItems from "@/components/navigation/DrawerNavigationItems";
import MonitoringHeader from "@/components/navigation/MonitoringHeader";

import { styles } from "@/assets/css/drawerStyle.styles";

const LOGO = require("../../../assets/img/Home_Dry_Forest.png");

const SCREEN_TITLES: Record<string, string> = {
  index: "Patrouilles",
  "groups/index": "Groupes de patrouille",
  "groups/create": "Créer un groupe",
  "groups/[id]": "Détails d'un groupe",
  "incidents/index": "Incidents de patrouille",
  "incidents/create": "Déclarer un incident",
  "incidents/[id]": "Détails d'un incident",
  "incident-patrol": "Suivi des incidents",
  "observations/index": "Observations de patrouille",
  "observations/create": "Ajouter une observation",
  "observations/[id]": "Détails d'une observation",
};

export default function PatrolsLayout() {
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
      {/* Tableau des patrouilles */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Patrouilles",
          drawerLabel: "Patrouilles",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="walk-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Groupes de patrouille */}
      <Drawer.Screen
        name="groups/index"
        options={{
          title: "Groupes de patrouille",
          drawerLabel: "Groupes de patrouille",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Création d'un groupe */}
      <Drawer.Screen
        name="groups/create"
        options={{
          title: "Créer un groupe",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un groupe */}
      <Drawer.Screen
        name="groups/[id]"
        options={{
          title: "Détails d'un groupe",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Incidents de patrouille */}
      <Drawer.Screen
        name="incidents/index"
        options={{
          title: "Incidents de patrouille",
          drawerLabel: "Incidents",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="warning-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Déclarer un incident */}
      <Drawer.Screen
        name="incidents/create"
        options={{
          title: "Déclarer un incident",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'un incident */}
      <Drawer.Screen
        name="incidents/[id]"
        options={{
          title: "Détails d'un incident",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Ancienne route conservée */}
      <Drawer.Screen
        name="incident-patrol"
        options={{
          title: "Suivi des incidents",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Observations de patrouille */}
      <Drawer.Screen
        name="observations/index"
        options={{
          title: "Observations de patrouille",
          drawerLabel: "Observations",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="eye-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Ajouter une observation */}
      <Drawer.Screen
        name="observations/create"
        options={{
          title: "Ajouter une observation",
          drawerItemStyle: { display: "none" },
        }}
      />

      {/* Détails d'une observation */}
      <Drawer.Screen
        name="observations/[id]"
        options={{
          title: "Détails d'une observation",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}