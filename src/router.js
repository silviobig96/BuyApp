import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ver_perfil from './views/Ver_perfil'
import Acerca_de from './views/Acercade'
import Sugerencia from './views/Sugerencia'
import Que_hay_denuevo from './views/Nuevo'
import Ajustes from './views/Ajustes'
import New_post from './views/New_post'
import Det_post from './views/Det_post'
import Registrar from './views/Registrar'
import Iniciarsesion from './views/Iniciarsesion'
import Editar_perfil from './views/Editar_perfil'
import Nueva_sug from './views/Nueva_sug'
import Notificaciones from './views/Notificaciones'
import Editar_sugerencia from './views/Editar_sugerencia'
import Ver_sugerencia from './views/Ver_sugerencia'

import store from './store'

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Ver_perfil/:id",
      name: "Ver_perfil",
      component: Ver_perfil,
      meta: {requiere_auth: true}
    },
    {
      path: "/Acercade",
      name: "Acercade",
      component: Acerca_de
    },
    {
      path: "/Sugerencia",
      name: "Sugerencia",
      component: Sugerencia
    },
    {
      path: "/Que_hay_denuevo",
      name: "Que_hay_denuevo",
      component: Que_hay_denuevo
    },
    {
      path: "/Ajustes",
      name: "Ajustes",
      component: Ajustes
    },
    {
      path: "/Acerca_de",
      name: "Acerca_de",
      component: Acerca_de
    },
    {
      path: "/New_post",
      name: "New_post",
      component: New_post,
      meta: {requiere_auth: true}
    },
    {
      path: "/Editar_perfil",
      name: "Editar_perfil",
      component: Editar_perfil,
      meta: {requiere_auth: true}
    },
    {
      path: '/Nueva_sug',
      name: 'Nueva_sug',
      component: Nueva_sug,
      meta: {requiere_auth: true}
    },
    {
      path: '/Editar_sugerencia/:id',
      name: 'Editar_sugerencia',
      component: Editar_sugerencia,
      meta: {requiere_auth: true}
    },
    {
      path: '/Ver_sugerencia/:id',
      name: 'Ver_sugerencia',
      component: Ver_sugerencia
    },
    {
      path: '/Notificaciones',
      name: 'Notificaciones',
      component: Notificaciones,
      meta: {requiere_auth: true}
    },
    {
      path: '/Det_post',
      name: 'Det_post',
      component: Det_post
    }, 
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },  
    {
      path: '/Iniciarsesion',
      name: 'Iniciarsesion',
      component: Iniciarsesion
    },  
    {
      path: '/Registrar',
      name: 'Registrar',
      component: Registrar
    }
  ]
});

router.beforeEach((to, from, next) => {
  const ruta_protegida = to.matched.some(record => record.meta.requiere_auth);
  
  if(ruta_protegida && store.state.token === ''){
    next({name: 'Iniciarsesion'})
  }else{
    next()
  }
})

export default router;