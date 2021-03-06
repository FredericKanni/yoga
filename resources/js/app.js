/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VStripeElements from 'v-stripe-elements/lib';
import DatetimePicker from 'vuetify-datetime-picker'


Vue.use(VueRouter)
Vue.use(Vuetify);
Vue.use(DatetimePicker)
Vue.use(VStripeElements);

import LoadScript from 'vue-plugin-load-script'

Vue.use(LoadScript)
    /**
     * The following block of code may be used to automatically register your
     * Vue components. It will recursively scan this directory for the Vue
     * components and automatically register them with their "basename".
     *
     * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
     */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Layout from './layout/Layout.vue';
import Routes from './route.js';
//Vue.component('layout', require('./layout/Layout.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({}),
    router: Routes,
    components: { Layout }
})


// const app = new Vue({
//     vuetify: new Vuetify({}),

//     el: '#app',
//     router: Routes,
//     components: { Layout }
// }).$mount('#app');

export default new Vuetify(app);