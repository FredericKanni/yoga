import { apiServices } from '../_services/api.services.js'

export default {
    data: () => ({


        equipe: [],





    }),


    methods: {
        getData() {

            // console.log(this.newPrestation)
            apiServices.get('api/equipe')

            .then(({ data }) => {

                // console.log(data.data)

                data.data.forEach(element => {
                    this.equipe.push(element)
                });
                console.log(this.equipe)
                    // console.log(this.Prestations)
            })


            .catch()


        }
    },

    created() {
        this.getData();
    },
}