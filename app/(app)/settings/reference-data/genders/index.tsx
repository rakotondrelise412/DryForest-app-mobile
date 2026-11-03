import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";

import { COLORS } from "@/constants/colors";
import { Gender } from "@/models/gender.model";
import genderService from "@/services/gender.service";
import { useToast } from "@/components/common/ToastProvider";
import { genderStyles as styles } from "@/assets/css/gender.styles";

export default function GenderListScreen() {
  const [genders, setGenders] = useState<Gender[]>([]);
  const [filteredGenders, setFilteredGenders] = useState<Gender[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [genderToDelete, setGenderToDelete] = useState<Gender | null>(null);

  const { showToast } = useToast();

  const loadGenders = useCallback(async () => {
    try {
      setLoading(true);

      const data = await genderService.getAll();

      setGenders(data);
      setFilteredGenders(data);
    } catch {
      showToast("Impossible de charger les genres.", "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useFocusEffect(
    useCallback(() => {
      loadGenders();
    }, [loadGenders]),
  );

  useEffect(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      setFilteredGenders(genders);
      return;
    }

    setFilteredGenders(
      genders.filter((gender) => gender.name.toLowerCase().includes(value)),
    );
  }, [search, genders]);

  const handleDelete = async () => {
    if (!genderToDelete) return;

    const gender = genderToDelete;

    try {
      setDeletingId(gender.id);

      await genderService.delete(gender.id);

      setGenders((previous) =>
        previous.filter((item) => item.id !== gender.id),
      );

      setGenderToDelete(null);

      showToast("Genre supprimé avec succès.", "success");
    } catch {
      showToast("Erreur lors de la suppression du genre.", "error");
    } finally {
      setDeletingId(null);
    }
  };

  const renderItem = ({ item }: { item: Gender }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="people-outline" size={24} color={COLORS.primary} />
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.genderName}>{item.name}</Text>
        <Text style={styles.genderId}>Identifiant : {item.id}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            router.push(
              `/(app)/settings/reference-data/genders/edit/${item.id}`,
            )
          }
          accessibilityLabel={`Modifier ${item.name}`}
        >
          <Ionicons name="create-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => setGenderToDelete(item)}
          disabled={deletingId === item.id}
          accessibilityLabel={`Supprimer ${item.name}`}
        >
          {deletingId === item.id ? (
            <ActivityIndicator size="small" color={COLORS.error} />
          ) : (
            <Ionicons name="trash-outline" size={19} color={COLORS.error} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/(app)/settings/reference-data")}
        >
          <Ionicons name="arrow-back" size={22} color={COLORS.primaryDark} />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>Gestion des genres</Text>
          <Text style={styles.subtitle}>Gérez les genres de personnes</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color={COLORS.textMutedDark}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un genre..."
            placeholderTextColor={COLORS.textPlaceholder}
            value={search}
            onChangeText={setSearch}
          />

          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Ionicons
                name="close-circle"
                size={20}
                color={COLORS.textMutedDark}
              />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.countText}>{filteredGenders.length} genre(s)</Text>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : (
          <FlatList
            data={filteredGenders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Ionicons
                  name="people-outline"
                  size={48}
                  color={COLORS.textLightGray}
                />

                <Text style={styles.emptyText}>
                  {search
                    ? "Aucun genre trouvé pour cette recherche."
                    : "Aucun genre disponible."}
                </Text>
              </View>
            }
          />
        )}

        {genderToDelete && (
          <View style={styles.deleteConfirmation}>
            <Text style={styles.confirmationTitle}>
              Confirmer la suppression
            </Text>

            <Text style={styles.confirmationMessage}>
              Voulez-vous vraiment supprimer le genre « {genderToDelete.name} »
              ?
            </Text>

            <View style={styles.confirmationActions}>
              <TouchableOpacity
  style={styles.cancelDeleteButton}
  onPress={() => setGenderToDelete(null)}
  disabled={deletingId !== null}
>
  <Text style={styles.cancelDeleteText}>Annuler</Text>
</TouchableOpacity>
              

              <TouchableOpacity
                style={styles.confirmDeleteButton}
                onPress={handleDelete}
                disabled={deletingId !== null}
              >
                {deletingId !== null ? (
                  <ActivityIndicator size="small" color={COLORS.white} />
                ) : (
                  <Text style={styles.confirmDeleteText}>Supprimer</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            router.push("/(app)/settings/reference-data/genders/create")
          }
          activeOpacity={0.8}
        >
          <Ionicons name="add-circle-outline" size={22} color={COLORS.white} />

          <Text style={styles.addButtonText}>Ajouter un genre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
