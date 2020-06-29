<template>
   <div justify="center" class="d-inline">
    
   <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-if="!isModification"  color="primary" dark v-on="on" class="ma-5">Creer une prestation</v-btn>
  <v-btn v-if="isModification"  @click="modifierPrestationModal(prestation)"  color="primary" dark v-on="on" class="ma-1">
     <v-icon left>mdi-pencil</v-icon>
  </v-btn>
        
      </template>

      
      <v-card>
        <v-card-title>
          <span  v-if="!isModification"  class="headline">Creer une prestation</span>
    <span v-if="isModification" class="headline">Modifier une prestation</span>
          
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

                  <v-col cols="12" sm="12" md="12">
                <v-text-field label="Places disponibles" hint="example of helper text only on focus"  v-model="places_dispo"></v-text-field>
              </v-col>
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

                  <v-col cols="6" sm="6" md="6" >
                <v-file-input accept="image/*" label="File input" @change="onFileChange"></v-file-input>

                  <v-img v-if="image" :src="image" :contain="true"    ></v-img>
    
              </v-col>

   <v-col cols="6" sm="6" md="6" >
               
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
  </div>
</template>

<script src="./addPrestation.js">

</script>