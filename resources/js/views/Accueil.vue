<template>
<div  >
<galerie></galerie>

<lieu ></lieu> 
<equipe></equipe>








  <div>
       <h2 class="text-center">Nos cours</h2>






<v-row class="px-10">

  <v-col  cols="12" sm="6" md='3'
   v-for="presta in tab"
    :key="presta.id"
    >
<v-card   color="#BA68C8" class="mx-auto my-3" >
      <v-img
        height="250"
        v-if="presta.image"
        :src="presta.image"
      ></v-img>
      <!-- <v-card-title class="justify-center">{{presta.name}}</v-card-title> -->
      <v-card-title style="color:#FFD180;"  >{{presta.name}}</v-card-title>

      <!-- <v-card-text>
        <div class="ma-0 text-center">{{presta.metier}}</div>
      </v-card-text> -->
      
      <v-card-text >
        <div style="color:#FFD180;" >{{presta.description}}</div>

      </v-card-text>

       <v-btn
          color="#FFD180"
          text
   :to="'prestations/'+ presta.id"
  
        >
          Voir +
        </v-btn>
    </v-card>


</v-col>




</v-row >


<div class="text-center ">
<v-btn class="ma-10" to='/prestations' >
  voir tous les cours
</v-btn>
</div>
<div class="ma-10">
 
</div>

<div class=" 	d-flex d-md-nonema-10">
.
</div>

<div class=" 	d-flex d-md-none ma-10">
.
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
            apiServices.get('api/prestations')
                .then(({ data }) => {
                    data.data.forEach(element => {
                        this.Prestations.push(element)
                    });

                    this.tab= this.Prestations;
                     this.tab=   [this.tab[0],this.tab[1],this.tab[2],this.tab[3]]  ;
                })
                .catch()
        }
    },

    created() {
        this.getData();
    },






 

};
</script>
