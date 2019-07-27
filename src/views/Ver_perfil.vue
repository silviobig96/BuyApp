<template>
<div>
    <v-app-bar app dark flat hide-on-scroll>  
          <v-btn icon :to="{name: 'home'}">
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>AUXILIO! 404</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>

    <v-container>
    <v-layout align-center justify-center>
        <v-img
        src="../assets/act.png"
        aspect-ratio="1"

        ></v-img> 
    </v-layout>
    <v-layout>
        <h1 class="text-center">Pagina en construccion!</h1>
    </v-layout>
    </v-container>    
</div>

    
    
</template>

<script>
export default {
    
}
</script>

