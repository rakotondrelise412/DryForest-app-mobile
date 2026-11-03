
import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/css/pagination.style";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalElements,
  pageSize,
  onPageChange,
  disabled = false,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = currentPage * pageSize + 1;

  const endItem = Math.min(
    (currentPage + 1) * pageSize,
    totalElements,
  );

  const getVisiblePages = (): number[] => {
    const pages: number[] = [];

    const start = Math.max(0, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    return pages;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        {startItem} - {endItem} / {totalElements}
      </Text>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[
            styles.arrowButton,
            (currentPage === 0 || disabled) && styles.disabled,
          ]}
          disabled={currentPage === 0 || disabled}
          onPress={() => onPageChange(currentPage - 1)}
          accessibilityLabel="Page précédente"
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        {getVisiblePages().map((page) => (
          <TouchableOpacity
            key={page}
            style={[
              styles.pageButton,
              currentPage === page && styles.activePage,
            ]}
            onPress={() => onPageChange(page)}
            disabled={disabled}
          >
            <Text
              style={[
                styles.pageText,
                currentPage === page && styles.activePageText,
              ]}
            >
              {page + 1}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[
            styles.arrowButton,
            (currentPage >= totalPages - 1 || disabled) &&
              styles.disabled,
          ]}
          disabled={currentPage >= totalPages - 1 || disabled}
          onPress={() => onPageChange(currentPage + 1)}
          accessibilityLabel="Page suivante"
        >
          <Ionicons
            name="chevron-forward"
            size={20}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
