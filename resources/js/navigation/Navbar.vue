<template>
  <div>







   <v-app-bar color="cyan darken-1" dark fullscreen class="hidden">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-md-and-up">
        <h1 class="headline font-weight-medium d-inline">
           
          Yogamorphose</h1>
      </v-toolbar-title>
      <v-toolbar-title class="hidden-sm-and-down">
      


                              <v-avatar  tile size=64>
      <img
        src='http://yoga.test/storage/logo.jpg'
        alt="Logo yoga"
       
      >
    </v-avatar>

   YogaMorphose
      </v-toolbar-title>
      <v-spacer></v-spacer>

 














      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text class="nav-item nav-link" to="/">Accueil</v-btn>
        <v-btn text class="nav-item nav-link" to="/prestations">Cours</v-btn>
        <v-btn text class="nav-item nav-link" to="/lieu">Le Lieu</v-btn>
        <v-btn text class="nav-item nav-link"  to="/contact">Contact</v-btn>

   

   <v-btn text class="nav-item nav-link"  v-if="!isCheck"  to="/login">Se Connecter</v-btn>
   <v-btn text class="nav-item nav-link"  v-if="isCheck"  @click="logout()">Deconnexion</v-btn>
      <v-btn text class="nav-item nav-link" v-if="!isCheck"  to="/register">S' inscrire</v-btn>
    
 

      </v-toolbar-items>

      <div class="my-auto mx-1">
          <PanierIcone></PanierIcone>
        </div>
    </v-app-bar>


    <!-- Navigation vertical -->
    <v-navigation-drawer overlay-opacity="0.9" v-model="drawer" absolute temporary >
   <v-img  src='http://yoga.test/storage/lieu.jpg' aspect-ratio="1.7"></v-img>
      <v-list-item>
        <v-list-item-content color="black">
          <v-list-item-title class="font-italic">YogaMorphose</v-list-item-title>
          <v-list-item-subtitle class="font-italic">Changer Votre Vie</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list rounded>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/">Accueil</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

         <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/prestations">Cours</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/lieu">Le Lieu</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
         <v-list-item-title class="font-weight-bold">
              <router-link to="/login">connexion</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/logout">Deconnexion</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
<!-- 
        <v-list-item link v-if="isChecked">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <a @click="logout" class="nav-item nav-link">Se deconnecter</a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <!-- <v-list-item link v-if="!isChecked">
          <v-list-item-icon>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
           
        <router-link to="/lieu" class="my-auto mx-1">
          <v-btn depressed small>le lieu</v-btn>
        </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-divider></v-divider>

        <!-- <v-list-item link v-if="!isChecked" small>
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
           
        <router-link to="/lieu" class="my-auto mx-1">
          <v-btn depressed small>le lieu</v-btn>
        </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>





<!--     
    <v-toolbar color="indigo" dark fixed >
      <v-toolbar-title>YogaMorphose</v-toolbar-title>
 <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up"    @click="drawer = !drawer" color="#FFD600"></v-app-bar-nav-icon>
     
     
  


    <v-navigation-drawer  app  clipped-left  class="hidden-md-and-up" v-model="drawer" color="#3B444B" >
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon class="white--text">mdi-equal-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              <v-btn color="#FFD600" class="mr-4" to="/" text>Accueil</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
      </v-list>
    </v-navigation-drawer>



      
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/" class="my-auto mx-1">
          <v-btn depressed small>Accueil</v-btn>
        </router-link>

    

        <router-link to="/prestations" class="my-auto mx-1">
          <v-btn depressed small>Cours</v-btn>
        </router-link>

        <router-link to="/lieu" class="my-auto mx-1">
          <v-btn depressed small>le lieu</v-btn>
        </router-link>

         <router-link to="/contact" class="my-auto mx-1">
          <v-btn depressed small>contact</v-btn>
        </router-link>




          <router-link  v-if="!isCheck" to="/login" class="my-auto mx-1">
          <v-btn depressed small>se connecter</v-btn>
        </router-link>

         <div class="my-auto mx-1"  v-if="isCheck" >
         <v-btn class="my-auto mx-1"  @click="logout()"  depressed small>deconnexion</v-btn>
      </div> 
       
       
              <router-link  v-if="!isCheck" to="/register" class="my-auto mx-1">
          <v-btn depressed small>s'enregistrer</v-btn>
        </router-link>

          <div class="my-auto mx-1">
          <PanierIcone></PanierIcone>
        </div>


      </v-toolbar-items>

    </v-toolbar> -->
  </div>
</template>

<script>
import { authenticationService } from "../components/_services/authentication.service";
import router from "../route";
import PanierIcone from "../components/panier/panierIcone.vue"
export default {

  components:{
PanierIcone,
  },
  data () {
        return {
            currentUser: null,
            drawer: false,
            overlay:false,
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
    },

}
</script>
