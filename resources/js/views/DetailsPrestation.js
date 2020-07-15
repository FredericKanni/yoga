import { apiServices } from '../components/_services/api.services'
import { panierService } from '../components/_services/panierService'
export default {



    data() {
        return {
            prestaInfos: { user: {} },
            placeNbr: 0,
            quantityMax: 10,
            date: '',
            heure: '',
            text: '',
            quantityMax: 1,

            rules: {

                counter: '',
            }
        }
    },
    methods: {


        getDatas() {


            (apiServices.get('/api/prestations/' + this.$route.params.id))
            .then(({ data }) => {
                    // console.log(data.data)
                    this.prestaInfos = data.data;


                    let d = new Date(this.prestaInfos.date)
                    let dAujourdhui = d

                    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


                    this.date = dAujourdhui.toLocaleDateString('fr-CA', options)
                    this.heure = dAujourdhui.getHours() + 'h' + dAujourdhui.getMinutes()

                    // console.log(this.prestaInfos);

                    //definir  quantityMax

                    if (this.prestaInfos.placesDispo > 10) {
                        console.log('il reste plus de 10 places')
                        this.quantityMax = 10;
                        this.rules.counter = value => value <= this.quantityMax || 'pas plus de 10 places'


                        console.log(this.quantityMax);
                    } else if (this.prestaInfos.placesDispo == 0) {
                        console.log('il ne reste plus de places')
                        this.quantityMax = 0;
                        console.log(this.quantityMax);

                    } else if (this.prestaInfos.placesDispo < 10) {
                        console.log('il reste moins de 10 places')
                        this.quantityMax = this.prestaInfos.placesDispo;
                        this.rules.counter = value => value <= this.quantityMax || 'places insuffisantes'

                        console.log(this.quantityMax);
                    }









                })
                .catch()
        },
        addToPanier() {
            // console.log(this.prestaInfos)
            panierService.addToPanier(this.prestaInfos, this.placeNbr, this.quantityMax);



        }
    },

    created() {

        this.getDatas();
        console.log(this.prestaInfos);

    },






}