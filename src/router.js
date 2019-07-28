import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ver_perfil from './views/Ver_perfil'
import Acerca_de from './views/Acercade'
import Sugerencia from './views/Sugerencia'
import Que_hay_denuevo from './views/Nuevo'
import Ajustes from './views/Ajustes'
import New_post from './views/New_post'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Ver_perfil',
      name: 'Ver_perfil',
      component: Ver_perfil
    },
    {
      path: '/Acercade',
      name: 'Acercade',
      component: Acerca_de
    },
    {
      path: '/Sugerencia',
      name: 'Sugerencia',
      component: Sugerencia
    },
    {
      path: '/Que_hay_denuevo',
      name: 'Que_hay_denuevo',
      component: Que_hay_denuevo
    },
    {
      path: '/Ajustes',
      name: 'Ajustes',
      component: Ajustes
    },
    {
      path: '/Acerca_de',
      name: 'Acerca_de',
      component: Acerca_de
    },  
    {
      path: '/New_post',
      name: 'New_post',
      component: New_post
    },  
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
