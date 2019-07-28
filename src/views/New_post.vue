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

                        <!-- Subir foto y mostrar -->
                        
                        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                            <v-img  :src="imageUrl" alt="Subir una imagen" v-if="imageUrl"></v-img>
                           <!--  <img :src="imageUrl" height="150" v-if="imageUrl"/> -->
                            <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                            <input
                                type="file"
                                style="display: none"
                                ref="image"
                                accept="image/*"
                                @change="onFilePicked"
                            >
                        </v-flex>

                        <v-text-field color="oficial" label="Título*" placeholder="Título*">
                            <v-icon slot="prepend" >sort</v-icon>
                        </v-text-field> 
                        <v-textarea color="oficial" label="Descripción*" placeholder="Descripción*" counter>
                            <v-icon slot="prepend" >description</v-icon>
                        </v-textarea> 

                        <!-- Area de categoria -->

                        <v-flex xs12 >
                            <v-combobox v-model="select" color="oficial" :items="items" label="Categorias*" multiple chips hint="Debes Seleccionar al menos 1 categoria" persistent-hint clearable item-color="oficial">
                                <v-icon slot="prepend" >library_books</v-icon>
                            <template v-slot:selection="data">
                                <v-chip
                                :key="JSON.stringify(data.item)"
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                :disabled="data.disabled"
                                @click:close="data.parent.selectItem(data.item)"
                                >
                                <v-avatar
                                    class="accent white--text"
                                    left
                                    v-text="data.item.slice(0, 1).toUpperCase()"
                                    color="oficial"
                                ></v-avatar>
                                {{ data.item }}
                                </v-chip>
                            </template>
                            </v-combobox>
                        </v-flex>

                    </v-form>
                </v-card>
            </v-flex>
            
        </v-layout>


    </v-container>
</template>

<script>
export default {
  data: () => ({
        sheet: false,
        select: [],
        items: [
          'Electrónica',
          'Hogar',
          'Jardín',
          'Deportes',
          'Ropa',
          'Zapatos'
        ],
        title: "Image Upload",
        dialog: false,
		imageName: '',
		imageUrl: '',
		imageFile: ''
    }),    
    methods: {
        pickFile () {
            this.$refs.image.click ()
        },
		
		onFilePicked (e) {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
					this.imageFile = files[0] // this is an image file that can be sent to server...
				})
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
        }
    }
}
</script>

