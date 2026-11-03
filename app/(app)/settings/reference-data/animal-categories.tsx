
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { router } from "expo-router";

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useToast } from "@/components/common/ToastProvider";

import categoryService from "@/services/animal-category.service";

import type {
  Category,
  CategoryFormData,
  CategorySearchResult,
  Locale,
} from "@/models/animal-category.model";

import CategoryForm from "@/components/settings/CategoryForm";
import ConfirmDialog from "@/components/common/ConfirmDialog";
import Pagination from "@/components/common/Pagination";

import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/css/categories.style";

import { useLanguage } from "@/hooks/useLanguage";

const PAGE_SIZE = 10;
const SEARCH_DELAY = 400;

export default function CategoriesScreen() {
  const { showToast } = useToast();

  const { language } = useLanguage();

  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const [formVisible, setFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const [deleteVisible, setDeleteVisible] = useState(false);
  const [categoryToDelete, setCategoryToDelete] =
    useState<Category | null>(null);

  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  // ============================================================
  // LANGUE ACTIVE
  // ============================================================

  const getCategoryName = useCallback(
    (category: Category): string => {
      const translation = category.translations?.find(
        (item) => item.locale === language,
      );

      if (translation?.name) {
        return translation.name;
      }

      const frenchTranslation = category.translations?.find(
        (item) => item.locale === "FR",
      );

      if (frenchTranslation?.name) {
        return frenchTranslation.name;
      }

      return (
        category.translations?.find((item) => item.name)?.name ??
        "Sans nom"
      );
    },
    [language],
  );

  const getSearchPlaceholder = (): string => {
    const placeholders: Record<Locale, string> = {
      FR: "Rechercher une catégorie...",
      MG: "Hikaroka sokajy...",
      EN: "Search a category...",
    };

    return placeholders[language];
  };

  // ============================================================
  // DEBOUNCE DE LA RECHERCHE
  // ============================================================

  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      setDebouncedSearch(searchText.trim());
      setCurrentPage(0);
    }, SEARCH_DELAY);

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [searchText]);

  // ============================================================
  // CHARGEMENT BACKEND
  // ============================================================

  const loadCategories = useCallback(
    async (page = currentPage) => {
      try {
        setLoading(true);

        const query = {
          searchTerm: debouncedSearch || undefined,
          page,
          size: pageSize,
        };

        const result: CategorySearchResult =
          await categoryService.search(query);

        setCategories(result.content ?? []);
        setCurrentPage(result.pageNumber ?? page);
        setTotalPages(result.totalPages ?? 0);
        setTotalElements(result.totalElements ?? 0);
        setPageSize(result.pageSize ?? PAGE_SIZE);
      } catch (error: any) {
        showToast(
          error?.response?.data?.message ??
            "Impossible de charger les catégories.",
          "error",
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [currentPage, debouncedSearch, pageSize, showToast],
  );

  useEffect(() => {
    loadCategories(0);
  }, [debouncedSearch, loadCategories]);

  // ============================================================
  // RAFRAÎCHISSEMENT
  // ============================================================

  const onRefresh = async () => {
    setRefreshing(true);
    await loadCategories(currentPage);
  };

  // ============================================================
  // PAGINATION
  // ============================================================

  const handlePageChange = (page: number) => {
    if (page < 0 || page >= totalPages) return;

    setCurrentPage(page);
    loadCategories(page);
  };

  // ============================================================
  // FORMULAIRE
  // ============================================================

  const openCreateModal = () => {
    setSelectedCategory(null);
    setFormVisible(true);
  };

  const openEditModal = (category: Category) => {
    setSelectedCategory(category);
    setFormVisible(true);
  };

  const closeFormModal = () => {
    if (submitting) return;

    setFormVisible(false);
    setSelectedCategory(null);
  };

  const handleSubmit = async (data: CategoryFormData) => {
    try {
      setSubmitting(true);

      if (selectedCategory) {
        await categoryService.update(selectedCategory.id, data);

        showToast(
          "La catégorie a été modifiée avec succès.",
          "success",
        );
      } else {
        await categoryService.create(data);

        showToast(
          "La catégorie a été créée avec succès.",
          "success",
        );
      }

      setFormVisible(false);
      setSelectedCategory(null);

      await loadCategories(0);
    } catch (error: any) {
      showToast(
        error?.response?.data?.message ??
          "Une erreur est survenue lors de l'enregistrement.",
        "error",
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ============================================================
  // SUPPRESSION
  // ============================================================

  const openDeleteModal = (category: Category) => {
    setCategoryToDelete(category);
    setDeleteVisible(true);
  };

  const handleDelete = async () => {
    if (!categoryToDelete) return;

    try {
      setSubmitting(true);

      await categoryService.remove(categoryToDelete.id);

      setDeleteVisible(false);
      setCategoryToDelete(null);

      showToast(
        "La catégorie a été supprimée avec succès.",
        "success",
      );

      await loadCategories(currentPage);
    } catch (error: any) {
      showToast(
        error?.response?.data?.message ??
          "Impossible de supprimer cette catégorie.",
        "error",
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ============================================================
  // CARTE CATÉGORIE
  // ============================================================

  const renderItem = ({ item }: { item: Category }) => (
    <View style={styles.card}>
      <View style={styles.categoryInfo}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="pricetags-outline"
            size={24}
            color={COLORS.primary}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.categoryName} numberOfLines={2}>
            {getCategoryName(item)}
          </Text>

          <Text style={styles.categoryId}>
            Identifiant : {item.id}
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => openEditModal(item)}
          accessibilityLabel={`Modifier la catégorie ${getCategoryName(item)}`}
        >
          <Ionicons
            name="create-outline"
            size={20}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => openDeleteModal(item)}
          accessibilityLabel={`Supprimer la catégorie ${getCategoryName(item)}`}
        >
          <Ionicons
            name="trash-outline"
            size={20}
            color={COLORS.error}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  // ============================================================
  // INTERFACE
  // ============================================================

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          router.push("/(app)/settings/reference-data")
        }
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 12,
        }}
        activeOpacity={0.7}
      >
        <Ionicons
          name="arrow-back"
          size={22}
          color={COLORS.primary}
        />

        <Text
          style={{
            color: COLORS.primary,
            marginLeft: 6,
            fontWeight: "600",
          }}
        >
          Retour aux données de référence
        </Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.title}>Gestion des catégories</Text>

          <Text style={styles.subtitle}>
            {totalElements} catégorie(s) enregistrée(s)
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={openCreateModal}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={22} color={COLORS.white} />

          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      {/* RECHERCHE */}

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color={COLORS.textMutedDark}
        />

        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder={getSearchPlaceholder()}
          placeholderTextColor={COLORS.textPlaceholder}
          returnKeyType="search"
          autoCapitalize="none"
        />

        {searchText.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setSearchText("")}
          >
            <Ionicons
              name="close-circle"
              size={20}
              color={COLORS.textMutedDark}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* LISTE */}

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
          />
        }
        ListEmptyComponent={
          !loading ? (
            <View style={styles.emptyContainer}>
              <Ionicons
                name={
                  debouncedSearch
                    ? "search-outline"
                    : "pricetags-outline"
                }
                size={50}
                color={COLORS.primary}
              />

              <Text style={styles.emptyTitle}>
                {debouncedSearch
                  ? "Aucun résultat"
                  : "Aucune catégorie disponible"}
              </Text>

              <Text style={styles.emptyText}>
                {debouncedSearch
                  ? "Essayez avec un autre terme de recherche."
                  : "Appuyez sur « Ajouter » pour créer votre première catégorie."}
              </Text>
            </View>
          ) : null
        }
        ListFooterComponent={
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalElements={totalElements}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            disabled={loading}
          />
        }
      />

      {/* CHARGEMENT */}

      {loading && !refreshing && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.35)",
          }}
          pointerEvents="none"
        >
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
          />
        </View>
      )}

      {/* FORMULAIRE */}

      <CategoryForm
        visible={formVisible}
        category={selectedCategory}
        loading={submitting}
        language={language}
        onClose={closeFormModal}
        onSubmit={handleSubmit}
      />

      {/* CONFIRMATION SUPPRESSION */}

      <ConfirmDialog
        visible={deleteVisible}
        title="Confirmer la suppression"
        message={`Voulez-vous vraiment supprimer la catégorie « ${
          categoryToDelete
            ? getCategoryName(categoryToDelete)
            : ""
        } » ? Cette action est irréversible.`}
        loading={submitting}
        onCancel={() => {
          if (submitting) return;

          setDeleteVisible(false);
          setCategoryToDelete(null);
        }}
        onConfirm={handleDelete}
      />
    </View>
  );
}
