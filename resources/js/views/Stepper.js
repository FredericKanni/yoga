import { panierService } from '../components/_services/panierService'
import { VStripeCard } from 'v-stripe-elements/lib'
import { apiServices } from '../components/_services/api.services'
// import VStripeCard from 'v-stripe-elements/lib/VStripeCard'
export default {
    // components: { VStripeCard },
    components: {
        VStripeCard,
    },
    data() {
        return {
            e1: 1,
            prestationStep: '',

            orderList: [],
            nom: '',
            prenom: '',
            ville: '',
            codePostal: '',
            pays: '',
            adresse: '',
            hidden: true,
            checkbox: false,

            source: null,
            apiKey: 'pk_test_51GubguEFBEwEutzrRD48zBSo4GaSGhtnhZmB6uIXPRHx6BFMEXtWfRwYHSVRASsPjYPkIneyRcAE4KWfpf1vry9t00LkBr0MTN',
            intentToken: '',



            commande: {
                paiement: '',
                panier: '',
            },
        }
    },

    methods: {
        getOrder() {
            this.orderList = panierService.getCurrentBasket();
        },
        displayInputs() {
            if (this.checkbox === true) {
                this.hidden = false;
            } else {
                this.hidden = true;
            }
        },

        /**
         * enregistre la commande en BDD
         */
        valideCommande() {
            console.log('-----------------')
                // console.log(panierService.getCurrentBasket())
            this.commande.panier = panierService.getCurrentBasket()

            apiServices.post('api/commandes', this.commande)

            .then(response => {
                console.log(response)
            })


            .catch()


            this.e1 = 2
        },

        process() {
            console.log(this.source)


            this.commande.paiement = this.source;

            panierService.paiement(this.commande)
        },

    },

    created() {
        this.prestationStep = panierService.getCurrentBasket()
        console.log(this.prestationStep)
        console.log('stepper')
        console.log(panierService.getCurrentBasket())
    },





}