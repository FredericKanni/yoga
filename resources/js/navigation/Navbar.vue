<template>
  <div>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>Yoga</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/accueil" class="my-auto mx-1">
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
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>
