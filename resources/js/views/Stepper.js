import { panierService } from '../components/_services/panierService'
import { apiServices } from '../components/_services/api.services'

export default {
    data() {
        return {
            e1: 1,
            prestationStep: ''
        }
    },

    created() {
        this.prestationStep = panierService.getCurrentBasket()
        console.log(this.prestationStep)
        console.log('stepper')
        console.log(panierService.getCurrentBasket())
    },
}