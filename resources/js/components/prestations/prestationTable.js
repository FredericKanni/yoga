import { apiServices } from '../_services/api.services'

export default {
    data: () => ({


        Prestations: [],


        search: '',


        headers: [{
                text: 'Nom',
                align: 'start',
                value: 'name',
            },
            { text: 'Description', value: 'description' },
            { text: 'Place Max', value: 'nbrmax' },
            { text: 'Prix', value: 'prix' },

        ],



    }),


    methods: {
        getData() {

            // console.log(this.newPrestation)
            apiServices.get('/api/prestation/')

            .then(({ data }) => {

                console.log(data.data)

                data.data.forEach(element => {
                    this.Prestations.push(element)
                });

                // console.log(this.Prestations)
            })


            .catch()


        }
    },

    created() {
        this.getData();
    },
}