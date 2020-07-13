import { apiServices } from '../_services/api.services'
import { authenticationService } from '../_services/authentication.service';

export default {


    props: {

        prestations: {
            default: function() {
                return {

                }
            }
        },

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



    data: () => ({
        dialog: false,

        name: '',
        description: '',
        nbrmax: '',
        prix: '',

        id_user: '',
        id: '',
        places_dispo: '',
        newPrestation: {},

        image: null,

        date: '2022-07-13',
        time: '12:53:00',
        dateTime: null,

        // datetime: null,


    }),

    methods: {

        datePrint() {




            // this.time = this.time + ':00'
            // let datetime = this.date + ' ' + this.time + ':00'
        },

        saveData() {

            // console.log(this.date)
            // console.log(this.time)
            // this.dateTime = this.date + ' ' + this.time + ':00'
            this.dateTime = this.date + ' ' + this.time
            console.log(this.dateTime)
                //on passe la donne prestation qu on veut creer ou edite
            this.newPrestation = {

                // id: this.id,
                name: this.name,
                description: this.description,
                nbrmax: this.nbrmax,
                prix: this.prix,
                date: this.date,
                id_user: this.currentUser.id,
                places_dispo: this.places_dispo,
                //qd on cree on lui passe une image 
                date: this.dateTime,
                image: this.image,



            }

            if (this.isModification) {
                //si modification garde id_user d origin l admin pourra modifie mais le propriétaire restera le prof 
                this.newPrestation.id_user = this.id_user,
                    this.newPrestation.id = this.id
            }

            //////ATTENTION AU SLASH ICI SINON ERROR 301 DE MER**
            apiServices.post('api/prestations', this.newPrestation)

            .then(response => {

                console.log(response)

                if (this.isModification) {
                    console.log('la prestation a été modifiée')
                    this.dialog = false;
                    if (this.id) {

                        const index = this.prestations.indexOf(this.prestation);
                        console.log(this.prestations)
                        console.log(index)

                        this.prestations.splice(index, 1, response.data.data)

                        // ajoute la response .data.data dans presation mais push rajoute en dernier position
                        // this.prestations.push(response.data.data)


                    }


                    // this.$emit('modifPresta', response.data.data)

                } else if (!this.isModification) {
                    console.log('la prestation a été crée ')
                    this.dialog = false;
                    this.$emit('createPresta', response.data.data)
                }



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
            this.image = prestation.image
            this.id_user = prestation.id_user
            this.places_dispo = prestation.places_dispo

            this.date = prestation.created_at.substring(0, 10);
            this.time = prestation.created_at.substring(11, 19);


            console.log(prestation)

        },

        onFileChange(file) {
            // let files = e.target.files || e.dataTransfer.files
            // this.createImg(file);  

            let reader = new FileReader;

            reader.onload = (file) => {
                this.image = file.target.result;
            };
            reader.readAsDataURL(file)
        },


        // prevoir l image 
        createImg(file) {

            let image = new Image;




        },



    },

    created() {
        authenticationService.currentUser.subscribe(x => (this.currentUser = x));
        // console.log(this.currentUser)

    },


}