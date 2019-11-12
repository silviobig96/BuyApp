import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

//para gestionar el JWT que se obtiene cuando un usuario se loguea
import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    usuarioDB: ''
  },
  mutations: {
    // el payload es la parte del token donde estan los datos
    obtener_usuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.usuarioDB = ''
      }else{
        state.usuarioDB = decode(payload);
        router.push({name: 'home'})
      }
    }
  },
  actions: {
    guardar_usuario({commit}, payload){
      localStorage.setItem('token',payload);
      commit('obtener_usuario', payload)
    },
    cerrar_sesion({commit}){
      console.log('Cerrando Sesion...');
      commit('obtener_usuario','');
      localStorage.removeItem('token');
      router.push({name:'Iniciarsesion'});
    },
    leer_token ({commit}){
      const token = localStorage.getItem('token');
      if (token){
        commit('obtener_usuario', token);
      }else{
        commit('obtener_usuario', '');
      }
    }
  },
  getters: {
    usuario_activo: state => !!state.token
  }
})
