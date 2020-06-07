<template>
<div>
<galerie></galerie>
<equipe></equipe>
</div>

 
</template>


<script>

import galerie from '../components/galerie/galerie.vue';
import equipe from '../components/equipe/equipe.vue';
export default {
 components: {
        galerie,
        equipe
    }
};
</script>
