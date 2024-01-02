import { Application, setActivityCallbacks } from "@nativescript/core";

const superProto = androidx.appcompat.app.AppCompatActivity.prototype;
androidx.appcompat.app.AppCompatActivity.extend("org.myApp.MainActivity", {
  onCreate: function (savedInstanceState) {
    // Used to make sure the App is inited in case onCreate is called before the rest of the framework
    Application.android.init(this.getApplication());

    // Set the isNativeScriptActivity in onCreate (as done in the original NativeScript activity code)
    // The JS constructor might not be called because the activity is created from Android.
    this.isNativeScriptActivity = true;
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }
    // Modules will take care of calling super.onCreate, do not call it here
    this._callbacks.onCreate(
      this,
      savedInstanceState,
      this.getIntent(),
      superProto.onCreate
    );

    // Add custom initialization logic here
  },
  onNewIntent: function (intent) {
    this._callbacks.onNewIntent(
      this,
      intent,
      superProto.setIntent,
      superProto.onNewIntent
    );
  },
  onSaveInstanceState: function (outState) {
    this._callbacks.onSaveInstanceState(
      this,
      outState,
      superProto.onSaveInstanceState
    );
  },
  onStart: function () {
    this._callbacks.onStart(this, superProto.onStart);
  },
  onStop: function () {
    this._callbacks.onStop(this, superProto.onStop);
  },
  onDestroy: function () {
    this._callbacks.onDestroy(this, superProto.onDestroy);
  },
  onPostResume: function () {
    this._callbacks.onPostResume(this, superProto.onPostResume);
  },
  onBackPressed: function () {
    this._callbacks.onBackPressed(this, superProto.onBackPressed);
  },
  onRequestPermissionsResult: function (
    requestCode,
    permissions,
    grantResults
  ) {
    this._callbacks.onRequestPermissionsResult(
      this,
      requestCode,
      permissions,
      grantResults,
      undefined
    );
  },
  onActivityResult: function (requestCode, resultCode, data) {
    this._callbacks.onActivityResult(
      this,
      requestCode,
      resultCode,
      data,
      superProto.onActivityResult
    );
  },
  /* Add any other events you need to capture */
});
