
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/css/referenceData.style";

interface ReferenceItem {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
}

const REFERENCE_ITEMS: ReferenceItem[] = [
  {
    title: "Rôles",
    description: "Gestion des rôles et autorisations",
    icon: "shield-checkmark-outline",
    route: "/(app)/settings/reference-data/roles",
  },
  {
    title: "Genres",
    description: "Gestion des genres",
    icon: "people-outline",
    route: "/(app)/settings/reference-data/genders",
  },
  {
    title: "Types d'espèces",
    description: "Gestion des types d'espèces",
    icon: "leaf-outline",
    route: "/(app)/settings/reference-data/species-types",
  },
  {
    title: "Gravités",
    description: "Gestion des niveaux de gravité",
    icon: "alert-circle-outline",
    route: "/(app)/settings/reference-data/severities",
  },
  {
    title: "Types de zone",
    description: "Gestion des types de zone",
    icon: "map-outline",
    route: "/(app)/settings/reference-data/zone-types",
  },
  {
    title: "Types d'incident",
    description: "Gestion des types d'incident",
    icon: "warning-outline",
    route: "/(app)/settings/reference-data/incident-types",
  },
  {
    title: "Types d'observation",
    description: "Gestion des types d'observation",
    icon: "eye-outline",
    route: "/(app)/settings/reference-data/observation-types",
  },
  {
    title: "Catégories d'animaux",
    description: "Gestion des catégories d'animaux",
    icon: "paw-outline",
    route: "/(app)/settings/reference-data/animal-categories",
  },
];

export default function ReferenceDataScreen() {
  const handleNavigation = (route: string) => {
    router.push(route as never);
  };

  const renderItem = ({ item }: { item: ReferenceItem }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleNavigation(item.route)}
      activeOpacity={0.75}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={item.icon}
          size={26}
          color={COLORS.primary}
        />
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>
          {item.description}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={22}
        color={COLORS.primary}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Données de référence</Text>

        <Text style={styles.subtitle}>
          Gérez les informations de référence de l&apos;application DryForest.
        </Text>
      </View>

      <FlatList
        data={REFERENCE_ITEMS}
        keyExtractor={(item) => item.route}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
