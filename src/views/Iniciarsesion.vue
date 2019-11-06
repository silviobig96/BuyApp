<template>

<v-container grid-list-md style="background-color:#424242;">
  <v-app-bar app dark flat hide-on-scroll>  
    <v-btn icon :to="{name: 'home'}">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title></v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>

  <v-layout row wrap>

    <v-flex d-flex xs12 sm6 > 
          
            <v-flex> <center>

               <v-img :src="require('../assets/LOGO.fw.png')" high="200px" width="200px"></v-img>
               <p style="color:#FFFFFF">¡¡Bienvenido de vuelta!!</p>
               </center>
<v-card>
               <v-card-text >
          <v-text-field color="oficial" 
            label="Email"
            value=""
          ></v-text-field>
          <v-text-field color="oficial"
            label="Contraseña"
            type="password"
          ></v-text-field>

          <span class="caption grey--text text--darken-1">
            Por favor ingrese sus datos correctamente.
          </span>
        </v-card-text>
           <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="oficial"
      >
        Confirmar
      </v-btn>
    </v-card-actions>
   
</v-card>
<br><br>
<center>
  <router-link to="/Registrar" style="color:#FFFFFF;">¿Intentas crearte una cuenta?</router-link> 
</center> 
        
               
    </v-flex>  </v-flex>


  </v-layout>

</v-container>
  
</template>