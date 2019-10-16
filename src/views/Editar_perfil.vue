<template>
  <v-container grid-list-lg>
    <v-app-bar app dark flat hide-on-scroll>
      <v-btn icon :to="{name: 'Editar_perfil'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Editar Perfil</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img aspect-ratio="1" max-width="50" max-height="40" src="../assets/act.png"></v-img>
      <v-btn icon>
        <v-icon>done</v-icon>
      </v-btn>
    </v-app-bar>

    <v-flex xs12>
      <!-- <v-card class="ml-4 mr-4" dense>-->
      <v-form class="px-3">
        <!-- Mostrar foto de perfil y boton cambiar-->
        <div class="text-center">
          <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
            <v-avatar size="80">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar" />
            </v-avatar>
          </v-flex>
          <v-btn class="ma-2" outlined color="#69a286">Cambiar foto de perfil</v-btn>
        </div>

        <!-- Datos Personales -->
        <v-text-field color="oficial" label=" " placeholder="Nombre"></v-text-field>
        <v-text-field color="oficial" label=" " placeholder="Nombre de usuario"></v-text-field>
        <v-text-field color="oficial" label=" " placeholder="Correo"></v-text-field>

        <v-text-field color="oficial" label=" " placeholder="www.example.com" persistent-hint></v-text-field>
        <v-textarea color="oficial" label=" " placeholder="Informaión de interés"></v-textarea>

        <!-- Sexo-->

        <v-flex xs12>
          <v-combobox v-model="select" :items="items" label="Selecciona tu sexo" color="oficial"></v-combobox>
        </v-flex>
      </v-form>
      <!--   </v-card> -->
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      select: "Mujer",
      items: ["Mujer", "Hombre"]
    };
  }
};
</script>