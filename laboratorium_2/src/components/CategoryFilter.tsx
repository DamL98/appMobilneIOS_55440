import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { CATEGORIES, type Category } from "../types/event";

type CategoryFilterProps = {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  isDark: boolean;
};

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  isDark,
}: CategoryFilterProps) {
  return (
    <View style={styles.wrapper}>
      {CATEGORIES.map((category) => {
        const isActive = category === selectedCategory;

        return (
          <Pressable
            key={category}
            onPress={() => onSelectCategory(category)}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.button,
              isDark && styles.buttonDark,
              isActive && styles.buttonActive,
              pressed && styles.pressed,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                isDark && styles.buttonTextDark,
                isActive && styles.buttonTextActive,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 14,
  },
  button: {
    minHeight: 40,
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: "#E2E8F0",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDark: {
    backgroundColor: "#1E293B",
    borderColor: "#334155",
  },
  buttonActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
  },
  buttonTextDark: {
    color: "#F8FAFC",
  },
  buttonTextActive: {
    color: "#FFFFFF",
  },
  pressed: {
    opacity: 0.72,
  },
});
