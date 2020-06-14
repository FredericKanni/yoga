import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from './views/Accueil.vue';
import Profil from './views/Profil.vue';
import Dashboard from './views/Dashboard.vue';
import Login from './components/login/Login.vue';
import MesPrestations from './views/MesPrestations.vue';
import ToutesPrestations from './views/ToutesPrestations.vue';
import Lieu from './components/lieu/lieu.vue';

import { authenticationService } from './components/_services/authentication.service'


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
            path: '/login',
            name: 'login',
            component: Login,
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
            path: '/prestations',
            name: 'prestations',
            component: ToutesPrestations,
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