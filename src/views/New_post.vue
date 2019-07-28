<template>
    <v-container grid-list-lg>

            <v-app-bar app dark flat hide-on-scroll>  
                <v-btn icon :to="{name: 'home'}">
                <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-toolbar-title> Nuevo Post</v-toolbar-title>
                <v-spacer></v-spacer>
                    <v-img aspect-ratio="1" max-width="50" max-height="40" src="../assets/act.png"></v-img>
                <v-btn icon>
                    <v-icon>done</v-icon>
                </v-btn>
            </v-app-bar>  

        

        <v-layout wrap>
            <v-flex xs12>
                <v-card class="ml-4 mr-4" dense>
                    <v-form class="px-3">
                        <v-input>Enlace de la Oferta</v-input>
                        <v-text-field  color="oficial" placeholder="http://www.example.com" hint="Pega el enlace donde otros usuarios pueden conseguir más información o comprar la oferta directamente" persistent-hint>
                            <v-icon slot="prepend" >link</v-icon>
                        </v-text-field>
                    </v-form>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-card class="ml-4 mr-4" dense>
                    <v-form class="px-3">
                        <v-input >Detalles de la Oferta</v-input>
                        <v-text-field color="oficial" placeholder="http://www.example.com" hint="Pega el enlace donde otros usuarios pueden conseguir más información o comprar la oferta directamente" persistent-hint>
                            <v-icon slot="prepend" >link</v-icon>
                        </v-text-field> 
                        <v-text-field color="oficial" label="Título*" placeholder="Título*">
                            <v-icon slot="prepend" >sort</v-icon>
                        </v-text-field> 
                        <v-textarea color="oficial" label="Descripción*" placeholder="Descripción*" counter>
                            <v-icon slot="prepend" >description</v-icon>
                        </v-textarea> 
                    </v-form>
                </v-card>
            </v-flex>
            
        </v-layout>


    </v-container>
</template>

<script>
export default {
    
}
</script>

