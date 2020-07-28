import { apiServices } from '../_services/api.services'
export default {

    props: {

        // snackbar: {
        //     default: function() {
        //         return {

        //         }
        //     }
        // },

        prestation: {
            default: function() {
                return {}
            }
        },

        prestations: {
            default: function() {
                return {

                }
            }
        },
    },








    data() {
        return {
            dialog: false,
            snackbar: false,
            text: "loll",
            timeout: 4000,
        }


    },

    methods: {
        deletePrestation() {





            this.dialog = false
            this.newPrestation = {
                    id: this.prestation,
                }
                //requete 
            apiServices.delete('api/prestations/' + this.prestation.id, this.newPrestation)
                .then(({ data }) => {})
                .catch()
                //trouver la presentation dont lid est = a this.prestations.id
                // enleve la donne supprimer de Prestations
            this.prestations.forEach(element => {
                if (element.id == this.prestation.id) {
                    console.log(element)
                        // console.log(this.prestations.indexOf(element));
                        //on veut enlever element de prestations
                    this.prestations.splice(this.prestations.indexOf(element), 1)
                }
            });


            this.$emit('clickedd', 'toto')

        }
    },
}