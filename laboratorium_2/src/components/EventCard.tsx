import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { Badge, EventCategory } from "../types/event";

type EventCardProps = {
  title: string;
  date: string;
  category: EventCategory;
  location: string;
  favorite: boolean;
  badge?: Badge;
  isDark: boolean;
  onToggleFavorite: () => void;
};

export function EventCard({
  title,
  date,
  category,
  location,
  favorite,
  badge,
  isDark,
  onToggleFavorite,
}: EventCardProps) {
  return (
    <View style={[styles.card, isDark && styles.cardDark]}>
      <View style={styles.cardTopRow}>
        <View style={styles.cardTitleBox}>
          <Text style={[styles.cardTitle, isDark && styles.textLight]}>
            {title}
          </Text>

          <Text style={[styles.cardMeta, isDark && styles.textMutedDark]}>
            {date} • {location}
          </Text>
        </View>

        {badge ? (
          <View
            style={[styles.badge, badge === "Popularne" && styles.badgePopular]}
          >
            <Text
              style={[
                styles.badgeText,
                badge === "Popularne" && styles.badgePopularText,
              ]}
            >
              {badge}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.cardBottomRow}>
        <View style={[styles.categoryPill, isDark && styles.categoryPillDark]}>
          <Text
            numberOfLines={1}
            style={[styles.categoryText, isDark && styles.textLight]}
          >
            {category}
          </Text>
        </View>

        <Pressable
          onPress={onToggleFavorite}
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.favoriteButton,
            favorite ? styles.removeFavoriteButton : styles.addFavoriteButton,
            isDark && favorite && styles.removeFavoriteButtonDark,
            pressed && styles.pressed,
          ]}
        >
          <Text
            style={[
              styles.favoriteButtonText,
              favorite
                ? styles.removeFavoriteButtonText
                : styles.addFavoriteButtonText,
              isDark && favorite && styles.removeFavoriteButtonTextDark,
            ]}
          >
            {favorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 3,
    marginBottom: 14,
  },
  cardDark: {
    backgroundColor: "#1E293B",
    borderColor: "#334155",
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  cardTitleBox: {
    flex: 1,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 6,
  },
  cardMeta: {
    fontSize: 14,
    color: "#64748B",
  },
  badge: {
    borderRadius: 999,
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgePopular: {
    backgroundColor: "#FCE7F3",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#1D4ED8",
  },
  badgePopularText: {
    color: "#BE185D",
  },
  cardBottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryPill: {
    width: 92,
    minHeight: 42,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  categoryPillDark: {
    backgroundColor: "#334155",
  },
  categoryText: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "800",
  },
  favoriteButton: {
    flex: 1,
    minHeight: 42,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  addFavoriteButton: {
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
  },
  removeFavoriteButton: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FCA5A5",
  },
  removeFavoriteButtonDark: {
    backgroundColor: "#7F1D1D",
    borderColor: "#B91C1C",
  },
  favoriteButtonText: {
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
  },
  addFavoriteButtonText: {
    color: "#1D4ED8",
  },
  removeFavoriteButtonText: {
    color: "#991B1B",
  },
  removeFavoriteButtonTextDark: {
    color: "#FEE2E2",
  },
  textLight: {
    color: "#F8FAFC",
  },
  textMutedDark: {
    color: "#CBD5E1",
  },
  pressed: {
    opacity: 0.72,
  },
});
