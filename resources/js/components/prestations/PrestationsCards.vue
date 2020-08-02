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
     
  
        <div  style="color:#FFD180;"  class="my-4 subtitle-1">
        professeur :{{presta.user.name}}
        </div>
              <div style="color:#FFD180;"  class="my-4 subtitle-1">
        prix :{{presta.prix}} €
        </div>
  
        <div  style="color:#FFD180;" >{{presta.description}}</div>
            <div>{{presta.id}}</div>

             <div  style="color:#FFD180;" >{{presta.date}}</div>
              <div  style="color:#FFD180;" >{{presta.heure}}</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="#FFD180"
          text
   :to="'prestations/'+ presta.id"
    >
          Voir +
        </v-btn>
      </v-card-actions>
    </v-card>
</v-col>
 




</v-row>
       
    </div>
</template>

<script src="./PrestationsCards.js">

</script>