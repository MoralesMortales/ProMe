export interface ThemeType {
  primaryColor: string;
  primaryTextColor: string;
  secondaryColor: string;
  secondaryColor_2: string;
}

export const Theme: Record<string, ThemeType> = {
  night_light: {
    primaryColor: "#555",
    primaryTextColor: "#fff",
    secondaryColor: "#888",
    secondaryColor_2: "#aaa",
  },
  night_dark: {
    primaryColor: "#999",
    primaryTextColor: "#222",
    secondaryColor: "#bbb",
    secondaryColor_2: "#ddd",
  },
};
