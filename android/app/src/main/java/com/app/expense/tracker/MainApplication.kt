package com.app.expense.tracker

import android.app.Application
import android.content.res.Configuration

import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.facebook.flipper.android.AndroidFlipperClient
import com.facebook.flipper.android.utils.FlipperUtils
import com.facebook.flipper.core.FlipperClient
import com.facebook.flipper.plugins.inspector.DescriptorMapping
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor
import com.facebook.react.modules.network.NetworkingModule
import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper
import okhttp3.OkHttpClient.Builder

class MainApplication : Application(), ReactApplication {

override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
this,
object : DefaultReactNativeHost(this) {
override fun getPackages(): List<ReactPackage> {
// Packages that cannot be autolinked yet can be added manually here, for example:
// packages.add(new MyReactNativePackage())                                        ;
return PackageList(this).packages
}

override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
}
)

override val reactHost: ReactHost
get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

override fun onCreate() {
super.onCreate()
SoLoader.init(this, false)
if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
// If you opted-in for the New Architecture, we load the native entry point for this app.
load()
}
if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {

val client = AndroidFlipperClient.getInstance(this)
client.addPlugin(InspectorFlipperPlugin(this, DescriptorMapping.withDefaults()))
// client.addPlugin(networkFlipperPlugin)
val networkFlipperPlugin: NetworkFlipperPlugin = NetworkFlipperPlugin()
NetworkingModule.setCustomClientBuilder(
object : NetworkingModule.CustomClientBuilder {
override fun apply(builder: Builder) {
builder.addNetworkInterceptor(FlipperOkhttpInterceptor(networkFlipperPlugin))
}
})
client.addPlugin(networkFlipperPlugin)
client.start()
}
ApplicationLifecycleDispatcher.onApplicationCreate(this)
}

override fun onConfigurationChanged(newConfig: Configuration) {
super.onConfigurationChanged(newConfig)
ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
}
}
