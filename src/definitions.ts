export interface CapacitorPersistentAccountPlugin {
  readAccount(): Promise<{ data: unknown | null }>;
  saveAccount(options: { data: unknown }): Promise<void>;
}
