<template>
<v-card class="overflow-hidden">
    <v-app-bar app dark flat hide-on-scroll>
      <v-btn icon :to="{name: 'Sugerencia'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Sugerencia</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :to="{name: 'Editar_sugerencia' , params: {id:1}}">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          @click="() => {}"
        >
          <v-list-item-title>Desactivar Sugerencia</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>

    <v-layout wrap>
        <v-card>
            <p>{{sugerencia.titulo}}</p>
        </v-card>
    </v-layout>
    
    
    
</v-card>
</template>

<script>
export default {
data: () => ({
    sugerencia:{}
}),
created(){
    this.mostrar_sugerencia()
},
methods: {
    mostrar_sugerencia(){
        this.axios.get(`/get_sugerencia/${this.$route.params.id}`)
        .then(res => {
            this.sugerencia = res.data;
        })
        .catch( e => {
        console.log(e.response);
        })
    }
}

}
</script>