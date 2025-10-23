export interface CapacitorPersistentAccountPlugin {
  readAccount(): Promise<{ data: unknown | null }>;
  saveAccount(options: { data: unknown }): Promise<void>;

  /**
   * Get the native Capacitor plugin version
   *
   * @returns {Promise<{ id: string }>} an Promise with version for this device
   * @throws An error if the something went wrong
   */
  getPluginVersion(): Promise<{ version: string }>;
}
