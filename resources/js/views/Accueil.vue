<template>
<div>
<galerie></galerie>
<equipe></equipe>
<!-- <lieu></lieu> -->
</div>

 
</template>


<script>

import galerie from '../components/galerie/galerie.vue';
import equipe from '../components/equipe/equipe.vue';
// import lieu from '../components/lieu/lieu.vue';
export default {
 components: {
        galerie,
          // lieu,
        equipe
    }
};
</script>
