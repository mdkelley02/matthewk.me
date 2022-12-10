export const DARK_MODE_THEME = "night" as const;
export const LIGHT_MODE_THEME = "emerald" as const;
export type Theme = typeof DARK_MODE_THEME | typeof LIGHT_MODE_THEME;

export const THEME_KEY = "data-theme" as const;
