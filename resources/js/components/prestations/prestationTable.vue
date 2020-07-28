<template>
    <div >
      





        <v-card>
    <v-card-title>
      Prestations
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Rechercher"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
<div class="text-center">

   <addPrestation @createPresta="Prestations.push($event)"/>

</div>


    <v-data-table
      :headers="headers"
      :items="Prestations"
      :search="search"
    >

   

       <template v-slot:item.actions="{ item }"><addPrestation  :prestations='Prestations' :prestation="item" :isModification='true'></addPrestation>
       <deletePrestation :prestations='Prestations'  @clickedd="clickedShowDetailModal"  :prestation="item"></deletePrestation>
       
       </template>
    </v-data-table>



  </v-card>
     <v-snackbar
  top
        v-model="snackbar"
        :timeout="timeout"
          color="orange darken-3"
      >
        {{ text }}
  
          <v-btn
            color="white"
            text
            @click="snackbar = false"
          >
            Close
          </v-btn>
      </v-snackbar>



    </div>
</template>

<script src="./prestationTable.js">

</script>