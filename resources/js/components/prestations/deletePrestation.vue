<template>
  <div class="d-inline">
    <v-btn text color="danger"  class="ma-1" @click.stop="dialog = true">
      <v-icon left>mdi-delete</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">effacer la prestation?</v-card-title>

        <v-card-actions>
          <v-btn color="green darken-1" text @click="deletePrestation">OUI</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">NON</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



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

<script src='./deletePrestation.js'>
</script>