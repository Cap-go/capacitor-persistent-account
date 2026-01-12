import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorPersistentAccountPlugin)
public class CapacitorPersistentAccountPlugin: CAPPlugin, CAPBridgedPlugin {
    private let pluginVersion: String = "8.0.7"
    public let identifier = "CapacitorPersistentAccountPlugin"
    public let jsName = "CapacitorPersistentAccount"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "readAccount", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "saveAccount", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CapacitorPersistentAccount()

    @objc func readAccount(_ call: CAPPluginCall) {
        do {
            let value = try implementation.readAccount()
            call.resolve([ "data": value ?? NSNull() ])
        } catch {
            call.reject("Failed to read account: \(error.localizedDescription)")
        }
    }

    @objc func saveAccount(_ call: CAPPluginCall) {
        do {
            try implementation.saveAccount(call.getObject("data")) // expects any JSON-serializable object
            call.resolve()
        } catch {
            call.reject("Failed to save account: \(error.localizedDescription)")
        }
    }

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.pluginVersion])
    }

}
