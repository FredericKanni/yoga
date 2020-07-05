import { panierService } from '../components/_services/panierService'
import { apiServices } from '../components/_services/api.services'

export default {
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
        }
    },

    created() {
        this.prestationStep = panierService.getCurrentBasket()
        console.log(this.prestationStep)
        console.log('stepper')
        console.log(panierService.getCurrentBasket())
    },



}