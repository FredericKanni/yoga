<template>
    <div>
     <h1>detail de {{prestaInfos}}</h1>
   
    <p>/////////</p>
   <div v-if="prestaInfos.placesDispo > 0">
 <v-btn  @click="addToPanier">ajouter au panier</v-btn>

        <v-text-field
         :disabled=" prestaInfos.placesDispo == 0"
            label="places diponibles"
            type="number"
            single-line
            min="0"
        :max="quantityMax"
            value=""
            v-model="placeNbr"
           
          ></v-text-field>

   </div>

   <div v-if="prestaInfos.placesDispo == 0">
       plus de place disponible pour ce cours 
    </div>

    <p>/////////</p>

      <div v-if="prestaInfos.places_dispo > 0">
 <v-btn  @click="addToPanier">ajouter au panier</v-btn>

        <v-text-field
         :disabled=" prestaInfos.places_dispo == 0"
            label="places diponibles"
            type="number"
            single-line
            min="0"
        :max="quantityMax"
            value=""
            v-model="placeNbr"
           
          ></v-text-field>

   </div>

   <div v-if="prestaInfos.places_dispo == 0">
       plus de place disponible pour ce cours 
    </div>
    </div>
</template>

<script src='./DetailsPrestation.js'>

</script>