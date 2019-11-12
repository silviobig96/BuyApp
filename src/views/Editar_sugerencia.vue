<template>
<v-container grid-list-lg>
    <v-app-bar app dark flat hide-on-scroll>
      <v-btn icon :to="{name: 'Sugerencia'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Edita tu Sugerencia</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img aspect-ratio="1" max-width="50" max-height="40" src="../assets/act.png"></v-img>
      <v-btn icon type="submit" form="Form_editar_sugerencia">
        <v-icon>done</v-icon>
      </v-btn>
    </v-app-bar>

    <v-layout wrap>
      <v-flex xs12>
        <v-card class="ml-4 mr-4" dense>
          <v-form @submit.prevent="editar_sugerencia()" class="px-3" id="Form_editar_sugerencia">
            <v-card-title>Detalles de tu Sugerencia {{id_sugerencia}}</v-card-title>
            <v-text-field 
            color="oficial"  
            label="Título"
            v-model="sugerencia.titulo"
            >
              <v-icon slot="prepend">sort</v-icon>
            </v-text-field>
            <v-textarea 
            color="oficial"  
            label="Descripción" 
            v-model="sugerencia.descripcion"
            counter>
              <v-icon slot="prepend">description</v-icon>
            </v-textarea>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

</v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    data: () => ({
    sugerencia: {titulo: '', descripcion: ''}
  }),
  computed:{
    ...mapState(['token']),
    ...mapState(['usuarioDB'])
  },
  methods: {
    editar_sugerencia(){
      let config = {
        headers: {
          token: this.token
        }
      }
      this.axios.post('/nueva_sugerencia', this.sugerencia, config)
      .then(res => {
        this.$router.push("/Sugerencia");
      })
      .catch(e => {
        console.log(e.response);
      })
    }
  },
props: {
    id_sugerencia: ''
}
}

</script>