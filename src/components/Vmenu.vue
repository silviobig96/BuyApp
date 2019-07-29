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
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/men/85.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>Laptop MSI</span></v-list-item-title>
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

                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/women/82.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>Mustang GT</span></v-list-item-title>
                                <v-list-item-subtitle>Por griselorosco</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">14h</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                            </v-list-item>
                            <v-img
                              src="../assets/Post/carro.jpg"
                              
                            ></v-img>
                            <v-card-text>
                              Se vende 2019 Ford Mustang EcoBoost, directo de oferta en la pagina Tucarro.com, haz click en el enlace 😊
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">1420</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">530</span>
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

                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/women/85.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>Plancha de cabello Rucha</span></v-list-item-title>
                                <v-list-item-subtitle>Por gabyabc</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">1d</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                                  

                            </v-list-item>

                            <v-img
                              src="../assets/Post/plancha.jpg"
                              
                            ></v-img>

                            <v-card-text>
                              Oferta en Amazon!, plancha marcha Rucha en 10$ CORRAN 🏃‍♀️🏃‍♀️
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">16</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">10</span>
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

                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/women/62.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>Estuche para iPhone</span></v-list-item-title>
                                <v-list-item-subtitle>Por maria_33</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">5d</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                            </v-list-item>
                            <v-img
                              src="../assets/Post/estuche.jpg"
                              
                            ></v-img>
                            <v-card-text>
                              Estuche para iPhone en 1 dolar!
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">325</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">450</span>
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

                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/women/43.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>Silla pew die pie!</span></v-list-item-title>
                                <v-list-item-subtitle>Por mabe_35</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">5d</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                                  

                            </v-list-item>

                            <v-img
                              src="../assets/Post/silla.png"
                              
                            ></v-img>

                            <v-card-text>
                              Silla Pew Die Pie POR SOLO 399.99$ !!!!!!!!!!!!!!!!! APROVECHEN SOLO POR ESTE MES CLICK EN EL LINK YA!
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">16</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">10</span>
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

                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/women/15.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>Libro de calculo</span></v-list-item-title>
                                <v-list-item-subtitle>Por josephnys_j</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">1 mes</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                            </v-list-item>
                            <v-img
                              src="../assets/Post/libro.jpg"
                              
                            ></v-img>
                            <v-card-text>
                              Jorge Saenz Rematando sus libros! corran ya universitarios!
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">3000</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">5027</span>
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

                        <v-flex xs12>
                          <v-card
                            class="mx-auto ml-4 mr-4"
                          >
                            <v-list-item>
                              <v-list-item-avatar color="grey"><img src="https://randomuser.me/api/portraits/women/69.jpg" high="20px" width="20px"></v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title class="headline"><span>PlayStation 4 PRO</span></v-list-item-title>
                                <v-list-item-subtitle>Por abc_3-1-2</v-list-item-subtitle>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-list-item-action-text>
                                  <v-icon class="mr-1">schedule</v-icon>
                                  <span class="subheading">1 mes</span>
                                </v-list-item-action-text> 
                              </v-list-item-action>
                                  

                            </v-list-item>

                            <v-img
                              src="../assets/Post/ps4.jpg"
                              
                            ></v-img>

                            <v-card-text>
                              El Ps4 Edicion Assassins Creed Syndicate se esta sorteando en la pagina dejada en el link de la oferta! aprovecha y participa, no pierdas esta increible oportunidad 😍
                            </v-card-text>

                            <v-layout align-center justify-end>
                              <v-flex xs6>
                                  <v-card-actions>
                                    <v-list-item class="grow">
                                        <v-icon class="mr-1">question_answer</v-icon>
                                        <span class="subheading mr-2">30k</span>
                                        <v-icon class="mr-1">thumb_up</v-icon>
                                        <span class="subheading">50k</span>
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