import { WebPlugin } from '@capacitor/core';

import type { CapacitorPersistentAccountPlugin } from './definitions';

const WEB_STORAGE_KEY = 'capacitor_persistent_account';

export class CapacitorPersistentAccountWeb extends WebPlugin implements CapacitorPersistentAccountPlugin {
  async readAccount(): Promise<{ data: unknown | null }> {
    try {
      const raw = localStorage.getItem(WEB_STORAGE_KEY);
      return { data: raw ? JSON.parse(raw) : null };
    } catch (err) {
      return { data: null };
    }
  }

  async saveAccount(data: unknown): Promise<void> {
    try {
      localStorage.setItem(WEB_STORAGE_KEY, JSON.stringify(data ?? null));
    } catch (err) {
      // ignore
    }
  }
}
