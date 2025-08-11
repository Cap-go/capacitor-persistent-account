import { registerPlugin } from '@capacitor/core';

import type { CapacitorPersistentAccountPlugin } from './definitions';

const CapacitorPersistentAccount = registerPlugin<CapacitorPersistentAccountPlugin>('CapacitorPersistentAccount', {
  web: () => import('./web').then((m) => new m.CapacitorPersistentAccountWeb()),
});

export * from './definitions';
export { CapacitorPersistentAccount };
