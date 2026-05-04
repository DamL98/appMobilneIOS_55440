import React, { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppHeader } from "../src/components/AppHeader";
import { CategoryFilter } from "../src/components/CategoryFilter";
import { EmptyState } from "../src/components/EmptyState";
import { EventCard } from "../src/components/EventCard";
import { INITIAL_EVENTS } from "../src/data/events";
import type { Category, EventItem } from "../src/types/event";

export default function EventCatalogScreen() {
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Wszystkie");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const visibleEvents = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    return events.filter((event) => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "Wszystkie" || event.category === selectedCategory;

      const matchesFavoriteMode = !favoritesOnly || event.favorite;

      return matchesSearch && matchesCategory && matchesFavoriteMode;
    });
  }, [events, searchText, selectedCategory, favoritesOnly]);

  const toggleFavorite = (eventId: string) => {
    setEvents((currentEvents) =>
      currentEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              favorite: !event.favorite,
            }
          : event,
      ),
    );
  };

  const clearFilters = () => {
    setSearchText("");
    setSelectedCategory("Wszystkie");
    setFavoritesOnly(false);
  };

  const hasActiveFilters =
    searchText.length > 0 || selectedCategory !== "Wszystkie" || favoritesOnly;

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.screen, isDark && styles.screenDark]}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <View style={styles.container}>
        <AppHeader
          isDark={isDark}
          onToggleTheme={() => setIsDark((current) => !current)}
        />

        <Text style={[styles.resultsText, isDark && styles.textMutedDark]}>
          Widoczne wyniki: {visibleEvents.length}
        </Text>

        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Szukaj wydarzenia..."
          placeholderTextColor={isDark ? "#94A3B8" : "#64748B"}
          style={[styles.input, isDark && styles.inputDark]}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          isDark={isDark}
        />

        <View style={styles.actionsRow}>
          <Pressable
            onPress={() => setFavoritesOnly((current) => !current)}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.modeButton,
              favoritesOnly && styles.modeButtonActive,
              pressed && styles.pressed,
            ]}
          >
            <Text
              style={[
                styles.modeButtonText,
                favoritesOnly && styles.modeButtonTextActive,
              ]}
            >
              Tylko ulubione
            </Text>
          </Pressable>

          {hasActiveFilters && (
            <Pressable
              onPress={clearFilters}
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.clearButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.clearButtonText}>Wyczyść filtry</Text>
            </Pressable>
          )}
        </View>

        <FlatList
          style={styles.list}
          data={visibleEvents}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={<EmptyState isDark={isDark} />}
          contentContainerStyle={styles.eventsListContent}
          renderItem={({ item }) => (
            <EventCard
              title={item.title}
              date={item.date}
              category={item.category}
              location={item.location}
              favorite={item.favorite}
              badge={item.badge}
              isDark={isDark}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  screenDark: {
    backgroundColor: "#0F172A",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  resultsText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 12,
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0F172A",
    marginBottom: 14,
  },
  inputDark: {
    borderColor: "#334155",
    backgroundColor: "#1E293B",
    color: "#F8FAFC",
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  modeButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    marginRight: 10,
  },
  modeButtonActive: {
    backgroundColor: "#FEF3C7",
    borderColor: "#F59E0B",
  },
  modeButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
  },
  modeButtonTextActive: {
    color: "#92400E",
  },
  clearButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "#FEE2E2",
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#991B1B",
  },
  list: {
    flex: 1,
  },
  eventsListContent: {
    paddingTop: 4,
    paddingBottom: 28,
  },
  textMutedDark: {
    color: "#CBD5E1",
  },
  pressed: {
    opacity: 0.72,
  },
});
