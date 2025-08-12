import Foundation
import Security

@objc public class CapacitorPersistentAccount: NSObject {
    private let service = "ee.forgr.capacitor_persistent_account"
    private let account = "CapacitorPersistentAccount"

    public func saveAccount(_ data: Any?) throws {
        let jsonData: Data
        if let data = data {
            guard JSONSerialization.isValidJSONObject(data) else {
                throw NSError(domain: service, code: -1, userInfo: [NSLocalizedDescriptionKey: "Data is not JSON serializable"])
            }
            jsonData = try JSONSerialization.data(withJSONObject: data, options: [])
        } else {
            jsonData = Data()
        }

        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account,
        ]
        // Remove existing item if any
        SecItemDelete(query as CFDictionary)

        var attrs: [String: Any] = query
        attrs[kSecValueData as String] = jsonData
        attrs[kSecAttrAccessible as String] = kSecAttrAccessibleAfterFirstUnlock

        let status = SecItemAdd(attrs as CFDictionary, nil)
        guard status == errSecSuccess else {
            throw NSError(domain: NSOSStatusErrorDomain, code: Int(status), userInfo: [NSLocalizedDescriptionKey: "Keychain save failed: \(status)"])
        }
    }

    public func readAccount() throws -> Any? {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account,
            kSecReturnData as String: true
        ]

        var item: CFTypeRef?
        let status = SecItemCopyMatching(query as CFDictionary, &item)
        if status == errSecItemNotFound {
            return nil
        }
        guard status == errSecSuccess else {
            throw NSError(domain: NSOSStatusErrorDomain, code: Int(status), userInfo: [NSLocalizedDescriptionKey: "Keychain read failed: \(status)"])
        }
        guard let data = item as? Data, !data.isEmpty else { return nil }
        return try JSONSerialization.jsonObject(with: data, options: [])
    }
}
