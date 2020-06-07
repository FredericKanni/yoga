<template>
  <div>
    <v-toolbar color="indigo" dark fixed >
      <v-toolbar-title>Yoga</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/" class="my-auto mx-1">
          <v-btn depressed small>Accueil</v-btn>
        </router-link>

        <router-link to="/dashboard" class="my-auto mx-1">
          <v-btn depressed small>Dashboard</v-btn>
        </router-link>
        <router-link to="/profil" class="my-auto mx-1">
          <v-btn depressed small>Profil</v-btn>
        </router-link>

        <router-link to="/mesprestations" class="my-auto mx-1">
          <v-btn depressed small>Mes Prestations</v-btn>
        </router-link>

        <router-link to="/prestations" class="my-auto mx-1">
          <v-btn depressed small>Toutes Les Prestations</v-btn>
        </router-link>

          <router-link to="/login" class="my-auto mx-1">
          <v-btn depressed small>login</v-btn>
        </router-link>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
      
      
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>
