import Vue from 'nativescript-vue'
import { Theme } from "@nativescript/theme";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";

//CSS
import "./app.css";

Theme.setMode(Theme.Light);

Vue.use(RadSideDrawer)

import App from './components/App'

Vue.config.silent = !__DEV__

new Vue({
  render: h => h(App)
}).$start()
