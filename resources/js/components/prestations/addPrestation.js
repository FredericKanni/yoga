import { apiServices } from '../_services/api.services'
import { authenticationService } from '../_services/authentication.service';

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

        image: null,

    }),

    methods: {

        saveData() {
            //on passe la donne prestation qu on veut creer ou edite
            this.newPrestation = {

                // id: this.id,
                name: this.name,
                description: this.description,
                nbrmax: this.nbrmax,
                prix: this.prix,
                date: this.date,
                id_user: this.currentUser.id,
                //qd on cree on lui passe une image 
                image: this.image,

            }

            if (this.isModification) {
                //si modification garde id_user d origin l admin pourra modifie mais le propriétaire restera le prof 
                this.newPrestation.id_user = this.id_user,
                    this.newPrestation.id = this.id
            }
            console.log(this.isModification)

            console.log(this.newPrestation)
                //////ATTENTION AU SLASH ICI SINON ERROR 301 DE MER**
            apiServices.post('api/prestations', this.newPrestation)

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

        onFileChange(file) {
            console.log(file)
                // let files = e.target.files || e.dataTransfer.files
                // this.createImg(file);  

            let reader = new FileReader;

            reader.onload = (file) => {
                this.image = file.target.result;
            };
            reader.readAsDataURL(file)
            console.log(this.image)
            console.log('////////////////////////////')
            console.log(reader)
        },


        // prevoir l image 
        createImg(file) {

            console.log(file)
            let image = new Image;




        },



    },

    created() {
        authenticationService.currentUser.subscribe(x => (this.currentUser = x));
        // console.log(this.currentUser)

    },


}