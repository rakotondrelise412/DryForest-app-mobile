import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { useToast } from "@/components/common/ToastProvider";

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import roleService from "@/services/role.service";

import { Role, RoleFormData } from "@/models/role.model";

import RoleForm from "@/components/settings/RoleForm";
import ConfirmDialog from "@/components/common/ConfirmDialog";

import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/css/roles.style";

export default function RolesScreen() {
  const { showToast } = useToast();
  const [roles, setRoles] = useState<Role[]>([]);

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [formVisible, setFormVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const [deleteVisible, setDeleteVisible] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState<Role | null>(null);

  const loadRoles = useCallback(async () => {
    try {
      setLoading(true);

      const data = await roleService.findAll();

      setRoles(data);
    } catch (error: any) {
      showToast(
        error?.response?.data?.message ?? "Impossible de charger les rôles.",
        "error",
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [showToast]);

  useEffect(() => {
    loadRoles();
  }, [loadRoles]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadRoles();
  };

  const openCreateModal = () => {
    setSelectedRole(null);
    setFormVisible(true);
  };

  const openEditModal = (role: Role) => {
    setSelectedRole(role);
    setFormVisible(true);
  };

  const closeFormModal = () => {
    if (submitting) return;

    setFormVisible(false);
    setSelectedRole(null);
  };

  const openDeleteModal = (role: Role) => {
    setRoleToDelete(role);
    setDeleteVisible(true);
  };

  const handleSubmit = async (data: RoleFormData) => {
    try {
      setSubmitting(true);

      if (selectedRole) {
        await roleService.update(selectedRole.id, data);

        showToast("Le rôle a été modifié avec succès.", "success");
      } else {
        await roleService.create(data);

        showToast("Le rôle a été créé avec succès.", "success");
      }

      setFormVisible(false);
      setSelectedRole(null);

      await loadRoles();
    } catch (error: any) {
      showToast(
        error?.response?.data?.message ??
          "Une erreur est survenue lors de l'enregistrement du rôle.",
        "error",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!roleToDelete) return;

    try {
      setSubmitting(true);

      await roleService.remove(roleToDelete.id);

      setDeleteVisible(false);
      setRoleToDelete(null);

      showToast("Le rôle a été supprimé avec succès.", "success");

      await loadRoles();
    } catch (error: any) {
      showToast(
        error?.response?.data?.message ?? "Impossible de supprimer ce rôle.",
        "error",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const renderItem = ({ item }: { item: Role }) => (
    <View style={styles.card}>
      <View style={styles.roleInfo}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="shield-checkmark-outline"
            size={24}
            color={COLORS.primary}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.roleName}>{item.name}</Text>

          <Text style={styles.roleId}>Identifiant : {item.id}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => openEditModal(item)}
          accessibilityLabel={`Modifier le rôle ${item.name}`}
        >
          <Ionicons name="create-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => openDeleteModal(item)}
          accessibilityLabel={`Supprimer le rôle ${item.name}`}
        >
          <Ionicons name="trash-outline" size={20} color={COLORS.error} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/(app)/settings/reference-data")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 12,
        }}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={22} color={COLORS.primary} />

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
          <Text style={styles.title}>Gestion des rôles</Text>

          <Text style={styles.subtitle}>
            {roles.length} rôle(s) enregistré(s)
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={openCreateModal}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={22} color="#FFFFFF" />

          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={roles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
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
                name="shield-outline"
                size={50}
                color={COLORS.primary}
              />

              <Text style={styles.emptyTitle}>Aucun rôle disponible</Text>

              <Text style={styles.emptyText}>
                Appuyez sur « Ajouter » pour créer votre premier rôle.
              </Text>
            </View>
          ) : null
        }
      />

      <RoleForm
        visible={formVisible}
        role={selectedRole}
        loading={submitting}
        onClose={closeFormModal}
        onSubmit={handleSubmit}
      />

      <ConfirmDialog
        visible={deleteVisible}
        title="Confirmer la suppression"
        message={`Voulez-vous vraiment supprimer le rôle « ${
          roleToDelete?.name ?? ""
        } » ? Cette action est irréversible.`}
        loading={submitting}
        onCancel={() => {
          if (submitting) return;

          setDeleteVisible(false);
          setRoleToDelete(null);
        }}
        onConfirm={handleDelete}
      />
    </View>
  );
}
