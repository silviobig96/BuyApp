<template>

            <v-btn absolute dark fab fixed right bottom color="#4EE19D" :to="{name: ruta}">
                <v-icon>add</v-icon>
            </v-btn>
</template>

<script>

  export default {
      name: 'Boton',
      props: {
        ruta: {
            type: String,
            default: ''
        }
    }
    }
</script>