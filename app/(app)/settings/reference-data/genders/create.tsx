import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import GenderForm from "@/components/settings/GenderForm";
import genderService from "@/services/gender.service";
import { useToast } from "@/components/common/ToastProvider";
import { GenderFormData } from "@/models/gender.model";
import { genderStyles as styles } from "@/assets/css/gender.styles";
import { COLORS } from "@/constants/colors";

export default function CreateGenderScreen() {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleCreate = async (data: GenderFormData) => {
    try {
      setLoading(true);
      await genderService.create(data);

      showToast("Genre créé avec succès.", "success");
      router.replace("/(app)/settings/reference-data/genders");
    } catch {
      showToast("Erreur lors de la création du genre.", "error");
    } finally {
      setLoading(false);
    }
  };

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
          <Text style={styles.title}>Nouveau genre</Text>
          <Text style={styles.subtitle}>
            Ajouter un genre au référentiel
          </Text>
        </View>
      </View>

      <GenderForm
        submitLabel="Enregistrer le genre"
        loading={loading}
        onSubmit={handleCreate}
      />
    </View>
  );
}