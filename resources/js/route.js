import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from './views/Accueil.vue';
import Profil from './views/Profil.vue';
import Dashboard from './views/Dashboard.vue';
import Login from './components/login/Login.vue';
import MesPrestations from './views/MesPrestations.vue';
import ToutesPrestations from './views/ToutesPrestations.vue';
import Lieu from './components/lieu/lieuView.vue';
import contact from './views/contact.vue';
import Register from './views/Register.vue';
import Stepper from './views/Stepper.vue';
import prestationsProf from './views/prestationsProf.vue';
import { authenticationService } from './components/_services/authentication.service'

import DetailsPrestation from './views/DetailsPrestation.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'accueil',
            component: Accueil,
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            //  meta: { authorize: [Role.Admin] }
            //redemande adrien ou recherche
        },

        {
            path: '/profil',
            name: 'profil',
            component: Profil,
        },

        {
            path: '/profs/:id/prestations',
            name: 'prestationsProf',
            component: prestationsProf,
        },


        {
            path: '/stepper',
            name: 'stepper',
            component: Stepper,
        },

        {
            path: '/contact',
            name: 'contact',
            component: contact,
        },



        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { authorize: [] }
        },

        {
            path: '/mesprestations',
            name: 'mesprestations',
            component: MesPrestations,
        },

        {
            path: '/lieu',
            name: 'lieu',
            component: Lieu,
        },



        {
            path: '/prestations/:id',
            name: 'detailsPrestation',
            component: DetailsPrestation,
        },

        {
            path: '/prestations',
            name: 'prestations',
            component: ToutesPrestations,
        },

        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { authorize: [] }
        },

    ]
})


router.beforeEach((to, from, next) => {

    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta;

    if (authorize && !_.isEmpty(authorize)) {

        const currentUser = authenticationService.currentUserValue;

        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({ path: "/login", query: { returnUrl: to.path } });
        }

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser.role.name)) {
            // role not authorised so redirect to home page
            return next({ path: "/" });
        }

    }

    return next();
});




export default router;