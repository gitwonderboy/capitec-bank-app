const superProto = android.app.Application.prototype;

// the first parameter of the `extend` call defines the package and the name for the native *.JAVA file generated.
android.app.Application.extend("org.myApp.Application", {
  onCreate: function () {
    superProto.onCreate.call(this);
    console.log("BBC We Good !!!");

    // At this point modules have already been initialized

    // Enter custom initialization code here
  },
  attachBaseContext: function (base) {
    superProto.attachBaseContext.call(this, base);
    // This code enables MultiDex support for the application (if needed compile androidx.multidex:multidex)
    // androidx.multidex.MultiDex.install(this);
  },
});
