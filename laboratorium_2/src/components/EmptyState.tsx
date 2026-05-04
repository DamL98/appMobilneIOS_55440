import React from "react";
import { StyleSheet, Text, View } from "react-native";

type EmptyStateProps = {
  isDark: boolean;
};

export function EmptyState({ isDark }: EmptyStateProps) {
  return (
    <View style={[styles.emptyBox, isDark && styles.emptyBoxDark]}>
      <Text style={[styles.emptyTitle, isDark && styles.textLight]}>
        Brak wydarzeń
      </Text>

      <Text style={[styles.emptyText, isDark && styles.textMutedDark]}>
        Zmień tekst wyszukiwania albo wybrany filtr kategorii.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 28,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  emptyBoxDark: {
    backgroundColor: "#1E293B",
    borderColor: "#334155",
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 20,
  },
  textLight: {
    color: "#F8FAFC",
  },
  textMutedDark: {
    color: "#CBD5E1",
  },
});
