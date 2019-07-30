

<template>
  <v-container>
    <v-layout>
      <v-app-bar app dark flat hide-on-scroll>
        <v-btn icon :to="{name: 'home'}">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>@Josephnyjs</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
    </v-layout>
    <v-layout justify-center align-center>
      <v-avatar size="80">
        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" />
      </v-avatar>
      <v-btn class="ma-5" outlined color="#69a286">Seguir</v-btn>
    </v-layout>
    <v-layout justify-center align-center-between class="mt-2">
      <v-flex class="text-center">
        <div>24</div>
        <div>POSTS</div>
      </v-flex>
      <v-flex class="text-center">
        <div>123</div>
        <div>SEGUIDOS</div>
      </v-flex>
      <v-flex class="text-center">
        <div>321</div>
        <div>SEGUIDORES</div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 mt-6>
        <v-card
          class="mx-auto ml-4 mr-4"
          color="rgba(191, 194, 191, 0.87)"
          :to="{name: 'Det_post'}"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                <span>Laptop MSI</span>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>
                <v-icon class="mr-1">schedule</v-icon>
                <span class="subheading">1h</span>
              </v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>

          <v-img src="../assets/Post/laptop.png"></v-img>

          <v-card-text>En venta Laptop MSI GS-72QD en la pagina de Amazon estan en oferta por solo 699$</v-card-text>

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
              <v-btn color="#69a286" x-small text>
                VER TU PRODUCTO
                <v-icon>launch</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  
};
</script>

 [Foto]
