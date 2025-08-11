package ee.forgr.capacitor_persistent_account;

import com.getcapacitor.Logger;

public class CapacitorPersistentAccount {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
