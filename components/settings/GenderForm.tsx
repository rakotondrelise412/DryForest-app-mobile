
import { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { genderStyles as styles } from "@/assets/css/gender.styles";
import { GenderFormData } from "@/models/gender.model";
import { router } from "expo-router";

type Props = {
  initialName?: string;
  submitLabel: string;
  loading?: boolean;
  onSubmit: (data: GenderFormData) => void;
};

export default function GenderForm({
  initialName = "",
  submitLabel,
  loading = false,
  onSubmit,
}: Props) {
  const [name, setName] = useState(initialName);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Veuillez saisir le nom du genre.");
      return;
    }

    if (trimmedName.length < 2) {
      setError("Le nom doit contenir au moins 2 caractères.");
      return;
    }

    setError("");
    onSubmit({ name: trimmedName });
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formCard}>
        <Text style={styles.label}>Nom du genre *</Text>

        <TextInput
          style={[
            styles.input,
            error ? { borderColor: COLORS.error } : undefined,
          ]}
          placeholder="Ex. Homme, Femme"
          placeholderTextColor={COLORS.textPlaceholder}
          value={name}
          onChangeText={(value) => {
            setName(value);
            if (error) setError("");
          }}
          autoCapitalize="words"
          maxLength={50}
          editable={!loading}
        />

        {error ? (
          <Text
            style={{
              color: COLORS.error,
              fontSize: 12,
              marginTop: 6,
            }}
          >
            {error}
          </Text>
        ) : (
          <Text style={styles.helperText}>
            Saisissez le nom du genre à enregistrer.
          </Text>
        )}
      </View>

      <View style={styles.formButtons}>
        <TouchableOpacity
          style={[
            styles.submitButton,
            loading && { opacity: COLORS.buttonDisabledOpacity },
          ]}
          onPress={handleSubmit}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <>
              <Ionicons
                name="checkmark-circle-outline"
                size={20}
                color={COLORS.white}
              />
              <Text style={styles.submitButtonText}>{submitLabel}</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() =>
    router.replace("/(app)/settings/reference-data/genders")
  }
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Annuler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
