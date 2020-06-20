<template>
  <div>
    <v-toolbar color="indigo" dark fixed >
      <v-toolbar-title>Yoga</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/" class="my-auto mx-1">
          <v-btn depressed small>Accueil</v-btn>
        </router-link>

        <!-- <router-link to="/dashboard" class="my-auto mx-1">
          <v-btn depressed small>Dashboard</v-btn>
        </router-link> -->
        <!-- <router-link to="/profil" class="my-auto mx-1">
          <v-btn depressed small>Profil</v-btn>
        </router-link> -->

        <!-- <router-link to="/mesprestations" class="my-auto mx-1">
          <v-btn depressed small>Mes Prestations</v-btn>
        </router-link> -->

        <router-link to="/prestations" class="my-auto mx-1">
          <v-btn depressed small>Cours</v-btn>
        </router-link>

        <router-link to="/lieu" class="my-auto mx-1">
          <v-btn depressed small>le lieu</v-btn>
        </router-link>

         <router-link to="" class="my-auto mx-1">
          <v-btn depressed small>contact</v-btn>
        </router-link>




          <router-link  v-if="!isCheck" to="/login" class="my-auto mx-1">
          <v-btn depressed small>login</v-btn>
        </router-link>

         <div class="my-auto mx-1"  v-if="isCheck" >
         <v-btn class="my-auto mx-1"  @click="logout()"  depressed small>deconnexion</v-btn>
      </div> 
       
        <!-- <router-link  v-if="isCheck" to="/logout" class="my-auto mx-1">
          <v-btn class="my-auto mx-1"  @click="logout()"  depressed small>deconnexion</v-btn>
    
        </router-link> -->
       


      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
      
      
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
import { authenticationService } from "../components/_services/authentication.service";
import router from "../route";
export default {
  data () {
        return {
            currentUser: null
        };
    },

 computed:{
       isCheck(){
      return this.currentUser;
    }
 },


 methods: {
    logout() {
      authenticationService.logout();
      //permet de redirige apres le logout
      router.push("/");
    },
  },

  created () {
        authenticationService.currentUser.subscribe(x => this.currentUser = x);
        // console.log(this.currentUser)
    },

}
</script>
