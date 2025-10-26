/**
 * Capacitor Persistent Account Plugin
 *
 * Provides persistent storage for account data across app sessions using platform-specific
 * secure storage mechanisms. On iOS, this uses the Keychain. On Android, this uses
 * AccountManager. This ensures account data persists even after app reinstallation.
 *
 * @interface CapacitorPersistentAccountPlugin
 */
export interface CapacitorPersistentAccountPlugin {
  /**
   * Reads the stored account data from persistent storage.
   *
   * Retrieves account data that was previously saved using saveAccount(). The data
   * persists across app sessions and survives app reinstallation on supported platforms.
   *
   * @returns {Promise<{ data: unknown | null }>} A promise that resolves to an object
   *   containing the stored account data, or null if no data has been saved yet.
   *
   * @example
   * ```typescript
   * const result = await CapacitorPersistentAccount.readAccount();
   * if (result.data) {
   *   console.log('Account data:', result.data);
   * } else {
   *   console.log('No account data found');
   * }
   * ```
   */
  readAccount(): Promise<{ data: unknown | null }>;

  /**
   * Saves account data to persistent storage.
   *
   * Stores the provided account data using platform-specific secure storage mechanisms.
   * The data will persist across app sessions and survive app reinstallation.
   * Any existing account data will be overwritten.
   *
   * @param {Object} options - The options object containing the data to save.
   * @param {unknown} options.data - The account data to persist. Can be any serializable data type.
   *
   * @returns {Promise<void>} A promise that resolves when the data has been successfully saved.
   *
   * @throws {Error} Throws an error if the data cannot be saved to persistent storage.
   *
   * @example
   * ```typescript
   * await CapacitorPersistentAccount.saveAccount({
   *   data: {
   *     userId: '12345',
   *     username: 'john.doe',
   *     email: 'john@example.com'
   *   }
   * });
   * ```
   */
  saveAccount(options: { data: unknown }): Promise<void>;

  /**
   * Get the native Capacitor plugin version
   *
   * Returns the version string of the native plugin implementation. Useful for
   * debugging and ensuring compatibility between the JavaScript and native layers.
   *
   * @returns {Promise<{ version: string }>} A promise that resolves to an object
   *   containing the version string of the native plugin.
   *
   * @throws {Error} Throws an error if the version information cannot be retrieved.
   *
   * @example
   * ```typescript
   * const { version } = await CapacitorPersistentAccount.getPluginVersion();
   * console.log('Plugin version:', version);
   * ```
   */
  getPluginVersion(): Promise<{ version: string }>;
}
