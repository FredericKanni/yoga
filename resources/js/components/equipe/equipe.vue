<template>
  <div>
    <h2 class="m-3 text-center">L'Equipe</h2>



<v-row>

  <v-col  cols="12" sm="6" md='3'
    v-for="prof in equipe"
    :key="prof.id"
    >
<v-card class="mx-auto my-3" >
      <v-col class="text-center mt-1" cols="12" >
        <v-avatar class="profile" color="grey" size="164">
          <v-img v-if='prof.image' :src=prof.image></v-img>
        </v-avatar>
      </v-col>
      <v-card-title class="justify-center">{{prof.name}}</v-card-title>
      <v-card-text>
        <div class="ma-0 text-center">{{prof.metier}}</div>
      </v-card-text>
      <v-card-text class="text-center">
        <div>{{prof.description}}</div>
      </v-card-text>
    </v-card>



    

</v-col>



  
         





</v-row>
 


  </div>
</template>

<script src="./equipe.js">
</script>