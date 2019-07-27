<template v-slot:extension>

        <v-tabs centered dark>
        <v-tabs-slider></v-tabs-slider>
          <v-tab href="#one">NUEVOS</v-tab>
          <v-tab href="#two">DESTACADOS</v-tab>
          <v-tab href="#three">POPULARES</v-tab>
          <v-tabs-slider color="oficial"></v-tabs-slider>
        </v-tabs>

      </template>


<script>

  export default {
      name: 'Vmenu'
    }
</script>