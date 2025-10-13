// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapgoCapacitorPersistentAccount",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapgoCapacitorPersistentAccount",
            targets: ["CapacitorPersistentAccountPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.4.3")
    ],
    targets: [
        .target(
            name: "CapacitorPersistentAccountPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorPersistentAccountPlugin"),
        .testTarget(
            name: "CapacitorPersistentAccountPluginTests",
            dependencies: ["CapacitorPersistentAccountPlugin"],
            path: "ios/Tests/CapacitorPersistentAccountPluginTests")
    ]
)
