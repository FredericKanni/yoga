<template>
    
<div>
<!-- telephone -->

   <div   class="d-flex d-sm-none  ">
   <v-carousel
 
      cycle
      height="90vh"
      hide-delimiter-background
      show-arrows-on-hover
    >
 <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    </v-carousel>

   </div>
 
<div class="d-none d-sm-flex">
<v-carousel
   
      cycle
      height="90vh"
      hide-delimiter-background
      show-arrows-on-hover
    >
 <v-carousel-item
      v-for="(item,i) in itemsBis"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"

    ></v-carousel-item>


    </v-carousel>
</div>



</div>
    
</template>

<script src="./galerie.js">

</script>