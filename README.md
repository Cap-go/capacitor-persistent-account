# @capgo/capacitor-persistent-account

This plugin allows you to securely store account information for a user in Capacitor, and keep it between reinstall

## Install

```bash
npm install @capgo/capacitor-persistent-account
npx cap sync
```

## API

<docgen-index>

* [`readAccount()`](#readaccount)
* [`saveAccount(...)`](#saveaccount)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### readAccount()

```typescript
readAccount() => Promise<{ data: unknown | null; }>
```

**Returns:** <code>Promise&lt;{ data: unknown; }&gt;</code>

--------------------


### saveAccount(...)

```typescript
saveAccount(options: { data: unknown; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ data: unknown; }</code> |

--------------------

</docgen-api>
