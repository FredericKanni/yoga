<template>
    
<div>

    <v-carousel
   class="hidden-md-and-up"
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


      <!-- <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
      >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            height="100%"
          >
            <v-img    :src="item.src" aspect-ratio="1.7" ></v-img>
          </v-row>
      </v-carousel-item> -->
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


      <!-- <v-carousel-item
        v-for="(item,i) in itemsBis"
        :key="i"
      >
          <v-row
            class="fill-height"
            align="bottom"
            justify="center"
            height="100%"
          >
            <v-img    :src="item.src" aspect-ratio="1.7" ></v-img>
          </v-row>
      </v-carousel-item> -->
    </v-carousel>


</div>
    
</template>

<script src="./galerie.js">

</script>