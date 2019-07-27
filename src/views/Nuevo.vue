<template>

<v-container grid-list-md>
  <v-app-bar app dark flat hide-on-scroll>  
    <v-btn icon :to="{name: 'home'}">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title> ¿Qué hay de nuevo?</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>

  <v-layout row wrap>

    <!----- CARD 1 ----->
    <v-flex d-flex xs12 sm6 > 
          
          <v-card
            color="#004020"
            dark
          >
          <v-layout >
            <v-flex> 
               <v-img :src="require('../assets/act.png')" high="100px" width="100px"></v-img>
               </v-flex>
          <v-flex> 
            <v-card-text class="white--text">
              <div class="headline mb-2">Actualización de datos</div>
              Actualiza tus datos de manera rápida y segura.
            </v-card-text>
                        <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="{name: 'Ajustes'}">AJUSTES</v-btn>
            </v-card-actions>
            </v-flex>
               </v-layout>          
          </v-card>
    </v-flex>
<!----- CARD 1 ----->


    <!----- CARD 2 ----->
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
              <div class="headline mb-2">Vista compacta</div>
              Mira más productos simultaneamente en una lista con menos detalles, para una lectura rápida cuando el tiempo es poco.
            </v-card-text>
                        <v-card-actions>
              <v-spacer></v-spacer><v-btn text>QUIERO PROBAR</v-btn>
            </v-card-actions>
            </v-flex>
               </v-layout>          
          </v-card>
    </v-flex>
<!----- CARD 2 ----->


<!----- CARD 3 ----->
    <v-flex d-flex xs12 sm6> 
          
          <v-card
            color="#157524"
            dark
          >
          <v-layout>
            <v-flex> 
               <v-img :src="require('../assets/notificaciones.fw.png')" high="100px" width="100px"></v-img>
               </v-flex>
          <v-flex> 
            <v-card-text class="white--text">
              <div class="headline mb-2">Notificaciones mejoradas</div>
              ¡La app ahora ofrece muchas nuevas notificaciones! Puedes revisarlas en ajustes.
            </v-card-text>
                        <v-card-actions>
              <v-spacer></v-spacer><v-btn text>ÉCHALES UN VISTAZO</v-btn>
            </v-card-actions>
            </v-flex>
               </v-layout>          
          </v-card>
    </v-flex>
<!----- CARD 3 ----->



  </v-layout>

</v-container>
  
</template>

