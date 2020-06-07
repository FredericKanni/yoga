<template>
   <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="nom*" v-model="name"  required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="description" hint="example of helper text only on focus"  v-model="description"></v-text-field>
              </v-col>
              <v-col cols="6" sm="6" md="6" >
                <v-text-field
                  label="nombre maximun*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="nbrmax"
                ></v-text-field>
              </v-col>

                 <v-col cols="6" sm="6" md="6" >
                <v-text-field
                  label="prix*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="prix"
                ></v-text-field>
              </v-col>


         
            </v-row>
          </v-container>
          <small>*champs requis</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="saveData">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./addPrestation.js">

</script>