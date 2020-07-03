<template>
    <div>
     <h1>detail de
        <!-- {{prestaInfos}} -->
     </h1>
   

   <v-row>
     <v-col
        cols="12"
     
     >
   



  <v-card
              color="blue"
              dark
            >
              <div class="d-flex flex-no-wrap ">
                 <v-avatar
                  class="ma-3"
                  size="25vw"
                  tile
                >
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                </v-avatar>
               
          
                <div
                >
              
                  <v-card-title
                    class="headline"
                   d-inline
                  >
                  
                 Cours de yoga

                 </v-card-title>


    
                  <v-card-subtitle >avec: Halcyon Days   <br> jour et heure </v-card-subtitle>
                  <!-- <v-card-actions  > -->
  <!-- <v-btn small text  >jour heure</v-btn> -->
<!-- </v-card-actions> -->
                    <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus perferendis sit impedit doloribus blanditiis consectetur est recusandae! Repudiandae quo dicta ipsa sit accusamus non autem ab exercitationem, corporis at?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus perferendis sit impedit doloribus blanditiis consectetur est recusandae! Repudiandae quo dicta ipsa sit accusamus non autem ab exercitationem, corporis at?
              
                </v-card-text>


                
                </div>
  
               
              </div>
            </v-card>



     </v-col>
   </v-row>
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