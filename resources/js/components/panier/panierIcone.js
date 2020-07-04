import { EventBus } from "../_helpers/event.bus";
import { panierService } from "../_services/panierService";
export default {
    data() {
        return {

            quantity: "0",
            itemBasket: [],
        }
    },

    methods: {
        getQuantityPanier() {
            this.quantity = panierService.basketSizeRecup();
            EventBus.$on('BasketSize', basketSize => {
                this.quantity = basketSize

                // this.initTable(panierService.getCurrentBasket())
            });
        },

        //pour affiche les 3 premier presta dans le pti menu 
        initTable(itemBasket) {
            this.itemBasket = []
            let counter = 0
            let BreakException = {}
            try {
                for (var key in itemBasket) {
                    var item = itemBasket[key]
                    this.itemBasket.push(item)
                    counter++
                    if (counter === 3) {
                        throw BreakException
                    }
                }
            } catch (e) {
                if (e !== BreakException) {
                    throw e
                }
            }
        },

    },

    created() {
        this.getQuantityPanier();
        console.log(panierService.getCurrentBasket())
    },



}