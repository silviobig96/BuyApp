<template>
    <v-container grid-list-lg>
        <v-app-bar app dark flat shrink-on-scroll src="../assets/Post/laptop.png" >  
            
            <v-btn icon :to="{name: 'home'}">
            <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title> OFERTA</v-toolbar-title>
            <v-spacer></v-spacer>
                <v-img aspect-ratio="1" max-width="50" max-height="40" src="../assets/act.png"></v-img>
            <v-menu
            left
            bottom
            >
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                <v-icon>more_vert</v-icon>
                </v-btn>
            </template>

            <v-responsive>
                <v-list>
                    <v-list-item>
                    <v-list-item-title>Modificar Oferta</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-title>Eliminar Oferta</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-responsive>
            
            </v-menu>
        </v-app-bar>

        <v-layout wrap >
            <v-flex xs12>
                <v-card class="ml-4 mr-4" dense>
                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline"><h5>Laptop MSI</h5></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                            <v-list-item-title class="headline"><h6>silviobig96</h6> </v-list-item-title>
                            <v-list-item-subtitle>29 julio 4:41 p.m.</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-btn icon>
                                <v-icon>person_add</v-icon>
                            </v-btn>                            
                        </v-list-item>

                        <v-divider></v-divider>
                        
                        <v-list-item>
                           <v-btn block color="oficial" dark>
                                Ir a la Oferta
                                <v-icon right >launch</v-icon>
                            </v-btn>
                        </v-list-item>
                        <v-list-item >
                           <v-btn icon>
                                <v-icon>thumb_up</v-icon>
                                <span class="subheading mr-2">45</span>
                            </v-btn>
                            <v-btn icon>
                                <v-icon class="mr-1">question_answer</v-icon>
                                <span class="subheading mr-2">256</span>
                            </v-btn>
                            
                        </v-list-item>
                </v-card>
            </v-flex>
            
            <v-flex xs12>
                <v-card class="ml-4 mr-4" dense>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline"><h6>Descripción</h6></v-list-item-title>
                            En venta Laptop MSI GS-72QD en la pagina de Amazon estan en oferta por solo 699$
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                            Mostrar Datos
                            <template v-slot:actions>
                                <v-icon color="oficial">$vuetify.icons.expand</v-icon>
                            </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                            <v-input prepend-icon="local_offer" class="body-2">
                                <span>Publicado: 29 Jul 2019 4:41 p.m.</span>
                            </v-input>
                            <v-input prepend-icon="local_offer" class="body-2">
                                <span>Categorías: Electrónica</span>
                            </v-input>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-flex>

            <v-flex xs12>
                <v-card class="ml-4 mr-4" dense>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="subtitle-1"><v-icon class="mr-1">question_answer</v-icon><span>Comentarios 256</span></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                        <v-list-item three-line>
                            <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/82.jpg"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                            <v-list-item-title class="headline"><h6>camejo_lara</h6> </v-list-item-title>
                            <v-list-item-subtitle>2 horas</v-list-item-subtitle>
                            <span class="text-justify">Es una gran laptop, la verdad la mejor que he tenido, ademas que es hermosa y con una velocidad increible</span>
                            </v-list-item-content>
                           
                            <v-icon class="ml-1">thumb_up</v-icon> <span class="subheading">24</span>                     
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-list-item three-line>
                            <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/women/65.jpg"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                            <v-list-item-title class="headline"><h6>griselorosco</h6> </v-list-item-title>
                            <v-list-item-subtitle>2 horas</v-list-item-subtitle>
                            <span class="text-justify">LA MEJOR LAPTOP QUE HE TENIDO ❤❤😍</span>
                            </v-list-item-content>
                            
                            <v-icon class="ml-1">thumb_up</v-icon><span class="subheading">451</span>                     
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-list-item three-line>
                            <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/34.jpg"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                            <v-list-item-title class="headline"><h6>Lacra_40_01</h6> </v-list-item-title>
                            <v-list-item-subtitle>2 horas</v-list-item-subtitle>
                            <span class="text-justify">he tenido mejores🙄... y trae windows🤢... asco🤢</span>
                            </v-list-item-content>
                            
                            <v-icon class="ml-1">thumb_up</v-icon><span class="subheading">2</span>                     
                        </v-list-item>
                </v-card>
            </v-flex>
        </v-layout>

        <v-footer padless app height="50%">
            <v-text-field label="Comenta!" single-line solo append-icon="send" color="oficial"></v-text-field>
        </v-footer>

        
    </v-container>
</template>

<script>
export default {
    
}
</script>
