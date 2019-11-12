<template>
  <v-container>
    <v-app-bar app dark flat hide-on-scroll>
      <v-btn icon :to="{name: 'home'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Ajustes</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-layout>
      <!-- usuario no logueado -->
      <v-flex v-if="!usuario_activo">
        <router-link style="color:#000000" to="/Iniciarsesion">
          <v-avatar>
            <img src="../assets/Usuarios/img_usuario_vacio.png" />
          </v-avatar>
        </router-link>
      </v-flex>
      <v-flex v-if="!usuario_activo">
        <router-link style="color:#000000" to="/Iniciarsesion">
          <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
          <div class="body-1">Entra a la comunidad de BuyApp</div>
        </router-link>
      </v-flex>

      <!-- usuario Logueado -->
      <v-flex v-if="usuario_activo">
        <v-avatar>
          <img src="../assets/Usuarios/ejemplo.jpg" />
        </v-avatar>
      </v-flex>
      <v-flex v-if="usuario_activo">
        <v-toolbar-title>Hola {{usuarioDB.data.nombre_usuario}}</v-toolbar-title>
        <div class="body-1">{{usuarioDB.data.email}}</div>
      </v-flex>
    </v-layout>
    <br />
    <v-divider class="mx-4"></v-divider>
    <br />

    <v-list class="pt-0" dense>
      <v-list-item-group v-model="item" color="#1DE9B6s">
        <v-list-item v-if="usuario_activo" :to="{name: 'Editar_perfil'}">
            <v-list-item-icon >
              <v-icon>
                create
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Editar perfil</v-list-item-title>
            </v-list-item-content>
          </v-list-item> 
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.name">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<style>
a {
  text-decoration: none;
}
</style>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "App",
  data: () => {
    return {
      item: 0,
      items: [
        //{ title: "Editar perfil", icon: "create", name: "Ver_perfil" },
        { title: "Acerca de", icon: "info", name: "acercade" }
      ]
    };
  },
  computed: {
    ...mapGetters(["usuario_activo"]),
    ...mapState(["usuarioDB"])
  }
};
</script>