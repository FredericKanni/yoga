import { apiServices } from '../_services/api.services'

export default {
    data: () => ({
        Prestations: [],

    }),

    methods: {
        getData() {
            apiServices.get('api/prestations')
                .then(({ data }) => {
                    data.data.forEach(element => {
                        this.Prestations.push(element)
                    });

                    this.Prestations.forEach(element => {
                        if (element.date != null) {

                            let d = new Date(element.date)

                            let dAujourdhui = d
                                // new Date();
                            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                            // console.log(dAujourdhui.toLocaleDateString('fr-CA', options))
                            // console.log(dAujourdhui.getHours() + 'h' + dAujourdhui.getMinutes())

                            element.date = dAujourdhui.toLocaleDateString('fr-CA', options)

                            element.heure = dAujourdhui.getHours() + 'h' + dAujourdhui.getMinutes()
                        } else {
                            element.date = ''

                            element.heure = ''
                        }



                    });

                })
                .catch()
        }
    },

    created() {
        this.getData();
    },
}