package ee.forgr.capacitor_persistent_account;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

@CapacitorPlugin(name = "CapacitorPersistentAccount")
public class CapacitorPersistentAccountPlugin extends Plugin {

    private final String pluginVersion = "8.0.1";

    private CapacitorPersistentAccount implementation;

    @Override
    public void load() {
        super.load();
        implementation = new CapacitorPersistentAccount(getContext());
    }

    @PluginMethod
    public void readAccount(PluginCall call) {
        JSObject ret = new JSObject();
        try {
            org.json.JSONObject data = implementation.readAccount();
            if (data != null) {
                ret.put("data", new org.json.JSONObject(data.toString()));
            } else {
                ret.put("data", org.json.JSONObject.NULL);
            }
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to read account: " + e.getMessage());
        }
    }

    @PluginMethod
    public void saveAccount(PluginCall call) {
        try {
            JSObject data = call.getObject("data");
            org.json.JSONObject json = data != null ? new org.json.JSONObject(data.toString()) : null;
            implementation.saveAccount(json);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to save account: " + e.getMessage());
        }
    }

    @PluginMethod
    public void getPluginVersion(final PluginCall call) {
        try {
            final JSObject ret = new JSObject();
            ret.put("version", this.pluginVersion);
            call.resolve(ret);
        } catch (final Exception e) {
            call.reject("Could not get plugin version", e);
        }
    }
}
