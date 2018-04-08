import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import Store from './vuex/indxe';

import Axios from 'axios';
import Vueaxios from 'vue-axios';
Vue.use(Vuex);
Vue.use(Vueaxios, Axios);
let store = new Vuex.Store(Store);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
