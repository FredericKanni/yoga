import { apiServices } from '../_services/api.services'


export default {


    props: {
        prestation: {
            default: function() {
                return {

                }
            }
        },
        isModification: {
            default: false
        },
    },


    // created() {
    //     console.log(this.prestation)
    // },
    data: () => ({
        dialog: false,

        name: '',
        description: '',
        nbrmax: '',
        prix: '',
        date: '',
        id_user: '',
        id: '',

        newPrestation: {},

    }),

    methods: {

        saveData() {
            //on passe la donne prestation qu on veut creer ou edite
            this.newPrestation = {
                id: this.id,
                name: this.name,
                description: this.description,
                nbrmax: this.nbrmax,
                prix: this.prix,
                date: this.date,
                id_user: this.id_user,
            }
            console.log(this.newPrestation)


            //////ATTENTION AU SLASH ICI SINON ERROR 301 DE MER**
            apiServices.post('api/prestation', this.newPrestation)

            .then(response => {
                console.log(response)
            })


            .catch()


        },




        modifierPrestationModal(prestation) {
            //permet de recuperer les valeur dans le modal
            this.id = prestation.id
            this.name = prestation.name
            this.description = prestation.description
            this.nbrmax = prestation.nbrmax
            this.prix = prestation.prix
                // this.date = prestation.date
            this.id_user = prestation.id_user

            // console.log(prestation.id)
            console.log(this.prestation)
        },



    },
}