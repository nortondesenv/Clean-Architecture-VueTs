import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/sass/style.scss';
import VueScreenSize from 'vue-screen-size';

Vue.config.productionTip = false;
Vue.use(VueScreenSize);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
