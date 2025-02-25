// constants.ts

export const COLORS = {
    BACKGROUND: "#1B1B1B",     // Dark Mystic Blue/Black
    PRIMARY_TEXT: "#D4AF37",   // Light Gold
    SECONDARY_TEXT: "#C0C0C0", // Soft Gray
    CORRECT_WORDS: "#4CAF50",  // Bright Green
    INCORRECT_WORDS: "#D32F2F", // Fiery Red
    HINTS_HIGHLIGHTS: "#0096FF", // Arcane Blue
    BUTTONS: "#CC2222",        // Dota Red (Classic)
    BORDERS_ACCENTS: "#FF6D00"  // Deep Ember Orange
  } as const;
  
  export type Colors = typeof COLORS;
  