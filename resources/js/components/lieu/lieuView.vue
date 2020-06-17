<template>
    <div>
      <h1 class="text-center ma-8">
          le lieu
      </h1>
<v-container>
<v-carousel
    cycle
    height="50vh"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
       v-for="(item,i) in items"
        :key="i"
          :src="item.src" 
    >

        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <!-- <v-img   :src="item.src" aspect-ratio="1.7" ></v-img> -->
        </v-row>
 
    </v-carousel-item>
  </v-carousel>



 <p>
      offrez-vous un moment hors du temps rien que pour vous. 
Venez découvrir nos cours en extérieur, sur notre nouvelle terrasse
    </p>

    <p>
 L’occasion idéale de combiner une activité bien-être et de profiter de la beauté d’un lieu exceptionnel qui vous ravira. 
  
    </p>
  
  <p>
   Yoga est bien plus qu'un studio de Pilates et Yoga, c'est un concept à votre image dont l'objectif est de vous amener à une harmonie du corps et de l'esprit.
  </p>
   

</v-container>



    </div>
</template>

<script src="./lieuView.js">

</script>