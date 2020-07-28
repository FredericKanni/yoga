import { apiServices } from '../_services/api.services'
import { authenticationService } from '../_services/authentication.service';
import moment from 'moment';
import { DateUtils } from '../_helpers/date'
// https://momentjs.com/
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
        snackbar: false,
        text: "loll",
        timeout: 4000,
        valid: true,
        dialog: false,
        newPrestation: {},
        name: '',
        description: '',
        nbrmax: '',
        prix: '',
        id_user: '',
        id: '',
        places_dispo: '',
        image: null,
        // datetime: '2022-07-13 12:53',
        datetime: null,

        timeProps: {
            format: "24hr"
        },

        dateProps: {
            headerColor: 'blue'
        },

        nameRules: [
            v => !!v || 'ce champ est requis',
            v => (v && v.length >= 3) ||
            'Le Nom doit faire au moins 3 charactères',
            v => (v && v.length <= 50) ||
            'Le Nom doit faire moins de 50 charactères',
        ],
        descRules: [
            v => !!v || 'ce champ est requis',
            v => (v && v.length >= 3) ||
            'La description doit faire au moins 10 charactères',
            v => (v && v.length <= 250) ||
            'La description doit faire moins de 250 charactères',
        ],
        intRules: [
            v => !!v || 'ce champ est requis',
            v => (!isNaN(parseInt(v)) && (v % 1) === 0 && v.indexOf(".") == -1) || 'un chiffre entier est requis',
            v => (v && v <= 99) || 'pas plus de 99 places',
        ],
        prixRules: [
            v => !!v || 'ce champ est requis',
            v => (!isNaN(parseInt(v)) && parseFloat(v).toFixed(2) % v === 0) || 'un nombre avec 2 decimale est requis',
        ],




        // numberRule: v => {
        //     if (!v.trim()) return true;

        //     if (typeof v === 'number') return 'is number';
        //     // // (data % 1) === 0)

        //     if (!isNaN(parseInt(v)) && v >= 0 && v <= 99) return true;
        //     return 'un nombre compris entre 0 et 99 est requis';
        // },





    }),

    methods: {

        datePrint() {
            // this.time = this.time + ':00'
            // let datetime = this.date + ' ' + this.time + ':00'
        },


        validate() {
            this.$refs.form.validate()
        },

        saveData() {
            // console.log(this.date)
            // console.log(this.time)
            // this.dateTime = this.date + ' ' + this.time + ':00'
            // this.dateTime = this.date + ' ' + this.time
            // console.log(this.dateTime)
            //on passe la donne prestation qu on veut creer ou edite
            // console.log(this.datetime)
            // date: '2022-07-13',

            // console.log(moment(String(this.datetime)).format('MM-DD-YYYY hh:mm:ss'))
            // console.log(DateUtils.formatDateTime(this.datetime));

            this.newPrestation = {

                // id: this.id,
                name: this.name,
                description: this.description,
                nbrmax: this.nbrmax,
                prix: this.prix,
                id_user: this.currentUser.id,
                places_dispo: this.places_dispo,

                //on lui passe une date format timestamps
                //  date: moment(String(this.datetime)).format('YYYY-MM-DD hh:mm:ss'),
                date: DateUtils.formatDateTime(this.datetime),

                //qd on cree on lui passe une image 
                image: this.image,

            }

            if (this.isModification) {
                //si modification garde id_user d origin l admin pourra modifie mais le propriétaire restera le prof 
                this.newPrestation.id_user = this.id_user,
                    this.newPrestation.id = this.id
                this.newPrestation.image = this.image
            }
            console.log(this.newPrestation)
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

                    this.text = 'La Prestation a été modifiée'
                    this.snackbar = true;
                    // this.$emit('modifPresta', response.data.data)

                } else if (!this.isModification) {
                    console.log('la prestation a été crée ')
                    this.dialog = false;
                    this.$emit('createPresta', response.data.data)
                    this.text = 'La Prestation a été crée'
                    this.snackbar = true;

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
            this.places_dispo = prestation.placesDispo



            // this.date = prestation.created_at.substring(0, 16);
            // console.log(this.date)
            // this.time = prestation.created_at.substring(11, 19);
            this.datetime = prestation.date.substring(0, 16);

            // console.log(prestation)
            // console.log(this.datetime)
        },

        onFileChange(file) {
            // let files = e.target.files || e.dataTransfer.files
            // this.createImg(file);  

            let reader = new FileReader;

            reader.onload = (file) => {
                this.image = file.target.result;
                console.log(this.image)
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