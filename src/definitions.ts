export interface CapacitorPersistentAccountPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
