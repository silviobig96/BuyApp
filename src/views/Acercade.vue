<template>
    
        <v-container>

        <v-app-bar app dark flat hide-on-scroll>
          <v-btn icon :to="{name: 'Ajustes'}">
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>Acerca de</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>

            <v-layout>
                <v-flex>
                <v-subheader style="color:#4EE19D">
                Social
                </v-subheader>
                </v-flex>
            </v-layout>

            <br>

            <v-list class="pt-0" dense>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.name"
            >

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title >{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.subti }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            </v-list>

      <v-layout>
                <v-flex>
                <v-subheader style="color:#4EE19D">
                Acerca de
                </v-subheader>
                </v-flex>
            </v-layout>
            <center><a href="#" style="color:#000000">Políticas de privacidad.</a></center>
        </v-container>
</template>

<script>

export default {
  name: 'acercade',
  data: () => {
    return {
        item: 0,
        items: [
          { title: '¡Síguenos en Twitter!', icon: 'star', subti: 'BuyApp', name:''},
          { title: 'Danos me gusta en Facebook', icon: 'thumb_up', subti: 'BuyApp', name:''},
          { title: 'Regálanos tus likes en Instagram', icon: 'favorite', subti: 'BuyApp', name:''},
          { title: 'Contacto', icon: 'mail', subti: 'gerencia@BuyApp.com', name:''}
        ]
    }
  }
}
</script>