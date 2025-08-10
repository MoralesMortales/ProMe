import { Theme, ThemeType } from "./themes";

interface ConfigType {
  darkMode: boolean;
  currentTheme: string;
  themeConfig: ThemeType;
  primaryColor: string;
}

export const Config = {
  darkMode: true,
  currentTheme: "night",

  get themeConfig(): ThemeType {
    const suffix = this.darkMode ? "_dark" : "_light";
    return Theme[`${this.currentTheme}${suffix}`];
  },

  get primaryColor() {
    return this.themeConfig.primaryColor;
  },
  get primaryTextColor() {
    return this.themeConfig.primaryTextColor;
  },
  get secondaryColor() {
    return this.themeConfig.secondaryColor;
  },

  get secondaryColor_2() {
    return this.themeConfig.secondaryColor_2;
  },
} as ConfigType;
