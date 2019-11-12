<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Barra_sup from "./components/Barra_sup";
import { mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['leer_token'])
  },
  components: {
    Barra_sup
  },
  created(){
    this.leer_token();
  }
};
</script>
