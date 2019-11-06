<template>
<div>
<v-app-bar app dark flat hide-on-scroll>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            
      <!-- Boton de Categoria -->
      

      <div class="text-xs-center">
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ on }">
            <v-btn text dark v-on="on">
              Categorías<v-icon>expand_more</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-subheader>Selecione una categoría</v-subheader>
            <v-list-item
              v-for="tile in tiles"
              :key="tile.title"
              @click="sheet = false"
            >
              <v-list-item-avatar>
                <v-avatar size="32px" tile>
                  <i class="material-icons"> {{tile.img}} </i>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-title>{{ tile.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-bottom-sheet>
      </div>
            
      <!-- Elementos de la barra de Navegacion -->

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    
    </v-app-bar>
            
      <!-- Drawer -->
      
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-img :aspect-ratio="16/9" src="../assets/fondob1.jpg">
      <v-layout mt-5 column align-center>
        <v-flex>
          <router-link to="/Iniciarsesion">
            <v-avatar>
            <img src="../assets/Usuarios/img_usuario_vacio.png" alt="Iniciar sesion"  high="20px" width="20px">
          </v-avatar>
          </router-link> 
        </v-flex>
        <v-flex mt-5 align-end >
          <router-link tag="p" to="/Iniciarsesion">
          <span class="white--text">Iniciar Sesión</span>
          </router-link> 
        </v-flex>
      </v-layout>
      </v-img>

      <v-list nav dense>
        <v-list-item-group v-model="item" color="#1DE9B6s">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.name"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

</div>
    

    
</template>

<script>
export default {
  data: () => ({
      drawer: false,
      item: 0,
      items: [
          { title: 'Inicio', icon: 'home', name: '/'},
          { title: 'Ofertas', icon: 'local_offer'},
          { title: '¿Qué hay de nuevo?', icon: 'new_releases', name: 'Que_hay_denuevo'},
          { title: 'Sugerencias', icon: 'announcement', name:'Sugerencia' },
          { title: 'Ajustes', icon: 'settings', name: 'ajustes' },
          { title: 'Cerrar sesión', icon: 'exit_to_app' }
        ],
        sheet: false,
      tiles: [
        { img: 'phonelink', title: 'Electrónica' },
        { img: 'home', title: 'Hogar' },
        { img: 'local_florist', title: 'Jardín' },
        { img: 'fiber_manual_record', title: 'Deportes' },
        { img: 'wc', title: 'Ropa' },
        { img: 'star', title: 'Zapatos' }
      ],
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    
}
</script>

<style>

</style>

