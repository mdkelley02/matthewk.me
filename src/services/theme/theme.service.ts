import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { DARK_MODE_THEME, LIGHT_MODE_THEME, THEME_KEY } from "./theme.model";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { StorageKey } from "../local-storage/storage.model";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private _darkMode: BehaviorSubject<boolean>;

  constructor(private store: LocalStorageService) {
    this._darkMode = new BehaviorSubject<boolean>(true);

    this._darkMode.pipe(
      tap((darkMode) =>
        this.setTheme(darkMode ? DARK_MODE_THEME : LIGHT_MODE_THEME)
      )
    );

    if (this.store.has(StorageKey.DarkMode)) {
      this.darkMode = this.store.get(StorageKey.DarkMode);
    } else {
      this.darkMode = true;
    }
  }

  public get darkMode(): boolean {
    return this._darkMode.value;
  }

  public set darkMode(darkMode: boolean) {
    this._darkMode.next(darkMode);
    this.setTheme(darkMode ? DARK_MODE_THEME : LIGHT_MODE_THEME);
  }

  private setTheme(theme: string): void {
    document.documentElement.setAttribute(THEME_KEY, theme);
    this.store.set(StorageKey.DarkMode, this.darkMode);
  }
}
