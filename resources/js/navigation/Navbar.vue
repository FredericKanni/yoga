<template>
  <div>







   <v-app-bar color="#BA68C8" dark fullscreen class="hidden">
      <v-app-bar-nav-icon style="color:#FFD180;" class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-md-and-up">
        <h1 class="headline font-weight-medium d-inline"    style="color:#FFD180;">
           
          Yogamorphose</h1>
      </v-toolbar-title>
      <v-toolbar-title class="hidden-sm-and-down">
      


                              <v-avatar  tile size=64>
      <img
        src='https://www.yogamorphose.fr/storage/images/logo.png'
        alt="Logo yoga"
       
      >
    </v-avatar >

<a style="color:#FFD180;"   to="/" >
  YogaMorphose
</a>
 

 <!-- <v-btn text class="nav-item nav-link"  v-if="!isCheck" style="color:#FFD180;"  to="/"> YogaMorphose</v-btn> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>

 














      <v-toolbar-items  class="hidden-sm-and-down">
        <v-btn text class="nav-item nav-link"  style="color:#FFD180;" to="/">Accueil</v-btn>
        <v-btn text class="nav-item nav-link"  style="color:#FFD180;" to="/prestations">Cours</v-btn>
        <v-btn text class="nav-item nav-link" style="color:#FFD180;" to="/lieu">Le Lieu</v-btn>
        <v-btn text class="nav-item nav-link"  style="color:#FFD180;"  to="/contact">Contact</v-btn>

   

   <v-btn text class="nav-item nav-link"  v-if="!isCheck" style="color:#FFD180;"  to="/login">Se Connecter</v-btn>
    <v-btn text class="nav-item nav-link"  v-if="isAdmin || isProf"    style="color:#FFD180;" to="/mesprestations">Dashboard</v-btn>
   <v-btn text class="nav-item nav-link"  v-if="isCheck"  style="color:#FFD180;"  @click="logout()">Deconnexion</v-btn>
      <v-btn text class="nav-item nav-link" v-if="!isCheck"  style="color:#FFD180;" to="/register">S' inscrire</v-btn>
    
 

      </v-toolbar-items>

      <div class="my-auto mx-1">
          <PanierIcone></PanierIcone>
        </div>
    </v-app-bar>


    <!-- Navigation vertical -->
    <v-navigation-drawer  color="#BA68C8" overlay-opacity="0.9"   v-model="drawer" absolute temporary >
   <v-img  src='https://www.yogamorphose.fr/storage/lieu.jpg' aspect-ratio="1.7"></v-img>
      <v-list-item>
        <v-list-item-content color="black">
          <v-list-item-title class="font-italic" style="color:#FFCC80;"  >YogaMorphose</v-list-item-title>
          <v-list-item-subtitle class="font-italic" style="color:#FFCC80;"  >Changer Votre Vie</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list rounded>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon style="color:#FFD180;"  >mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/" style="color:#FFD180;"  >Accueil</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

         <v-list-item link>
          <v-list-item-icon>
            <v-icon style="color:#FFD180;"  >mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/prestations" style="color:#FFD180;"  >Cours</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon style="color:#FFD180;"  >mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/lieu" style="color:#FFD180;"  >Le Lieu</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider v-if="!isCheck"></v-divider>

        <v-list-item  v-if="!isCheck" link>
          <v-list-item-icon>
            <v-icon style="color:#FFD180;"  >mdi-shopping</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
         <v-list-item-title class="font-weight-bold">
              <router-link to="/login" style="color:#FFD180;"  >Connexion</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        

     <v-divider  v-if="isCheck"></v-divider>

        <v-list-item link  v-if="isCheck">
          <v-list-item-icon>
            <v-icon style="color:#FFD180;"  >mdi-shopping</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/mesprestations" style="color:#FFD180;"  >Dashboard</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-divider  v-if="isCheck"></v-divider>

        <v-list-item link  v-if="isCheck">
          <v-list-item-icon>
            <v-icon style="color:#FFD180;"  >mdi-shopping</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
               <a text class=""   style="color:#FFD180;"  @click="logout()">Deconnexion</a>
  
              <!-- <router-link @click="logout()" style="color:#FFD180;"  >Deconnexion</router-link> -->
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        

      
      </v-list>
    </v-navigation-drawer>
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


computed: {
    isCheck() {
      return this.currentUser;
    },

    isAdmin() {
      if (!_.isEmpty(this.currentUser)) {
        return this.currentUser.role.name == "Admin";
      }
    },

    isProf() {
      if (!_.isEmpty(this.currentUser)) {
        return this.currentUser.role.name == "Prof";
      }
    }
  },






//  computed:{
//        isCheck(){
//       return this.currentUser;
//     },

//      isAdmin(){
//       return authenticationService.isAdmin();
//     },

//      isProf(){
//       return authenticationService.isProf();
//     },


//  },


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
