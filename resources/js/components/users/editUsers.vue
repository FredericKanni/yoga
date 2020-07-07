<template>
    <div>
       list profs

<v-row>
     <v-col cols="12" sm="6" md="3" 
    v-for="prof in listProf"
    :key="prof.id"
    >
 
{{prof.name}}

   

    </v-col>
</v-row>

list client
<v-row>
     <v-col cols="12" sm="6" md="3" 
    v-for="user in listUser"
    :key="user.id"
    >
 
{{user.name}}

   

    </v-col>
</v-row>
   

    </div>
</template>

<script src='./editUsers.js'>

</script>