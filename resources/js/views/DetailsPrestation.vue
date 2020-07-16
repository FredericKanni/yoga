<template>
    <div>
  
   

   <v-row width="">
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
                  <v-img  contain :src="prestaInfos.image"></v-img>
                </v-avatar>
               
         
                <div
                >
              
                  <v-card-title
                    class="headline"
                   d-inline
                  >
                  
                {{ prestaInfos.name}} 

                 </v-card-title>



    
                  <v-card-subtitle >avec:{{ prestaInfos.user.name}} <br> le {{date}} à {{heure}} 
                   <br> places restantes: {{ prestaInfos.placesDispo}}</v-card-subtitle>
                 
                  <!-- <v-card-actions  > -->
  <!-- <v-btn small text  >jour heure</v-btn> -->
<!-- </v-card-actions> -->
                    <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus perferendis sit impedit doloribus blanditiis consectetur est recusandae! Repudiandae quo dicta ipsa sit accusamus non autem ab exercitationem, corporis at?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus perferendis sit impedit doloribus blanditiis consectetur est recusandae! Repudiandae quo dicta ipsa sit accusamus non autem ab exercitationem, corporis at?
              
                </v-card-text>

<!-- {{prestaInfos}} -->

           
                </div>
  
               
              </div>
            </v-card>



     </v-col>
   </v-row>
    
<div >
      <!-- <div v-if="prestaInfos.places_dispo > 0"> -->
 <v-btn    :disabled=" quantityMax == 0  || placeNbr > quantityMax "  @click="addToPanier">ajouter au panier</v-btn>

        <v-text-field
         :disabled=" quantityMax == 0"
            label="places diponibles"
            type="number"
            single-line
            min="0"
        :max="quantityMax"
            value=""
            v-model="placeNbr"
               :rules="[rules.counter]"
          ></v-text-field>

   </div>

   <div v-if="quantityMax == 0">
       plus de place disponible pour ce cours 
    </div>
    </div>
</template>

<script src='./DetailsPrestation.js'>

</script>