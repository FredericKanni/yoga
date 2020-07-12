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

 <addPrestation @createPresta="Prestations.push($event)"/>

    <v-data-table
      :headers="headers"
      :items="Prestations"
      :search="search"
    >

   

       <template v-slot:item.actions="{ item }"><addPrestation  :prestation="item" :isModification='true'></addPrestation>
       <deletePrestation :prestation="item"></deletePrestation>
       
       </template>
    </v-data-table>



  </v-card>
    </div>
</template>

<script src="./prestationTable.js">

</script>