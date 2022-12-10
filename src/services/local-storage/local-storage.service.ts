import { Injectable } from "@angular/core";
import { LocalStorageState, StorageKey } from "./storage.model";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private readonly storage: Storage = localStorage;

  public get<K extends keyof LocalStorageState>(key: K): LocalStorageState[K] {
    const value = this.storage.getItem(key as string);
    return value ? JSON.parse(value) : null;
  }

  public set<K extends keyof LocalStorageState>(
    key: K,
    value: LocalStorageState[K]
  ): void {
    this.storage.setItem(key as string, JSON.stringify(value));
  }

  public remove(key: StorageKey): void {
    this.storage.removeItem(key);
  }

  public clear(): void {
    this.storage.clear();
  }

  public get length(): number {
    return this.storage.length;
  }

  public key(index: number): string | null {
    return this.storage.key(index);
  }

  public has(key: StorageKey): boolean {
    return this.storage.getItem(key) !== null;
  }
}
