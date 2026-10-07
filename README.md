# @capgo/capacitor-persistent-account

Store a user's account data in native storage from your Capacitor app, so it can still be there after a delete and reinstall. The iOS Keychain keeps it, while on Android retention after uninstall depends on the system.

<a href="https://capgo.app/?ref=plugin_persistent_account"><img src="https://capgo.app/readme-banner.svg?repo=Cap-go/capacitor-persistent-account" alt="Capgo - Instant updates for Capacitor" /></a>

<div align="center">
  <p><b>Capgo</b>: open-source live updates for Ionic and Capacitor apps. Ship OTA fixes and features instantly, without waiting for app store review.</p>
  <h2><a href="https://capgo.app/register/?ref=plugin_persistent_account">➡️ Get started for free</a></h2>
  <p>14-day unlimited free trial. No credit card required</p>
  <p><a href="https://capgo.app/consulting/?ref=plugin_persistent_account">Missing a feature? We'll build the plugin for you 💪</a></p>
</div>

<p align="center">
  <img src="https://raw.githubusercontent.com/Cap-go/capacitor-persistent-account/main/assets/github-social-preview.png" alt="@capgo/capacitor-persistent-account for Capacitor apps" width="300" />
</p>

## Key features

- **Save**: `saveAccount()` stores any serializable account data.
- **Read**: `readAccount()` returns it, including after a reinstall when the platform kept the data.
- **iOS**: stored in the Keychain.
- **Android**: stored with `AccountManager`.
- **Platforms**: iOS, Android and Web. Web uses `localStorage`, which does not survive clearing site data.

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/persistent-account/

## Compatibility

| Plugin version | Capacitor compatibility | Maintained |
| -------------- | ----------------------- | ---------- |
| v8.\*.\*       | v8.\*.\*                | ✅          |
| v7.\*.\*       | v7.\*.\*                | On demand   |
| v6.\*.\*       | v6.\*.\*                | ❌          |
| v5.\*.\*       | v5.\*.\*                | ❌          |

> **Note:** The major version of this plugin follows the major version of Capacitor. Use the version that matches your Capacitor installation (e.g., plugin v8 for Capacitor 8). Only the latest major version is actively maintained.

## Install

You can use our AI-Assisted Setup to install the plugin. Add the Capgo skills to your AI tool using the following command:

```bash
npx skills add https://github.com/cap-go/capacitor-skills --skill capacitor-plugins
```

Then use the following prompt:

```text
Use the `capacitor-plugins` skill from `cap-go/capacitor-skills` to install the `@capgo/capacitor-persistent-account` plugin in my project.
```

If you prefer Manual Setup, install the plugin by running the following commands and follow the platform-specific instructions below:

```bash
npm install @capgo/capacitor-persistent-account
npx cap sync
```

## API

<docgen-index>

* [`readAccount()`](#readaccount)
* [`saveAccount(...)`](#saveaccount)
* [`getPluginVersion()`](#getpluginversion)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Capacitor Persistent Account Plugin

Provides persistent storage for account data across app sessions using platform-specific
secure storage mechanisms. On iOS, this uses the Keychain. On Android, this uses
AccountManager. This ensures account data persists even after app reinstallation.

### readAccount()

```typescript
readAccount() => Promise<{ data: unknown | null; }>
```

Reads the stored account data from persistent storage.

Retrieves account data that was previously saved using saveAccount(). The data
persists across app sessions and survives app reinstallation on supported platforms.

**Returns:** <code>Promise&lt;{ data: unknown; }&gt;</code>

--------------------


### saveAccount(...)

```typescript
saveAccount(options: { data: unknown; }) => Promise<void>
```

Saves account data to persistent storage.

Stores the provided account data using platform-specific secure storage mechanisms.
The data will persist across app sessions and survive app reinstallation.
Any existing account data will be overwritten.

| Param         | Type                            | Description                                       |
| ------------- | ------------------------------- | ------------------------------------------------- |
| **`options`** | <code>{ data: unknown; }</code> | - The options object containing the data to save. |

--------------------


### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor plugin version

Returns the version string of the native plugin implementation. Useful for
debugging and ensuring compatibility between the JavaScript and native layers.

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

--------------------

</docgen-api>
