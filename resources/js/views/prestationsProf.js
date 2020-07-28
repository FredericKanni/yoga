import { apiServices } from '../components/_services/api.services'
import { authenticationService } from '../components/_services/authentication.service'
export default {
    data() {
        return {
            user: {},
            isAdmin: '',
        }
    },

    methods: {

        /**
         * recupere les prestations du prof en function de son id en BDD
         */
        getDatas() {
            console.log(this.$route.params.id)

            apiServices.get('/api/profs/' + this.$route.params.id + '/prestations', { id: this.$route.params.id })
                .then((data) => {
                    console.log(data.data[0])
                    this.user = data.data[0]
                })
                .catch()
        }

    },

    created() {
        this.getDatas();
        this.isAdmin = authenticationService.isAdmin();
        console.log(this.isAdmin)
    },
}