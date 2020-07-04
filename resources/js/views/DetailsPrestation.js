import { apiServices } from '../components/_services/api.services'
import { panierService } from '../components/_services/panierService'
export default {



    data() {
        return {
            prestaInfos: {},
            placeNbr: 0,
            quantityMax: 10,
            date: '',
            heure: '',
            text: ''
        }
    },
    methods: {


        getDatas() {


            (apiServices.get('/api/prestations/' + this.$route.params.id))
            .then(({ data }) => {
                    this.prestaInfos = data;
                    // return data;

                    let d = new Date(this.prestaInfos.data.date)
                    let dAujourdhui = d
                        // new Date();
                    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

                    // document.write(dAujourdhui.toLocaleDateString('fr-CA', options));
                    // console.log(dAujourdhui.toLocaleDateString('fr-CA', options))
                    // console.log(dAujourdhui.getHours() + 'h' + dAujourdhui.getMinutes())
                    this.date = dAujourdhui.toLocaleDateString('fr-CA', options)
                    this.heure = dAujourdhui.getHours() + 'h' + dAujourdhui.getMinutes()
                })
                .catch()
        },
        addToPanier() {
            panierService.addToPanier(this.prestaInfos, this.placeNbr);




        }
    },

    created() {

        this.getDatas();


    },





}