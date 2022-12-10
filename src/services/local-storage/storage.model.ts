export enum StorageKey {
  DarkMode = "DARK_MODE",
}

export interface LocalStorageState {
  [StorageKey.DarkMode]: boolean;
}
