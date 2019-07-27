<template>
<div>
    <Barra_sup/>
    <vmenu/>
    <p>HOLA HOLA </p>
<p>HOLA HOLA </p>
<p>HOLA HOLA </p>
<p>HOLA HOLA </p>
<p>HOLA HOLA </p>
<p>HOLA HOLA </p>
<p>HOLA HOLA </p>
<p>Despues arreglo el boton add </p>
<Boton/> 
</div>
  
</template>

<script>
import Vmenu from '../components/Vmenu.vue'
import Boton  from '../components/Boton.vue'
import Barra_sup  from '../components/Barra_sup.vue'
export default {
    name: 'Home',
  components:{
    Barra_sup,
    Vmenu,
    Boton
  }
}
</script>
