import { apiServices } from '../_services/api.services.js'

export default {
    data: () => ({


        equipe: [],





    }),


    methods: {
        getData() {

            apiServices.get('api/users/profs')

            .then(({ data }) => {


                data.data.forEach(element => {
                    this.equipe.push(element)
                });
            })


            .catch()


        }
    },

    created() {
        this.getData();
    },
}