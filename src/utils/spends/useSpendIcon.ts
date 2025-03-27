import { useState, useCallback } from "react";

export type SpendCategory =
  | "food"
  | "rent"
  | "travel"
  | "utility"
  | "entertainment"
  | "shopping"
  | "health"
  | "education"
  | "gift"
  | "fitness"
  | "investment"
  | "unknown";

export const spendIcons: Record<SpendCategory, string> = {
  food: "🍔",
  rent: "🏠",
  travel: "✈️",
  utility: "🔌",
  entertainment: "🎬",
  shopping: "🛍️",
  health: "🏥",
  education: "📚",
  gift: "🎁",
  fitness: "🏋️",
  investment: "📈",
  unknown: "❓",
};

export const colorToCategory: Record<SpendCategory, string> = {
  food: "#C76542",
  rent: "#4ade80",
  travel: "#41476E",
  utility: "#ef4444",
  entertainment: "#fed7aa",
  shopping: "#c084fc",
  health: "#FFBB50",
  education: "#E8C1B4",
  gift: "#564E4A",
  fitness: "#C03403",
  investment: "#6b21a8",
  unknown: "#d4d4d4",
};

export const keywordToCategory: Record<SpendCategory, string[]> = {
  food: [
    "pizza",
    "burger",
    "sandwich",
    "pasta",
    "coffee",
    "snack",
    "dinner",
    "lunch",
    "breakfast",
    "food",
  ],
  rent: ["rent", "lease", "mortgage"],
  utility: [
    "electricity",
    "water",
    "gas",
    "internet",
    "phone",
    "heating",
    "cooling",
    "electric bill",
    "water bill",
    "gas bill",
    "internet bill",
    "phone bill",
    "utility",
  ],
  travel: [
    "flight",
    "train",
    "bus",
    "taxi",
    "uber",
    "lyft",
    "car rental",
    "airfare",
    "metro",
    "travel",
  ],
  entertainment: [
    "movie",
    "netflix",
    "concert",
    "game",
    "party",
    "show",
    "theater",
    "cinema",
    "entertainment",
  ],
  shopping: [
    "clothes",
    "shoes",
    "electronics",
    "makeup",
    "accessories",
    "jewelry",
    "furniture",
    "appliances",
    "shopping",
  ],
  health: [
    "medicine",
    "doctor",
    "hospital",
    "pharmacy",
    "checkup",
    "therapy",
    "surgery",
    "health",
  ],
  education: [
    "books",
    "tuition",
    "course",
    "workshop",
    "seminar",
    "study material",
    "online class",
    "education",
  ],
  gift: ["gift", "present", "donation", "charity", "wedding", "birthday"],
  fitness: [
    "gym",
    "yoga",
    "workout",
    "trainer",
    "sports",
    "exercise",
    "fitness",
  ],
  investment: [
    "stocks",
    "shares",
    "mutual funds",
    "crypto",
    "savings",
    "bonds",
    "investment",
  ],
  unknown: [],
};

export const useSpendIcon = () => {
  const [icon, setIcon] = useState<string>(spendIcons.unknown);
  const [category, setCategory] = useState<SpendCategory>("unknown");

  const getSpendIcon = useCallback((transactionHead: string): string => {
    const lowerCaseHead = transactionHead.toLowerCase();

    const category = (Object.keys(keywordToCategory) as SpendCategory[]).find(
      (cat) =>
        keywordToCategory[cat].some((keyword) =>
          lowerCaseHead.includes(keyword)
        )
    );

    const matchedIcon = spendIcons[category || "unknown"];
    // setIcon(matchedIcon);
    return matchedIcon;
  }, []);

  const getSpendType = useCallback((transactionHead: string): SpendCategory => {
    const lowerCaseHead = transactionHead.toLowerCase();

    const category = (Object.keys(keywordToCategory) as SpendCategory[]).find(
      (cat) =>
        keywordToCategory[cat].some((keyword) =>
          lowerCaseHead.includes(keyword)
        )
    );

    return category || "unknown";
  }, []);

  return { icon, getSpendIcon, getSpendType };
};
