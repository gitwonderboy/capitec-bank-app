const webpack = require("@nativescript/webpack");
const { resolve } = require("path");

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
    if (webpack.Utils.platform.getPlatformName() === "android") {
      // make sure the path to the applicatioon.android.(js|ts)
      // is relative to the webpack.config.js
      // you may need to use `./app/application.android if
      // your app source is located inside the ./app folder.
      config
        .entry("application")
        .add(resolve(__dirname, "./app/android.app.Application.js"));
    }
  });

  env.appComponents = (env.appComponents || []).concat([
    resolve("./app/activity.android.js"),
  ]);
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  return webpack.resolveConfig();
};
