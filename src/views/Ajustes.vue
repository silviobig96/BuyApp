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
                <v-flex>

                <v-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
                </v-avatar>
                </v-flex>
                <v-flex>
                <v-toolbar-title>Gabriela B</v-toolbar-title>
                <div class="body-1">abcgabriela@gmail.com</div>
                </v-flex>
            </v-layout>
            <br>
                        <v-divider class="mx-4"></v-divider>
            <br>

            <v-list class="pt-0" dense>
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
           

        </v-container>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
        item: 0,
        items: [
          { title: 'Editar perfil', icon: 'create', name: 'Ver_perfil'},
          { title: 'Acerca de', icon: 'info', name: 'acercade'}
        ]
        
    }
  }
}
</script>