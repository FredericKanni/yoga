import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from './views/Accueil.vue';
import Profil from './views/Profil.vue';
import Dashboard from './views/Dashboard.vue';

import MesPrestations from './views/MesPrestations.vue';
import ToutesPrestations from './views/ToutesPrestations.vue';


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
            path: '/mesprestations',
            name: 'mesprestations',
            component: MesPrestations,
        },

        {
            path: '/prestations',
            name: 'prestations',
            component: ToutesPrestations,
        },

    ]
});

export default router;