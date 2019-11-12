<template>
  <v-container grid-list-md>
    <v-app-bar app dark flat hide-on-scroll>
      <v-btn icon :to="{name: 'home'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Sugerencias</v-toolbar-title>
    </v-app-bar>

    <v-layout row wrap>
      <!-- Cartas de sugerencias -->
      <v-flex xs12 v-for="(item,index) in sugerencias" :key="index" >
        <v-card class="mx-auto" dark max-width="400" :to="{name: 'Editar_sugerencia' , params: {id:item._id}}">
          <v-chip label color="oficial" text-color="black" class="ml-0">
            <v-icon left>label</v-icon>{{item.titulo}}
          </v-chip>
          <v-card-text>{{item.descripcion}}</v-card-text>

          <v-list-item class="grow">
            <v-list-item-content>
                <v-list-item-title>Por {{item.nombre_usuario}}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-list-item class="grow">

              <v-layout align-center justify-end>
                <v-icon class="mr-1">question_answer</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">schedule</v-icon>
                <span class="subheading">{{obtener_fecha(item.fecha_creacion)}}</span>
              </v-layout>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
    <Boton ruta="Nueva_sug" />
  </v-container>
</template>

<script>
import Boton from "../components/Boton.vue";

export default {
  data: () => ({
    sugerencias: []
  }),
  created(){
    this.mostrar_notas();
  },
  methods: {
    mostrar_notas(){
      this.axios.get('/get_sugerencias')
      .then(res => {
        this.sugerencias = res.data;
      })
      .catch( e => {
        console.log(e.response);
      })
    },
    obtener_fecha(fecha){
      const d = new Date(fecha);
      const a = new Date();
      a : Date.now;
      return d.getDate() + ' - ' + (d.getMonth()+1) + ' - ' + d.getFullYear();
    }
  },
  components: {
    Boton
  }
};
</script>
