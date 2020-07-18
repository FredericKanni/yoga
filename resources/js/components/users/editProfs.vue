<template>
  <div>
  

        <v-card-title>
    list profs
    </v-card-title>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="prof in listProf" :key="prof.id">




      <v-card
        class="mx-auto"
        max-width="344"
      >
        <!-- <v-img :src="prof.image"></v-img> -->
        <v-row justify="center">
   
    <v-avatar
    size=125
    >
      <img
        :src="prof.image"
        alt="John"
      >
    </v-avatar>       
        </v-row>
        <v-card-text>
          <h2 class="text-center">   {{prof.name}}</h2>

           <h2 class=" title  text-center">
              {{prof.metier}}
             </h2>
          Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
        </v-card-text>

        <v-card-title>
           <v-btn    class="ma-2" :to="'/profs/'+ prof.id+ '/prestations'">cours</v-btn>
             <v-btn class="ma-2">E</v-btn>
              <v-btn class="ma-2">D</v-btn>
        
        </v-card-title>

     
        
   
       
        
      </v-card>
 





     
      </v-col>
    </v-row>list client
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="user in listUser" :key="user.id">{{user.name}}</v-col>
    </v-row>
  </div>
</template>

<script src='./editProfs.js'>
</script>