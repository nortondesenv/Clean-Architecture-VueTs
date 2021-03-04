import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/sass/style.scss';
import VueScreenSize from 'vue-screen-size';
import VueApollo from 'vue-apollo';
import apolloClient from './network/Connection';

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueScreenSize);

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

new Vue({
    router,
    store,
    apolloProvider,
    render: h => h(App),
}).$mount('#app');
