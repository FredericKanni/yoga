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
            console.log('delete prestation')
            console.log(this.prestation)

            //requete 
            apiServices.post('api/prestations/' + this.prestation.id, this.prestation.id)
                .then(({ data }) => {
                    console.log(data)
                })


            .catch()
        }
    },
}