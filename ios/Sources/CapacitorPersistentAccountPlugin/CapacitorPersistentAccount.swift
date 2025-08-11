import Foundation

@objc public class CapacitorPersistentAccount: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
