import { apiServices } from '../components/_services/api.services'
import { panierService } from '../components/_services/panierService'
export default {
    data() {
        return {
            destinationId: this.$route.params.id,
            prestation: null,
            prestationDetails: null,
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
                        // console.log(this.prestationDetails)
                })


            .catch()
        },


        addToPanier() {
            panierService.addToPanier(this.prestationDetails);
        }
    },

    created() {

        // console.log(this.destinationId)
        this.getDatas();
    },
}