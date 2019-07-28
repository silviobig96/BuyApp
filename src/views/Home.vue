<template>
<div>
    <Barra_sup/>
    <vmenu/>
    <v-container grid-list-md text-center>
      <v-layout wrap>
        <v-flex xs12>
          <v-card
            max-width="344"
            class="mx-auto ml-4 mr-4"
          >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="194"
            ></v-img>

            <v-card-text>
              Visit ten places on our planet that are undergoing the biggest changes today.
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Read
              </v-btn>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Bookmark
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>
        <v-flex xs12>
          <v-card
            max-width="344"
            class="mx-auto ml-4 mr-4"
          >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="194"
            ></v-img>

            <v-card-text>
              Visit ten places on our planet that are undergoing the biggest changes today.
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Read
              </v-btn>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Bookmark
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>
        <v-flex xs12>
          <v-card
            max-width="344"
            class="mx-auto ml-4 mr-4"
          >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="194"
            ></v-img>

            <v-card-text>
              Visit ten places on our planet that are undergoing the biggest changes today.
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Read
              </v-btn>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Bookmark
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
    

    <Boton ruta="New_post"/> 
</div>
  
</template>

<script>
import Vmenu from '../components/Vmenu.vue'
import Boton  from '../components/Boton.vue'
import Barra_sup  from '../components/Barra_sup.vue'
export default {
    name: 'Home',
  components:{
    Barra_sup,
    Vmenu,
    Boton
  }
}
</script>
