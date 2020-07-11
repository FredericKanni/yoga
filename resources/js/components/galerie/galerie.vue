<template>
    
<div>

    <v-carousel
  
      cycle
      height="90vh"
      hide-delimiter-background
      show-arrows-on-hover
    >


      <v-carousel-item
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




      </v-carousel-item>


            <!-- <div class="display-3">{{ slide }} Slide</div> -->
               <!-- <v-img src="'/public/storage/y1.jpg'" aspect-ratio="1.7"></v-img>  -->
   <!-- <v-img   :src="item.src" aspect-ratio="1.7"></v-img>  -->
              
   
    </v-carousel>
</div>
    
</template>

<script src="./galerie.js">

</script>