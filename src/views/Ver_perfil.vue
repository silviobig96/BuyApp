<template>
  <div>
    <v-app-bar app dark flat hide-on-scroll>
      <v-btn icon :to="{name: 'home'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>mflores09</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-flex xs12>
      <div class="ma-2">
        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
          <v-avatar size="80">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar" />
          </v-avatar>
           <v-btn class="ma-2" outlined color="#69a286">Editar perfil</v-btn>
        </v-flex>
      </div>
      <v-card
    class="mx-auto"
    max-width="400"
  >

    <v-card class="text-legth" >
   
    <div class="my-2">
        <v-flex xs12 sm4 text-center>
            <div class="my-2"> 
                <div class="my-2">
                    <v-btn text small>24</v-btn>
                </div> 
                <div class="my-2">
                    <v-btn text small>Posts</v-btn>
                </div> 
            </div>
        </v-flex>
        <v-flex xs12 sm4 text-center>
            <div class="my-2"> 
                <div class="my-2">
                    <v-btn text small>29</v-btn>
                </div> 
                <div class="my-2">
                    <v-btn text small>Seguidos</v-btn>
                </div> 
            </div>
        </v-flex>
        <v-flex xs12 sm4 text-center>
            <div class="my-2"> 
                <div class="my-2">
                    <v-btn text small>58</v-btn>
                </div> 
                <div class="my-2">
                    <v-btn text small>SEguidores</v-btn>
                </div> 
            </div>
        </v-flex>
    </div>
    </v-card> 
  <!--
    <v-system-bar color="indigo darken-2"></v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar> -->

    <v-container
      fluid
      grid-list-md
      pa-2
    >
      <v-layout
        wrap
      >
        <v-flex
          v-for="card in cards"
          :key="card.title"
          v-bind="{ [`xs${card.flex}`]: true }"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="card.title"
              ></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
    
    </v-flex>
  </div>
</template>


<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Laptop HP', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Beats by Dr. Dre', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Reeboks', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
  }
</script>

 [Foto]
