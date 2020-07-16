import { apiServices } from '../_services/api.services'
import { authenticationService } from "../_services/authentication.service";
import addPrestation from './addPrestation.vue';
import deletePrestation from './deletePrestation.vue';
export default {
    components: {
        addPrestation,
        deletePrestation
    },
    data: () => ({

        Prestations: [],

        // currentUser: [],
        search: '',


        headers: [{
                text: 'Nom',
                align: 'start',
                value: 'name',
            },
            { text: 'Description', value: 'description' },
            { text: 'Place Max', value: 'nbrmax' },
            { text: 'Prix', value: 'prix' },
            { text: "Actions", value: "actions" },
        ],



    }),


    methods: {
        getData() {


            authenticationService.currentUser.subscribe(x => (this.currentUser = x))
            apiServices.get('api/users/' + this.currentUser.id + '/prestations')


            .then((data) => {

                console.log(data.data.data)
                data.data.data.forEach(element => {
                    this.Prestations.push(element)
                    console.log(element)

                });

            })


            .catch()


        }
    },

    created() {
        this.getData();
    },
}