<template>
  <div>


    
    <v-stepper  v-model="e1">
      <v-stepper-header  style="background-color: #D1C4E9; " >



        <v-stepper-step :complete="e1 > 1" step="1">composition du panier</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">Moyen de Paiment</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items  style="background-color: #D1C4E9; ">
        <v-stepper-content  class="elavation-0" step="1">

        

          <h2  v-if="!prestations[0]" class="text-center ma-10">Panier Vide!</h2>
          <h2  v-if="prestations[0]" class="text-center ma-10"> contenu du panier</h2>
          <!-- <v-col cols="12" sm="6" md="3" v-for="presta in prestationStep" :key="presta.id">
            <v-card class="mb-2 pa-2 w-" color="grey lighten-1" width="100%">
              {{presta.name}}
              {{presta.placeNbr}} x {{presta.prix}} € = {{presta.placeNbr*presta.prix}}
            </v-card>
          </v-col> -->

<div v-if="prestations[0]">

          <v-data-table  style="background-color:#BA68C8; "
            :headers="headers"
            :items="prestations"
            hide-default-footer
            class=""
          >
            <template v-slot:item.actions="{ item }">
              <!-- <deletePrestationRecap :prestations='prestations'  :prestation="item"></deletePrestationRecap> -->
              <v-btn text small color="danger" class="ma-1" @click="deleteItem(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>

             <template v-slot:item.total="{ item }">
           {{ item.prix *item.placeNbr   }}
            </template>

            <template v-slot:item.placeNbr="{ item }">
              <!-- <deletePrestationRecap :prestations='prestations'  :prestation="item"></deletePrestationRecap> -->
             
              <v-btn text small :disabled="item.placeNbr  <= 0" color="danger" class="ma-1" @click="minusItem(item)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <!-- <v-text-field v-model="item.placeNbr" width="20px"> -->
                {{ item.placeNbr}}
              <!-- </v-text-field> -->

              <v-btn  text small :disabled="item.placeNbr >=  item.quantityMax"  color="danger" class="ma-1" @click="plusItem(item)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
          </v-data-table>


  

  <div   
>
   <v-card-subtitle  

                       v-for="item in prestations" :key="item.id"         
                        v-text="'Total:'+item.placeNbr * item.prix"
                            >
                            

                            </v-card-subtitle>

    </div> 


           <h2 class="text-center ma-10"> total:</h2>

          <v-btn  color="primary" @click="valideCommande">Valider la commande</v-btn>

          <v-btn text>Cancel</v-btn>
          </div>
        </v-stepper-content>
        

        <v-stepper-content step="2">
          <v-stripe-card v-model="source" :api-key="apiKey"></v-stripe-card>

          {{source}}
          <v-btn color="primary" @click="process" :disabled="!source">payer</v-btn>

          <v-btn text @click="e1 = 1">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>

    </v-stepper>

    <div class="ma-10">
.
    </div>
  </div>
</template>
<script src='./Stepper.js'>
</script>