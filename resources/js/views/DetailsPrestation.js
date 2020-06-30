import { apiServices } from '../components/_services/api.services'
import { panierService } from '../components/_services/panierService'
export default {



    data() {
        return {
            prestaInfos: {},
            placeNbr: 0,
            quantityMax: 10,

        }
    },
    methods: {


        getDatas() {


            (apiServices.get('/api/prestations/' + this.$route.params.id))
            .then(({ data }) => {
                    this.prestaInfos = data;
                    return data;

                })
                .catch()
        },
        addToPanier() {
            panierService.addToPanier(this.prestaInfos, this.placeNbr);
        }
    },

    created() {

        this.getDatas();
        console.log(this.prestaInfos)


    },





}