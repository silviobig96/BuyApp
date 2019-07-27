<template>
  <v-app>
    
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Barra_sup from './components/Barra_sup';
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Barra_sup,
  },
};
</script>
