import { apiServices } from '../components/_services/api.services'
import { panierService } from '../components/_services/panierService'
export default {
    data() {
        return {
            destinationId: this.$route.params.id,
            prestation: null,
            prestationDetails: null,
            placeNbr: 0,
            quantityMax: 10,
        }
    },

    methods: {
        getDatas() {
            this.prestation = {
                id: this.destinationId
            }
            console.log('requete')
                //obetnir info de  la prestation en fct de son id
            apiServices.get('/api/prestations/' + this.prestation.id, this.prestation)
                .then(({ data }) => {
                    // console.log(data)
                    this.prestationDetails = data
                    this.quantityMax = this.prestationDetails.nbrmax
                        // this.placeNbr = this.prestationDetails.places_dispo
                        // console.log(this.prestationDetails)
                })


            .catch()
                // console.log(this.prestationDetails)
        },


        addToPanier() {
            panierService.addToPanier(this.prestationDetails, this.placeNbr);
        }
    },

    created() {

        // console.log(this.destinationId)
        this.getDatas();

    },
}