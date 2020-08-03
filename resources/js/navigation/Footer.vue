<template>
<div>


   <v-footer absolute  color="#BA68C8">
<v-row class="	d-flex d-md-none text-center">

  <v-col cols=12>
    <router-link to="/CGV"   style="color:#000;" >CGV</router-link>
  </v-col>

    <v-col cols=12>
 <router-link to="/mentions"  style="color:#000;" >  mentions legales </router-link>
  </v-col>

    <v-col cols=12>
     <router-link to="/politique" style="color:#000;"  >  politiques de confidentialité </router-link>
  </v-col>



</v-row>
  <v-row class="hidden-sm-and-down">
  <v-col cols=4 class="text-center">
    <p>

   <!-- <router-link to="/login" class="my-auto mx-1">
          <v-btn depressed small>se connecter</v-btn>
        </router-link> -->

    

    </p>
    <p>    
        <!-- <router-link to="/mesprestations" class="my-auto mx-1">
          <v-btn depressed small>Dashbord</v-btn>
        </router-link> -->
        </p>
  
  
  </v-col  >
    <v-col cols=4 class="text-center  ">
   <router-link to="/CGV"   style="color:#000;" >CGV</router-link>

     - 
     <router-link to="/mentions"  style="color:#000;" >  mentions legales </router-link>
        - 
     <router-link to="/politique" style="color:#000;"  >  politiques de confidentialité </router-link>
     
  </v-col>
  




  
    <v-spacer></v-spacer>
    <div class="my-auto">&copy; {{ new Date().getFullYear() }}</div>
 
</v-row>

  
  </v-footer>
  </div>
</template>


<script>
export default {
    
}
</script>
