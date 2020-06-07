import { apiServices } from '../_services/api.services'


export default {
    data: () => ({
        dialog: false,

        name: '',
        description: '',
        nbrmax: '',
        prix: '',
        date: '',
        id_user: '',

        newPrestation: {},

    }),

    methods: {
        saveData() {
            this.newPrestation = {
                    name: this.name,
                    description: this.description,
                    nbrmax: this.nbrmax,
                    prix: this.prix,
                    date: this.date,
                    id_user: this.id_user,

                }
                // console.log(this.newPrestation)
            apiServices.post('/api/prestation/', this.newPrestation)

            .then(response => {

                console.log(response)


            })


            .catch()


        }
    },
}