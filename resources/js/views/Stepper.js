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

            headers: [{
                    text: 'Prestation',
                    align: 'start',
                    value: 'name',
                },

                { text: 'Prix unitaire', value: 'prix' },
                { text: 'Quantité', value: 'qt' },
                { text: 'Total', value: 'total' },
                { text: 'Supprimer', value: 'actions' },
            ],
            desserts: [{
                    name: 'Frozen Yogurt',
                    qt: 159,
                    prix: 6.0,
                    carbs: 24,
                    total: 4.0,
                    actions: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    qt: 237,
                    prix: 9.0,
                    carbs: 37,
                    total: 4.3,
                    actions: '1%',
                },

            ],

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