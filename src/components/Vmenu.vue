<template v-slot:extension>
<div>

    <v-tabs
        slot="extension"
        v-model="tabs"
        dark
        centered
        color="oficial"
      >
        <v-tab>NUEVOS</v-tab>
        <v-tab>DESTACADOS</v-tab>
        <v-tab>POPULARES</v-tab>
      </v-tabs>
            <v-tabs-items v-model="tabs">
                  <v-tab-item>
                    <v-container grid-list-md text-justify > 
                      <v-layout wrap >
                        
                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                            :to="{name: 'Det_post'}"
                          >
                            <v-list-item>
                              <v-list-item-avatar  color="grey"><img src="https://randomuser.me/api/portraits/men/85.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span >Laptop MSI</span></v-list-item-title>
                                <v-list-item-subtitle>Por silviobig96</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">1h</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                                  

                            </v-list-item>

                            <v-img
                              src="../assets/Post/laptop.png"
                              
                            ></v-img>

                            <v-card-text>
                              En venta Laptop MSI GS-72QD en la pagina de Amazon estan en oferta por solo 699$
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">256</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">45</span>
                                    </v-list-item>
                                  </v-card-actions>
                              </v-flex>
                              <v-flex xs12>
                                <v-btn color="oficial" x-small text>
                                  Ir a la Oferta
                                  <v-icon>launch</v-icon>
                                </v-btn>
                              </v-flex>
                            </v-layout>
                          </v-card>
                        </v-flex>

                      </v-layout>
                    </v-container>
                  </v-tab-item>
                  <!-- primero -->
                  <v-tab-item>
                    <v-container grid-list-md text-justify > 
                      <v-layout wrap >
                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/men/35.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>Aspiradora</span></v-list-item-title>
                                <v-list-item-subtitle>Por marcomusica</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">3d</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                                  

                            </v-list-item>

                            <v-img
                              src="../assets/Post/aspiradora.jpg"
                              
                            ></v-img>

                            <v-card-text>
                              Solo por 1 semana! la aspiradora 2x1 marca acme! estara disponible en Amazon!✨
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">600</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">65</span>
                                    </v-list-item>
                                  </v-card-actions>
                              </v-flex>
                              <v-flex xs12>
                                <v-btn color="oficial" x-small text>
                                  Ir a la Oferta
                                  <v-icon>launch</v-icon>
                                </v-btn>
                              </v-flex>
                            </v-layout>
                          </v-card>
                        </v-flex>

                      </v-layout>
                    </v-container>
                  </v-tab-item>
                  <!-- segundo -->
                  <v-tab-item>
                    <v-container grid-list-md text-justify > 
                      <v-layout wrap >
                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/men/85.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>iPhone XS</span></v-list-item-title>
                                <v-list-item-subtitle>Por silviobig96</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">2 Sem</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                                  

                            </v-list-item>

                            <v-img
                              src="../assets/Post/iphone.jpg"
                              
                            ></v-img>

                            <v-card-text>
                              Apple ha bajado los precios de sus iPhones xs Aprovechalo ya en su pagina! 📱📱
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">10k</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">9500</span>
                                    </v-list-item>
                                  </v-card-actions>
                              </v-flex>
                              <v-flex xs12>
                                <v-btn color="oficial" x-small text>
                                  Ir a la Oferta
                                  <v-icon>launch</v-icon>
                                </v-btn>
                              </v-flex>
                            </v-layout>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-tab-item>
                  <!-- tercero -->
                </v-tabs-items>
  </div>
      </template>


<script>

  export default {
      name: 'Vmenu',
      data () {
      return {
        show: true,
        tabs: null,
      }
    },

    }
</script>