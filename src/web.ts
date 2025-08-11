import { WebPlugin } from '@capacitor/core';

import type { CapacitorPersistentAccountPlugin } from './definitions';

export class CapacitorPersistentAccountWeb extends WebPlugin implements CapacitorPersistentAccountPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
