import Vue from "vue";
import App from "./App.vue";
import "openbridge-css/dist/css/openbridge.min.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
