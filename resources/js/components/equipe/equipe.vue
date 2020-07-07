<template>
  <div>
    <h2 class="m-3 text-center">L'Equipe</h2>


   <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="n in 25"
          :key="n"
       
        >
      
   <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="n in 25"
          :key="n"
          v-slot:default="{ active, toggle }"
        >




<v-card

 :input-value="active"
            active-class="purple white--text"
              @click="toggle"
>
 
 


      <v-col class="text-center mt-1" cols="12" >
        <v-avatar class="profile" color="grey" size="164">
          <v-img ></v-img>
        </v-avatar>
      </v-col>

      <v-card-title class="justify-center" >toto</v-card-title>
      <v-card-text>
        <div class="ma-0 text-center">profyoga</div>
      </v-card-text>
      
      <v-card-text class="text-center">
        <div>lul</div>

      </v-card-text>


    </v-card>


<!--         
          <v-btn
          width="20vw"
            class="mx-2"
            :input-value="active"
            active-class="purple white--text"
            depressed
            rounded
            @click="toggle"
          >
            Options {{ n }}
          </v-btn> -->
        </v-slide-item>
      </v-slide-group>





          <!-- <v-col cols=3> -->
         
<!-- <v-card class="mx-auto my-3 "  >
      <v-col class="text-center mt-1" cols="12" >
        <v-avatar class="profile" color="grey" size="164">
          <v-img ></v-img>
        </v-avatar>
      </v-col>
      <v-card-title class="justify-center">toto</v-card-title>
      <v-card-text>
        <div class="ma-0 text-center">profyoga</div>
      </v-card-text>
      
      <v-card-text class="text-center">
        <div>lul</div>

      </v-card-text>
    </v-card>
     -->
    <!-- </v-col> -->


        </v-slide-item>
      </v-slide-group>


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