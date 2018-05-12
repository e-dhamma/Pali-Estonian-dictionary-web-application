<template>
  <v-toolbar
  :clipped-left="$vuetify.breakpoint.lgAndUp"
  app
  fixed
  >
    <!-- For navigation drawer on small screens -->
    <!-- <v-btn icon @click.stop='rightDrawer = !rightDrawer' class='hidden-sm-and-up'>
      <v-icon>menu</v-icon>
    </v-btn> -->
    <v-toolbar-title class='hidden-xs-only'>
      <v-avatar>
        <img src="../../static/DharmaWheel.svg" alt="dhamma-wheel">
      </v-avatar>
      <router-link to='/' tag='span' style='cursor: pointer'>Paali-Eesti sõnaraamat</router-link>
    </v-toolbar-title>

      <!-- Spacer -->
      <div style="width: 85px;"></div>
      <!-- Search -->
      <v-text-field label="Otsi" v-model="searchInput" @keyup.enter.native="searchTerm" ></v-text-field>
      <v-btn icon @click="searchTerm" color="primary"><v-icon>search</v-icon></v-btn>
      <v-spacer></v-spacer>
      <!-- <v-btn
      flat
      v-for='item in menueItems' :key='item.title'>
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn> -->
  </v-toolbar>
</template>

<script>
import { bus } from '../main.js'
export default {
  created () {
    bus.$on('homepage', () => { console.log('homepage') })
  },
  data () {
    return {
      searchInput: ''
      // // For navigation drawer for small screen
      // rightDrawer: false,
      // // Toolbar buttons
      // menueItems: [
      //   { icon: 'toc', title: 'Rohkem', link: '' },
      //   { icon: 'notifications', title: 'Teavitused', link: '' },
      //   { icon: 'account_circle', title: 'Logi sisse', link: '' }
      // ]
    }
  },
  methods: {
    searchTerm () {
      if (this.searchInput === '') { return null }
      const results = this.$store.getters.searchForTerm(this.searchInput)
      if (results.length === 0) {
        bus.$emit('showNotification', 'Otsing ei andnud tulemusi.')
        return null
      } else if (results.length === 1) {
        this.$router.push({ name: 'Term', params: { slug: results[0].slug } })
      } else if (results.length > 1) {
        this.$store.dispatch('addSearchResults', results)
        this.$router.push({ name: 'SearchResults' })
      }
      this.searchInput = ''
    }
  }
}
</script>
