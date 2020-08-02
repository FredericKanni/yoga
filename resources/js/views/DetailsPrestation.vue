<template>
    <div>
<v-card  outlined   color="#D1C4E9" class="px-5" >
<v-row>
  <v-col  cols="12" md=3 sm=12>

                  <v-img  contain :src="prestaInfos.image"></v-img>
              
  </v-col>
   <v-col  cols="12" md=8 sm=12>


      <v-card-title
                    class="headline"
                   d-inline
                  >
                  
                {{ prestaInfos.name}} 

                 </v-card-title>



    
                  <v-card-subtitle >avec:{{ prestaInfos.user.name}} <br> le {{date}} à {{heure}} 
                   <br> places restantes: {{ prestaInfos.placesDispo}}</v-card-subtitle>

                   
                       <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus perferendis sit impedit doloribus blanditiis consectetur est recusandae! Repudiandae quo dicta ipsa sit accusamus non autem ab exercitationem, corporis at?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus perferendis sit impedit doloribus blanditiis consectetur est recusandae! Repudiandae quo dicta ipsa sit accusamus non autem ab exercitationem, corporis at?
              
                </v-card-text>


  <v-card-actions>
    <div  style="width:50px">
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


     <v-col class="my-auto">
 <v-btn    :disabled=" quantityMax == 0  || placeNbr > quantityMax "  @click="addToPanier">ajouter au panier</v-btn>
  </v-col>
    </v-card-actions>



  </v-col>
</v-row>



</v-card>







    
    
<div >
      <!-- <div v-if="prestaInfos.places_dispo > 0"> -->

        

   </div>

   <div v-if="quantityMax == 0">
       plus de place disponible pour ce cours 
    </div>
    </div>
</template>

<script src='./DetailsPrestation.js'>

</script>