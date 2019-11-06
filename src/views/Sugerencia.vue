<template>

<v-container grid-list-md>
  <v-app-bar app dark flat hide-on-scroll>  
    <v-btn icon :to="{name: 'home'}">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title> Sugerencias</v-toolbar-title>
  </v-app-bar>

  <v-layout row wrap>

        <v-flex xs12>
        <v-card class="mx-auto" dark max-width="400"  >
        <v-chip label color="oficial" text-color="black" class="ml-0">
        <v-icon left>label</v-icon>Bloquear usuarios
        </v-chip>
        <v-card-text >
        Debería haber una opción para dejar de ver los comentarios de ciertos usuarios.
        </v-card-text>

        <v-card-actions>
        <v-list-item class="grow">
        <v-list-item-content>
        <v-list-item-title>Gabriela B</v-list-item-title>
        </v-list-item-content>

        <v-layout
        align-center
        justify-end
        >
        <v-icon class="mr-1">question_answer</v-icon>
        <span class="subheading mr-2">256</span>
        <span class="mr-1">·</span>
        <v-icon class="mr-1">schedule</v-icon>
        <span class="subheading">4d</span>
        </v-layout>
        </v-list-item>
        </v-card-actions>
        </v-card> 


        </v-flex>



        <v-flex xs12>
        <v-card class="mx-auto" dark max-width="400"  >
        <v-chip label color="oficial" text-color="black" class="ml-0">
        <v-icon left>label</v-icon>Buscar por ubicación
        </v-chip>
        <v-card-text>
        Estaría bien poder localizar tus productos más próximos a tú ubicación
        </v-card-text>

        <v-card-actions>
        <v-list-item class="grow">
        <v-list-item-content>
        <v-list-item-title>Marialbert</v-list-item-title>
        </v-list-item-content>

        <v-layout
        align-center
        justify-end
        >
        <v-icon class="mr-1">question_answer</v-icon>
        <span class="subheading mr-2">256</span>
        <span class="mr-1">·</span>
        <v-icon class="mr-1">schedule</v-icon>
        <span class="subheading">4d</span>
        </v-layout>
        </v-list-item>
        </v-card-actions>
        </v-card> 
        </v-flex>



        <v-flex xs12>
        <v-card class="mx-auto" dark max-width="400"  >
        <v-chip label color="oficial" text-color="black" class="ml-0">
        <v-icon left>label</v-icon>Comprobar productos publicados
        </v-chip>
        <v-card-text>
        Comprobar que los productos que tienen un año o mas siguen aun activos
        </v-card-text>

        <v-card-actions>
        <v-list-item class="grow">
        <v-list-item-content>
        <v-list-item-title>Silvio</v-list-item-title>
        </v-list-item-content>

        <v-layout
        align-center
        justify-end
        >
        <v-icon class="mr-1">question_answer</v-icon>
        <span class="subheading mr-2">256</span>
        <span class="mr-1">·</span>
        <v-icon class="mr-1">schedule</v-icon>
        <span class="subheading">4d</span>
        </v-layout>
        </v-list-item>
        </v-card-actions>
        </v-card> 
        </v-flex>


        <v-flex xs12>
        <v-card class="mx-auto" dark max-width="400"  >
        <v-chip label color="oficial" text-color="black" class="ml-0">
        <v-icon left>label</v-icon>Bloquear productos
        </v-chip>
        <v-card-text>
        Hola, estaría muy bien poder "silenciar" o "bloquear" determinados productos
        </v-card-text>

        <v-card-actions>
        <v-list-item class="grow">
        <v-list-item-content>
        <v-list-item-title>Josephny</v-list-item-title>
        </v-list-item-content>

        <v-layout
        align-center
        justify-end
        >
        <v-icon class="mr-1">question_answer</v-icon>
        <span class="subheading mr-2">256</span>
        <span class="mr-1">·</span>
        <v-icon class="mr-1">schedule</v-icon>
        <span class="subheading">4d</span>
        </v-layout>
        </v-list-item>
        </v-card-actions>
        </v-card> 
        </v-flex>


          <Boton ruta="New_post"/> 

        
  </v-layout>
  <Boton ruta="Nueva_sug"/> 
</v-container>
  
</template>

<script>
import Boton  from '../components/Boton.vue'

  export default {
    data: () => ({
      //
    }),
    components:{
    Boton
  }
  }
</script>
