import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { Capacitor } from '@capacitor/core';
import { CapacitorPersistentAccount } from '@capgo/capacitor-persistent-account';

function updateDisplay(name) {
  const display = document.getElementById('nameDisplay');
  display.textContent = name && name.trim() ? name.trim() : '(no name)';
}

window.saveName = async () => {
  const input = document.getElementById('nameInput');
  const value = (input.value || '').trim();
  await CapacitorPersistentAccount.saveAccount({data: { name: value }});
  updateDisplay(value);
};

window.readName = async () => {
  const { data } = await CapacitorPersistentAccount.readAccount();
  const name = data && typeof data === 'object' && 'name' in data ? (data.name || '') : '';
  updateDisplay(String(name));
};

// Initialize on load
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const { data } = await CapacitorPersistentAccount.readAccount();
    const name = data && typeof data === 'object' && 'name' in data ? (data.name || '') : 'alice';
    updateDisplay(String(name));
  } catch (_) {
    updateDisplay('alice');
  }
});

if (Capacitor.isNativePlatform()) {
  CapacitorUpdater.notifyAppReady().catch((error) => {
    console.error('Capgo notifyAppReady failed', error);
  });
}
