<template>
  <v-app id="inspire">
      <v-system-bar
      dark
      color="primary"
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>
        <div> 
            <content-music/>
            <content-music-2/>
            <content-music-3/>
        </div>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>QUEM SOMOS</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>HISTORIA</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>PESQUISA</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
    
    <footer-componet/>
    <footer-componet-botton-nav/>
  </v-app>
</template>

<script>
import FooterComponet from "../components/FooterCoponets.vue"
import FooterComponetBottonNav from "../components/FootercoponentsBottonNav.vue"
import contentMusic from "../components/contentMuisic.vue"
import contentMusic2 from "../components/contentMusic2.vue"
import contentMusic3 from "../components/contentMusic3.vue"

  export default {
      components: {FooterComponet, FooterComponetBottonNav, contentMusic, contentMusic2, contentMusic3},
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>>
