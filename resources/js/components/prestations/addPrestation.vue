<template>
  <div justify="center" class="d-inline">


 

    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="!isModification"
          color="primary"
          dark
          v-on="on"
          justify="center"
          class="ma-5 "
        >Creer une prestation</v-btn>
        <v-btn
          v-if="isModification"
          @click="modifierPrestationModal(prestation)"
          color="primary"
          text
          v-on="on"
          class="ma-1"
        >
          <v-icon left>mdi-pencil</v-icon>
        </v-btn>
      </template>

      

      <v-card>
        <v-container>
          <v-card-title>
            <span v-if="!isModification" class="headline">Creer une prestation</span>
            <span v-if="isModification" class="headline">Modifier une prestation</span>
          </v-card-title>
          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    :counter="30"
                    :rules="nameRules"
                    label="nom*"
                    v-model="name"
                    required
                  ></v-text-field>

                  <v-textarea
                    outlined
                    :counter="250"
                    :rules="descRules"
                    name="input-7-4"
                    label="description*"
                    v-model="description"
                  ></v-textarea>

                  <v-text-field
                    label="nombre maximum de places*"
                    :rules="intRules"
                    persistent-hint
                    required
                    v-model="nbrmax"
                  ></v-text-field>

                  <v-text-field
                    label="nombre de places disponibles"
                    :rules="intRules"
                    v-model="places_dispo"
                  ></v-text-field>

                  <v-text-field
                    label="prix*"
                    :rules="prixRules"
                    persistent-hint
                    required
                    v-model="prix"
                  ></v-text-field>

                  <v-file-input 
                  accept="image/*" 
                  label="Choisir Une Image*" 
                  @change="onFileChange">
                  </v-file-input>
                  <v-img max-height="250px" 
                  v-if="image" 
                  :src="image" 
                  :contain="true">
                  </v-img>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                  <v-datetime-picker
                    label="Choisir Une Date*"
                    :date-picker-props="dateProps"
                    :time-picker-props="timeProps"
                    v-model="datetime"
                  >
                    <template v-slot:dateIcon>
                      <v-icon>mdi-calendar</v-icon>
                    </template>
                    <template v-slot:timeIcon>
                      <v-icon>mdi-clock-outline</v-icon>
                    </template>
                  </v-datetime-picker>
                </v-col>
              </v-row>
              <small>*champs requis</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" 
              text @click="dialog = false">
                Fermer
              </v-btn>
              <v-btn 
              :disabled="!valid" 
              color="blue darken-1" 
              text @click="saveData">
                Ajouter
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-container>
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

<script src="./addPrestation.js">
</script>