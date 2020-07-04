<template>
    <div>
      <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">composition du panier</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Adresse</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Moyen de Paiment</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >

        
          <v-col  cols="12" sm="6" md='3'
    v-for="presta in prestationStep"
    :key="presta.id"
    >
    
{{presta.name}} 

{{presta.placeNbr}}  x {{presta.prix}} € = {{presta.placeNbr*presta.prix}}

</v-col>
        
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Valider la commande 
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text   @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text    @click="e1 = 2">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    </div>
</template>
<script src='./Stepper.js'>

</script>