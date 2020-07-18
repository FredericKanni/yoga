import { apiServices } from '../_services/api.services.js'

export default {
    data() {
        return {
            listProf: [],
            listUser: [],
            overlay: false,
        }
    },


    methods: {
        //recupere les donnes des uttilisateur en bdd
        getdatas() {
            apiServices.get('api/users/all')

            .then((data) => {
                // console.log(data)

                data.data.forEach(element => {

                    if (element.id_role == 2) {
                        console.log(element.name)
                        this.listProf.push(element)
                    }
                    if (element.id_role == 3) {
                        console.log(element.name)
                        this.listUser.push(element)
                    }


                });

                // console.log(this.listUser)
            })



            .catch()

        }
    },

    created() {
        this.getdatas();
    },
}