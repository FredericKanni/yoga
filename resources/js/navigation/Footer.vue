<template>
   <v-footer absolute>
<v-row>
  <v-col cols=4 class="text-center">
    <p>

   <!-- <router-link to="/login" class="my-auto mx-1">
          <v-btn depressed small>se connecter</v-btn>
        </router-link> -->

    

    </p>
    <p>      <router-link to="/mesprestations" class="my-auto mx-1">
          <v-btn depressed small>Dashbord</v-btn>
        </router-link></p>
  
  
  </v-col>
    <v-col cols=4 class="text-center">
    CGU  -  CGV
  </v-col>
  
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
 
</v-row>

  
  </v-footer>
</template>


<script>
export default {
    
}
</script>
