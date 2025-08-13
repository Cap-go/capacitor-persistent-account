package ee.forgr.capacitor_persistent_account;

import android.accounts.Account;
import android.accounts.AccountManager;
import android.content.Context;
import org.json.JSONException;
import org.json.JSONObject;

class CapacitorPersistentAccount {

    static final String ACCOUNT_TYPE = "ee.forgr.capacitor_persistent_account";
    static final String ACCOUNT_NAME = "CapacitorPersistentAccount";
    static final String USERDATA_JSON = "userdata_json";

    private final Context context;

    CapacitorPersistentAccount(Context context) {
        this.context = context.getApplicationContext();
    }

    void saveAccount(JSONObject data) {
        AccountManager accountManager = AccountManager.get(context);
        Account[] existing = accountManager.getAccountsByType(ACCOUNT_TYPE);
        Account account;
        if (existing.length > 0) {
            account = existing[0];
        } else {
            account = new Account(ACCOUNT_NAME, ACCOUNT_TYPE);
            accountManager.addAccountExplicitly(account, null, null);
        }
        accountManager.setUserData(account, USERDATA_JSON, data != null ? data.toString() : null);
    }

    JSONObject readAccount() {
        AccountManager accountManager = AccountManager.get(context);
        Account[] existing = accountManager.getAccountsByType(ACCOUNT_TYPE);
        if (existing.length == 0) {
            return null;
        }
        String raw = accountManager.getUserData(existing[0], USERDATA_JSON);
        if (raw == null || raw.isEmpty()) return null;
        try {
            return new JSONObject(raw);
        } catch (JSONException e) {
            return null;
        }
    }
}
