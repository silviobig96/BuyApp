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
            <p
              style="color:#FFFFFF"
            >¡Bienvenido! Créate una cuenta cuenta para unirte a la comunidad y conseguir los mejores productos</p>
          </center>
          <v-card>
            <v-form @submit.prevent="agregarUsuario()" v-model="valid">
              <v-card-text>
                <v-text-field
                  color="oficial"
                  v-model="usuario.nombre"
                  :rules="nombre_rules"
                  label="Nombre"
                  required
                ></v-text-field>
                <v-text-field
                  color="oficial"
                  v-model="usuario.nombre_usuario"
                  :rules="nombre_usuario_rules"
                  label="Usuario"
                  required
                ></v-text-field>
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
                <v-text-field
                  color="oficial"
                  v-model="con_password"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Confirmar Contraseña"
                  hint="Al menos 8 caracteres"
                  counter
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
                <span
                  class="caption grey--text text--darken-1"
                >Por favor ingrese una contraseña para su cuenta.</span>
              </v-card-text>

              <v-flex v-if="mensaje !=''">
                <v-alert type="error">
                  <v-row align="center">{{mensaje}}</v-row>
                </v-alert>
              </v-flex>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  type="submit"
                  color="oficial"
                >Confirmar</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>

          <center>
            <router-link to="/Iniciarsesion" style="color:#FFFFFF;">¿Intentas iniciar sesión?</router-link>
          </center>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    email: "",
    nombre_rules: [v => !!v || "Nombre Requerido"],
    nombre_usuario_rules: [v => !!v || "Nombre de usuario Requerido"],
    emailRules: [
      v => !!v || "E-mail Requerido",
      v => /.+@.+/.test(v) || "E-mail Debe ser valido @ejemplo.com"
    ],
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    con_password: "",
    rules: {
      required: value => !!value || "Cotraseña requerida",
      min: v => v.length >= 8 || "Min 8 caracteres"
    },
    usuarios: [],
    usuario: { nombre: "", nombre_usuario: "", email: "", contraseña: "" },
    timeout: 4000,
    mensaje: ''
  }),
  methods: {
    agregarUsuario() {
      this.axios
        .post("/new_usuario", this.usuario)
        .then(res => {
          this.usuarios.push(res.data);
          console.log("Usuario Creado Exitosamente");
          this.$router.push("/Iniciarsesion");
          this.mensaje = "";
        })
        .catch(e => {
          console.log(e.response);
          if (e.response.data.error.errors.nombre) {
            this.mensaje = e.response.data.error.errors.nombre.message;
          }else
          if (e.response.data.error.errors.nombre_usuario) {
            this.mensaje =
              e.response.data.error.errors.nombre_usuario.message;
          }else
          if (e.response.data.error.errors.email) {
            this.mensaje = e.response.data.error.errors.email.message;
          }
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
