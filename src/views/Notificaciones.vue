<template>

<v-container grid-list-md>
<v-app-bar app dark flat hide-on-scroll>  
                <v-btn icon :to="{name: 'home'}">
                <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-toolbar-title> Mis notificaciones</v-toolbar-title>
                <v-spacer></v-spacer>
                    <v-img aspect-ratio="1" max-width="50" max-height="40" src="../assets/act.png"></v-img>
                <v-btn icon :to="{name: 'home'}">
                    <v-icon>done</v-icon>
                </v-btn>
            </v-app-bar>


<v-layout row wrap>

    <!----- COMENTARIO ----->
    <v-flex d-flex xs12 sm6> 
          
          <v-card
            color="#30abc9"
            dark
          >
          <v-layout>
            <v-flex> 
               <v-img :src="require('../assets/compacta.fw.png')" high="100px" width="100px"></v-img>
               </v-flex>
          <v-flex> 
            <v-card-text class="white--text">
              <div class="headline mb-2">Josephny comentó tu post</div>
              "Hola Silvio, ¿Cuánto cuesta tu artículo?"
            </v-card-text>
                        <v-card-actions>
              <v-spacer></v-spacer><v-btn text :to="{name: '/'}">IR AL POST</v-btn>
            </v-card-actions>
            </v-flex>
               </v-layout>          
          </v-card>
    </v-flex>
<!----- COMENTARIO ----->
<!----- COMPARTIR ----->
    <v-flex d-flex xs12 sm6> 
          
          <v-card
            color="#008080"
            dark
          >
          <v-layout>
            <v-flex> 
               <v-img :src="require('../assets/notificaciones.fw.png')" high="100px" width="100px"></v-img>
               </v-flex>
          <v-flex> 
            <v-card-text class="white--text">
              <div class="headline mb-2">Marialbert quiere compartir tu post</div>
              ¡Ahora tus amigos pueden compartir tus posts con sus amigos! 
            </v-card-text>
                        <v-card-actions>
              <v-spacer></v-spacer> <v-btn text :to="{name: '/'}">ECHA UN VISTAZO</v-btn>
            </v-card-actions>
            </v-flex>
               </v-layout>          
          </v-card>
    </v-flex>
<!----- Compartir ----->


 <!----- LIKE ----->
    <v-flex d-flex xs12 sm6 > 
          
          <v-card
            color="#008080"
            dark
          >
          <v-layout >
            <v-flex> 
               <v-img :src="require('../assets/act.png')" high="100px" width="100px"></v-img>
               </v-flex>
          <v-flex> 
            <v-card-text class="white--text">
              <div class="headline mb-2">A Silviobig96 le gustó tu post</div>
              Chequea tu último post e interatúa con otros usuarios
            </v-card-text>
                        <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="{name: '/'}">IR AL POST</v-btn>
            </v-card-actions>
            </v-flex>
               </v-layout>          
          </v-card>
    </v-flex>
<!----- LIKE ----->

</v-layout>


<!--
  <v-app-bar app dark flat hide-on-scroll>  
    <v-btn icon :to="{name: 'home'}">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>Mis notificaciones</v-toolbar-title>
  </v-app-bar> 
  -->

  </v-container>
  
</template>