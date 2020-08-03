<template>
    <div>
        <!-- mes cartes de prestations -->
<v-row>




    <v-col cols="12" sm="6" md="4" 
    v-for="presta in Prestations"
    :key="presta.id"
    >
    <!-- {{presta}} -->
  <v-card
   color="#BA68C8"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img
        height="250"
        v-if="presta.image"
        :src="presta.image"
      ></v-img>
  
      <v-card-title  style="color:#FFD180;" >{{presta.name}}</v-card-title>
  
      <v-card-text>
        <div  style="color:#FFD180;"  class=" ">
        avec :{{presta.user.name}}
        </div>

        
        <div  style="color:#FFD180;" >{{presta.description}}</div>
              
  
            <!-- <div>{{presta.id}}</div> -->

           <div  style="color:#FFD180;" >   le  {{presta.date}} </div>
              <div  style="color:#FFD180;" > à {{presta.heure}}</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="#FFD180"
          text
   :to="'prestations/'+ presta.id"
    >
          Voir +
        </v-btn>

<v-spacer></v-spacer>
   <v-btn
          color="#FFD180"
          text
   :to="'prestations/'+ presta.id"
    >
        <div style="color:#FFD180;"  class=" ">
        prix :{{presta.prix}} €
        </div>
        </v-btn>

       
      </v-card-actions>
    </v-card>

</v-col>
 




</v-row>
<div class="ma-10">

</div>
       
    </div>
</template>

<script src="./PrestationsCards.js">

</script>