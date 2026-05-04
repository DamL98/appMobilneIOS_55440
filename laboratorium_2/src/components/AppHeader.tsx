import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AppHeaderProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function AppHeader({ isDark, onToggleTheme }: AppHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextBox}>
        <Text style={[styles.title, isDark && styles.textLight]}>
          Katalog wydarzeń
        </Text>

        {/* <Text style={[styles.description, isDark && styles.textMutedDark]}>
          Przeglądaj wydarzenia, filtruj kategorie i zapisuj interesujące
          pozycje.
        </Text> */}
      </View>

      <Pressable
        onPress={onToggleTheme}
        accessibilityRole="button"
        style={({ pressed }) => [
          styles.themeButton,
          isDark && styles.themeButtonDark,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.themeButtonText, isDark && styles.textLight]}>
          {isDark ? "Jasny" : "Ciemny"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 14,
  },
  headerTextBox: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 21,
    color: "#475569",
  },
  themeButton: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "#E2E8F0",
  },
  themeButtonDark: {
    backgroundColor: "#334155",
  },
  themeButtonText: {
    color: "#0F172A",
    fontWeight: "800",
  },
  textLight: {
    color: "#F8FAFC",
  },
  textMutedDark: {
    color: "#CBD5E1",
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
});
