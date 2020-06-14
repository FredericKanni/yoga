<template>
    <div>
      <h1 class="text-center ma-8">
          le lieu
      </h1>


       <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

<div>
    Le yoga est une discipline qui allie le corps (postures), le souffle (développement et approfondissement de la respiration) et le mental (concentration, intériorisation, méditation). Il s’agit de techniques ancestrales d’entretien, de santé et d'éveil, qui, installées dans la régularité, donnent les moyens réels d’accroître résistance physique et stabilité mentale, et sont particulièrement indiquées pour augmenter sa vitalité, apprendre à se relaxer et à élargir son espace intérieur.
​
L’instauration d’un rythme régulier est nécessaire pour une réelle amélioration de son potentiel et pour en ressentir tous les bienfaits : santé, équilibre, force, souplesse, concentration, coordination et sérénité.
​
​​« Que l’on soit un jeune homme, un homme mûr ou âgé, ou même malade et faible, c’est par la pratique que l’on obtient la Réalisation, par l’effort soutenu, par une attention infatigable à tous les aspects du yoga. »
(Hatha-Yoga-Pradipika, I, 64)
</div>



    </div>
</template>

<script src="./lieu.js">

</script>