<template>
    <div>
     <h1>detail de {{prestationDetails}}</h1>
     <v-btn  @click="addToPanier">ajouter au panier</v-btn>

        <v-text-field
            label="places diponibles"
            type="number"
            single-line
            min="0"
        :max="quantityMax"
            value=""
            v-model="placeNbr"
           
          ></v-text-field>

    </div>
</template>

<script src='./DetailsPrestation.js'>

</script>