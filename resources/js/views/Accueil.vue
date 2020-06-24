<template>
<div>
<galerie></galerie>
<lieu></lieu> 
<equipe></equipe>


    <div>

      <h2 class="text-center">Nos cours</h2>
        <!-- mes cartes de prestations -->
<v-row>




    <v-col cols="12" sm="6" md="4" 
    v-for="presta in tab"
    :key="presta.id"
    >
    <!-- {{presta}} -->
  <v-card
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img
        height="250"
        v-if="presta.image"
        :src="presta.image"
      ></v-img>
  
      <v-card-title>{{presta.name}}</v-card-title>
  
      <v-card-text>
     
  
        <div class="my-4 subtitle-1">
        professeur :{{presta.user.name}}
        </div>
              <div class="my-4 subtitle-1">
        prix :{{presta.prix}} €
        </div>
  
        <div>{{presta.description}}</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
   
        >
          Reserver
        </v-btn>
      </v-card-actions>
    </v-card>
</v-col>
 




</v-row>
<div  class="text-center ma-5">
<v-btn to='/prestations' >
  voir tous les cours
</v-btn>
</div>

       
    </div>














</div>

 
</template>


<script>

import galerie from '../components/galerie/galerie.vue';
import equipe from '../components/equipe/equipe.vue';
import lieu from '../components/lieu/lieu.vue';

import { apiServices } from '../components/_services/api.services'
export default {
 components: {
        galerie,
           lieu,
        equipe
    },


    data: () => ({
        Prestations: [],
tab:[]
    }),

    methods: {
        getData() {
            // console.log(this.newPrestation)
            apiServices.get('api/prestations')
                .then(({ data }) => {
                    // console.log(data.data)
                    data.data.forEach(element => {
                        this.Prestations.push(element)
                    });

                    this.tab= this.Prestations;
                     this.tab=   [this.tab[0],this.tab[1],this.tab[2]]  ;
                    // console.log(this.Prestations)
                })
                .catch()
        }
    },

    created() {
        this.getData();
    },






 

};
</script>
