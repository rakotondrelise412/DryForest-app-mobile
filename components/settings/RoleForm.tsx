
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import FormModal from "@/components/common/FormModal";

import { Role, RoleFormData } from "@/models/role.model";
import { styles } from "@/assets/css/roleForm.style";
import { COLORS } from "@/constants/colors";

interface RoleFormProps {
  visible: boolean;
  role: Role | null;
  loading: boolean;
  onClose: () => void;
  onSubmit: (data: RoleFormData) => void;
}

export default function RoleForm({
  visible,
  role,
  loading,
  onClose,
  onSubmit,
}: RoleFormProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const isEditing = role !== null;

  useEffect(() => {
    if (visible) {
      setName(role?.name ?? "");
      setError("");
    }
  }, [visible, role]);

  const handleSubmit = () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Le nom du rôle est obligatoire.");
      return;
    }

    onSubmit({ name: trimmedName });
  };

  return (
    <FormModal
      visible={visible}
      title={isEditing ? "Modifier le rôle" : "Créer un rôle"}
      onClose={onClose}
    >
      <View style={styles.form}>
        <Text style={styles.label}>Nom du rôle *</Text>

        <TextInput
          style={[
            styles.input,
            error ? styles.inputError : undefined,
          ]}
          value={name}
          onChangeText={(value) => {
            setName(value);
            setError("");
          }}
          placeholder="Ex. Administrateur"
          placeholderTextColor="#999999"
          autoCapitalize="words"
          maxLength={100}
        />

        {!!error && (
          <Text style={styles.errorText}>{error}</Text>
        )}

        <TouchableOpacity
          style={[
            styles.submitButton,
            loading && styles.disabled,
          ]}
          onPress={handleSubmit}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.text} />
          ) : (
            <Text style={styles.submitText}>
              {isEditing ? "Enregistrer les modifications" : "Créer le rôle"}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </FormModal>
  );
}

