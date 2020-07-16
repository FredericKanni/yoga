<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">composition du panier</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">Moyen de Paiment</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-col cols="12" sm="6" md="3" v-for="presta in prestationStep" :key="presta.id">
            <v-card class="mb-2 pa-2 w-" color="grey lighten-1" width="100%">
              {{presta.name}}
              {{presta.placeNbr}} x {{presta.prix}} € = {{presta.placeNbr*presta.prix}}
            </v-card>
          </v-col>

          <v-data-table
            :headers="headers"
            :items="prestations"
            hide-default-footer
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <!-- <deletePrestationRecap :prestations='prestations'  :prestation="item"></deletePrestationRecap> -->
              <v-btn color="danger" class="ma-1" @click="deleteItem(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>

            <template v-slot:item.placeNbr="{ item }">
              <!-- <deletePrestationRecap :prestations='prestations'  :prestation="item"></deletePrestationRecap> -->
             
              <v-btn  :disabled="item.placeNbr  <= 0" color="danger" class="ma-1" @click="minusItem(item)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <!-- <v-text-field v-model="item.placeNbr" width="20px"> -->
                {{ item.placeNbr}}
              <!-- </v-text-field> -->

              <v-btn :disabled="item.placeNbr >=  item.quantityMax"  color="danger" class="ma-1" @click="plusItem(item)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
          </v-data-table>

          <v-btn color="primary" @click="valideCommande">Valider la commande</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-stripe-card v-model="source" :api-key="apiKey"></v-stripe-card>

          {{source}}
          <v-btn color="primary" @click="process" :disabled="!source">payer</v-btn>

          <v-btn text @click="e1 = 1">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script src='./Stepper.js'>
</script>