import { panierService } from '../components/_services/panierService'
import { VStripeCard } from 'v-stripe-elements/lib'
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


            },
        }
    },

    methods: {
        getOrder() {
            this.orderList = basketService.getCurrentBasket();
        },
        displayInputs() {
            if (this.checkbox === true) {
                this.hidden = false;
            } else {
                this.hidden = true;
            }
        },

        process() {
            console.log(this.source)


            this.commande.paiement = this.source;

            panierService.paiement(this.commande)
        }

    },

    created() {
        this.prestationStep = panierService.getCurrentBasket()
        console.log(this.prestationStep)
        console.log('stepper')
        console.log(panierService.getCurrentBasket())
    },





}