<template>
  <div>
    <v-btn icon fab  x-small   empty class="mr-4 "  color="#ffae1d" to="/stepper">
          <v-badge v-if='quantity!=0' color="#ffae1d" :content="quantity">
            <v-icon>mdi-cart</v-icon>
          </v-badge>

            <v-icon v-else>mdi-cart</v-icon>
        </v-btn>
 </div>


 


      </template>

      
 <script src="./panierIcone.js">
</script>