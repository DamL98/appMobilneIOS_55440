export const CATEGORIES = [
  "Wszystkie",
  "Nauka",
  "Sport",
  "Muzyka",
  "Film",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type EventCategory = Exclude<Category, "Wszystkie">;

export type Badge = "Nowe" | "Popularne";

export type EventItem = {
  id: string;
  title: string;
  date: string;
  category: EventCategory;
  location: string;
  favorite: boolean;
  badge?: Badge;
};
