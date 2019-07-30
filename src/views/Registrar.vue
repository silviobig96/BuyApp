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
               <p style="color:#FFFFFF">¡Bienvenido! Créate una cuenta cuenta para unirte a la comunidad y conseguir los mejores productos</p>
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
          <v-text-field color="oficial"
            label="Confirmar contraseña"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Por favor ingrese una contraseña para su cuenta.
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

<center> <a href="Iniciarsesion"  style="color:#FFFFFF;">¿Intentas iniciar sesión?</a></center>
        
               
    </v-flex>  </v-flex>


  </v-layout>

</v-container>
  
</template>