<template>
  <div>
    <v-btn icon fab  x-small  empty class="mr-4 green"  to="/stepper">
          <v-badge v-if='quantity!=0' color="green" :content="quantity">
            <v-icon>mdi-cart</v-icon>
          </v-badge>

            <v-icon v-else>mdi-cart</v-icon>
        </v-btn>
 </div>


   


      </template>

      
 <script src="./panierIcone.js">
</script>