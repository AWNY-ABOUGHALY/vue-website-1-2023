import Vue from "vue";
import App from "./App.vue";

// router
import router from "./router";

// vuex store
import store from "./store";

// axios config
import axios from "./plugins/axios";

// vuetify
import vuetify from "./plugins/vuetify";

// roboto font
import "roboto-fontface/css/roboto/roboto-fontface.css";

// material icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faTwitter, faFacebook)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// i18n
import i18n from "./plugins/i18n";

// styles
import "./assets/scss/main.scss";

/* eslint-disable no-new */
new Vue({
  router,
  store,
  axios,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
