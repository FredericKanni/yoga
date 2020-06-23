<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="cyan" dark flat>
              <v-toolbar-title>S'inscrire</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid">
               
                <v-text-field
                  label="Nom"
                  v-model="user.name"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                />

                 <v-text-field
                  label="Email de connexion"
                  v-model="user.email"
                  name="login"
                  :rules="emailRules"
                  prepend-icon="mdi-account"
                  type="text"
                />

                <v-text-field
                  id="password"
                  label="Mot de passe"
                  v-model="user.password"
                  :rules="pwdRules"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined color="success" :disabled="!valid" @click="connexion">S'enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script src='./Register.js'/>