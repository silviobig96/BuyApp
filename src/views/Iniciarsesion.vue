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
      <v-flex d-flex xs12 sm6>
        <v-flex>
          <center>
            <v-img :src="require('../assets/LOGO.fw.png')" high="200px" width="200px"></v-img>
            <p style="color:#FFFFFF">¡¡Bienvenido de vuelta!!</p>
          </center>
          <v-card>
            <v-form @submit.prevent="Iniciar_sesion()" v-model="valid">
              <v-card-text>
                <v-text-field
                  color="oficial"
                  v-model="usuario.email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  color="oficial"
                  v-model="usuario.contraseña"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Contraseña"
                  hint="Al menos 8 caracteres"
                  counter
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>

                <span
                  class="caption grey--text text--darken-1"
                >Por favor ingrese sus datos correctamente.</span>
              </v-card-text>

              <v-flex v-if="mensaje !=''" >
                <v-alert type="error">
                  <v-row align="center">
                    {{mensaje}}
                  </v-row>
                </v-alert>
              </v-flex>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="oficial">Confirmar</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
          <br />
          <br />
          <center>
            <router-link to="/Registrar" style="color:#FFFFFF;">¿Intentas crearte una cuenta?</router-link>
          </center>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    valid: false,
    emailRules: [
      v => !!v || "E-mail Requerido",
      v => /.+@.+/.test(v) || "E-mail Debe ser valido @ejemplo.com"
    ],
    show1: false,
    rules: {
      required: value => !!value || "Cotraseña requerida",
      min: v => v.length >= 8 || "Min 8 caracteres"
    },
    usuario: { email: '', contraseña: '' },
    timeout: 4000,
    mensaje: ''
  }),
  methods: {
    ...mapActions(['guardar_usuario']),
    Iniciar_sesion() {
        this.axios
        .post("/login", this.usuario)
        .then(res => {
          console.log("Usuario Logueado Exitosamente");
          this.mensaje = ''
          const token = res.data.token;
          this.guardar_usuario(token);
          //this.$router.push('/');
        })
        .catch(e => {
          console.log(e.response);
          this.mensaje = e.response.data.mensaje
        });
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    }
  }
};
</script>
