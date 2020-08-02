<template>
    
<div>
<!-- telephone -->
    <v-carousel
   class="hidden-sm-and-up  "
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


<v-carousel
   class="hidden-sm-and-down"
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
    
</template>

<script src="./galerie.js">

</script>