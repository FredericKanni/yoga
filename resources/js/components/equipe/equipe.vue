<template>
  <div>
    <h2 class="m-3 text-center">L'Equipe</h2>






<v-row class="px-10">

  <v-col  cols="12" sm="6" md='3'
    v-for="prof in equipe"
    :key="prof.id"
    >
<v-card  color="#BA68C8" class="mx-auto my-3 " >
      <v-col class="text-center mt-1" cols="12" >
        <v-avatar class="profile" color="grey" size="164">
          <v-img v-if='prof.image' :src=prof.image></v-img>
        </v-avatar>
      </v-col>
      <v-card-title   style="color:#FFD180;"  class="justify-center">{{prof.name}}</v-card-title>
      <v-card-text>
        <div   style="color:#FFD180;" class="ma-0 text-center">{{prof.metier}}</div>
      </v-card-text>
      
      <v-card-text   style="color:#FFD180;" class="text-center">
        <div>{{prof.description}}</div>

      </v-card-text>
    </v-card>




    

</v-col>



  
         





</v-row>



  </div>
</template>

<script src="./equipe.js">
</script>