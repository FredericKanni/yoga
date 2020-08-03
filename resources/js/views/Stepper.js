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
            total: 0,


            commande: {
                paiement: '',
                panier: '',
            },

            headers: [
                { text: 'ID', align: 'start', value: 'id', },
                { text: 'Prestation', align: 'start', value: 'name', },
                { text: 'Prix unitaire', value: 'prix' },
                { text: 'Quantité', value: 'placeNbr' },
                { text: 'Total', value: 'total' },
                { text: 'Suppression', value: 'actions' },
                //     { text: 'Total', value: 'total' },

            ],
            prestations: [],
            priceTotal: [],

        }
    },

    methods: {

        deleteItem(item) {
            console.log(item)

            // enleve la donne supprimer de Prestations
            this.prestations.forEach(element => {
                if (element.id == item.id) {

                    this.prestations.splice(this.prestations.indexOf(element), 1)


                    panierService.deleteFromPanier(item)
                        // console.log(item)

                }
            });

            this.getTotal()
        },

        minusItem(item) {

            console.log('-------')
            console.log(item)
            panierService.minusItemPanier(item)
            if (item.placeNbr <= 0) {
                this.deleteItem(item)





                this.prestations.forEach(element => {
                    if (element.id == item.id) {
                        this.prestations.splice(this.prestations.indexOf(element), 1)
                    }
                });







            }
            this.getTotal()
        },

        plusItem(item) {
            console.log('++++++++')
            console.log(item)


            panierService.plusItemPanier(item)
            this.getTotal()
        },

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

        getTotal() {
            let t = panierService.getCurrentBasket()
            this.total = 0;
            for (var item in t) {
                console.log(item)

                this.total += panierService.getCurrentBasket()[item].placeNbr * panierService.getCurrentBasket()[item].prix

            }
        }

    },

    created() {
        this.prestationStep = panierService.getCurrentBasket()
            // this.prestations = panierService.getCurrentBasket()
            // console.log("----------")
            // console.log(this.prestationStep)
            // console.log("----------")
        for (var item in panierService.getCurrentBasket()) {
            // console.log(item)
            // console.log("----------")
            // console.log(panierService.getCurrentBasket()[item])
            //     // console.log(panierService.getCurrentBasket()[item].prix)
            //     // console.log(panierService.getCurrentBasket()[item].placeNbr)
            // console.log(panierService.getCurrentBasket()[item].placeNbr * panierService.getCurrentBasket()[item].prix)
            // this.total += panierService.getCurrentBasket()[item].placeNbr * panierService.getCurrentBasket()[item].prix
            this.getTotal();
            // console.log("----------")
            this.prestations.push(panierService.getCurrentBasket()[item])

            // console.log(this.prestations)
            if (!this.prestations[0]) {
                console.log("zero")
            }

        }

    },





}