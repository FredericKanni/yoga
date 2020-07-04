import { apiServices } from '../_services/api.services'
export default {

    props: {
        prestation: {
            default: function() {
                return {}
            }
        },
    },


    data() {
        return {
            dialog: false,
        }
    },

    methods: {
        deletePretation() {
            this.dialog = false

            this.newPrestation = {

                id: this.prestation,


            }

            //requete 
            apiServices.post('api/prestations/' + this.prestation.id, this.newPrestation)
                .then(({ data }) => {})


            .catch()
        }
    },
}