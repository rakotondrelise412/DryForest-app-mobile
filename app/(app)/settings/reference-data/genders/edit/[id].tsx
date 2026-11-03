import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

import { COLORS } from "@/constants/colors";
import { genderStyles as styles } from "@/assets/css/gender.styles";
import GenderForm from "@/components/settings/GenderForm";
import genderService from "@/services/gender.service";
import { Gender, GenderFormData } from "@/models/gender.model";
import { useToast } from "@/components/common/ToastProvider";

export default function EditGenderScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [gender, setGender] = useState<Gender | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const { showToast } = useToast();

  const loadGender = useCallback(async () => {
    try {
      const data = await genderService.getById(Number(id));
      setGender(data);
    } catch {
      showToast("Impossible de charger ce genre.", "error");
    } finally {
      setInitialLoading(false);
    }
  }, [id, showToast]);

  useEffect(() => {
    loadGender();
  }, [loadGender]);

  const handleUpdate = async (data: GenderFormData) => {
    try {
      setLoading(true);
      await genderService.update(Number(id), data);

      showToast("Genre modifié avec succès.", "success");
      router.replace("/(app)/settings/reference-data/genders");
    } catch {
      showToast("Erreur lors de la modification du genre.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (!gender) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={22}
              color={COLORS.primaryDark}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Genre introuvable</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color={COLORS.primaryDark}
          />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>Modifier le genre</Text>
          <Text style={styles.subtitle}>
            Mise à jour de « {gender.name} »
          </Text>
        </View>
      </View>

      <GenderForm
        initialName={gender.name}
        submitLabel="Enregistrer les modifications"
        loading={loading}
        onSubmit={handleUpdate}
      />
    </View>
  );
}