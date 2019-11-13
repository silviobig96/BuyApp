import { mdiBorderColor } from '@mdi/js';

<template>
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#43a047"
          dark
          shrink-on-scroll
          prominent
          src="../assets/fondob1.jpg"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-5"
          scroll-threshold="500"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-btn icon :to="{ name: 'home' }">
            <v-icon>arrow_back</v-icon>
          </v-btn>

          <v-flex xs12 md4 style="margin-top: 15px;">
            <br />
            <v-avatar slot="offset" size="100">
              <img src="../assets/Usuarios/ejemplo.jpg" class="mr-12" />
            </v-avatar>
            <v-spacer></v-spacer>
          </v-flex>
          <v-spacer></v-spacer>
        </v-app-bar>

        <br /><br /><br /><br /><br /><br /><br /><br />
        <div style="float: right; margin-right: 25px; margin-top: -40px;"  v-if="!es_del_usuario($route.params.id, usuarioDB.data.nombre_usuario)">
          <!-- EN EL PERFIL DE OTRO USUARIO -->

          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="teal"
          >
            <v-icon>share</v-icon>
          </v-btn>
          <v-btn
            rounded
            color="oficial"
          >
            <v-icon>person_add</v-icon>Seguir
          </v-btn>
          </div>

          <div style="float: right; margin-right: 10px; margin-top: -40px;" v-if="es_del_usuario(!$route.params.id, usuarioDB.data.nombre_usuario)">
          <!-- EN EL PERFIL DEL USUARIO -->
          <router-link :to="{name:'Editar_perfil'}">
            <v-btn
            class="mx-2"
            fab
            dark
            small
            color="teal"
            >
              <v-icon>edit</v-icon>
            </v-btn>
          </router-link>
          

          <v-btn
            rounded
            color="oficial"
          >
            <v-icon>share</v-icon>Compartir
          </v-btn>
        </div>

        <v-card-text class="text-xs-center">
          <h2>{{usuario.nombre}}</h2>
          <h6 class="category text-gray font-weight-thin mb-3">
            Miembro desde {{obtener_fecha(usuario.fecha_creacion)}}
          </h6>
          <p class="card-description font-weight-light">
            Por programar
          </p>

          <v-list-item-content>
            <v-list-item-subtitle
              ><span class="text--primary"><v-icon>assistant</v-icon> 227</span>
              Publicaciones &mdash;
              <span class="text--primary"><v-icon>person</v-icon> 33</span>
              Seguidores</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-card-text>

        <v-card max-width="450" class="mx-auto">
          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title" @click="() => {}">
                <v-avatar class="ma-3" size="40" tile>
                  <v-img :src="item.avatar"></v-img>
                </v-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
        <v-sheet id="scrolling-techniques-5" class="overflow-y-auto"> </v-sheet>
      </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    items: [
      { header: "Todas las publicaciones" },
      {
        avatar:
          "https://resources.claroshop.com/imagenes-sanborns-ii/1200/2005657191819.jpg",
        title: "iPhone 6S 32GB",
        subtitle:
          "<span class='text--primary'>1 hora, 8:40</span> &mdash; iPhone 6S 32GB Color Rosa R9"
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/190198899859.jpg",
        title:
          'Audífonos Urbeats <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>3 horas, 6:29</span> &mdash; Los audífonos urBeats3 con conector Lightning ofrecen una acústica precisa a través de un controlador axial para brindar una experiencia de audio excepcional. "
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/13803271362.jpg",
        title: "Cámara Canon EOS Rebel T6 Ef-S 18-5",
        subtitle:
          "<span class='text--primary'>6 hora, 2:20</span> &mdash; . Capta cada una de tus vivencias más importantes y disfruta compartiendo con los que más quieres."
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://images-na.ssl-images-amazon.com/images/I/41O08qGygvL._SL500_AC_SS350_.jpg",
        title: "Audífonos Skullcandy S6HBHY-516",
        subtitle:
          "<span class='text--primary'>1 día</span> &mdash; Ahora tendrás la libertad de escuchar tu música sin los estorbosos cables. Los audífonos de la marca Skullcandy cuenta con conexión inalámbrica los cuales te darán hasta 15 horas de música continua con la carga de batería completa"
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/192876036143.jpg",
        title: "Paquete Laptop Asus X507LA-BR018T+ Mochila",
        subtitle:
          "<span class='text--primary'>8 días</span> &mdash; Una combinación perfecta de belleza y rendimiento, ASUS X507 está impulsada por el último procesador Intel® Core™ i3 con 8GB de RAM. "
      }
    ],
    usuario:{}
  }),
  created(){
    this.obtener_usuario()
  },
  computed: {
    ...mapState(['token']),
    ...mapState(["usuarioDB"])
  },
  methods: {
    ...mapActions(["es_del_usuario"]),
    obtener_usuario(){
      let config = {
        headers: {
          token: this.token
        }
      }
        this.axios.get(`/buscar_usuario/${this.$route.params.id}`,config)
        .then(res => {
            this.usuario = res.data;
        })
        .catch( e => {
        console.log(e.response);
        })
    },
    obtener_fecha(fecha){
      const d = new Date(fecha);
      var meses = ["Ene", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      return d.getDate() + ' ' + meses[d.getMonth()] + ' ' + d.getFullYear();
    }
  }
};
</script>