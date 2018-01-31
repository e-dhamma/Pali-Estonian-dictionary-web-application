<template>
  <v-app>

    <!-- Toolbar -->
    <v-toolbar dense>
      <v-btn icon @click.stop='rightDrawer = !rightDrawer' class='hidden-sm-and-up'>
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title>
        <router-link to='/' tag='span' style='cursor: pointer'>Paali-Eesti sõnaraamat</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-xs-only'>

        <!-- Search -->
        <v-text-field hide-details single-line label="Otsi" v-model="searchInput"></v-text-field>
        <v-btn flat @click="searchTerm"><v-icon>search</v-icon></v-btn>

        <!-- <v-btn
        flat
        v-for='item in menueItems' :key='item.title'>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>         -->
      </v-toolbar-items>
    </v-toolbar>

    <!-- For small screen -->
    <!-- <v-navigation-drawer
      temporary
      v-model='rightDrawer'
      fixed>
      <v-list>
        <v-list-tile v-for='item in menueItems' :key='item.title'>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

    <!-- Snackbar for notifications -->
    <v-snackbar
      :timeout="3000"
      :top="true"
      v-model="snackbar"
    >
      {{ notification }}
      <v-btn flat color="pink" @click.native="snackbar = false">Sulge</v-btn>
    </v-snackbar>

  <!-- Main content -->
  <router-view></router-view>
  
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        // For snackbar
        snackbar: false,
        notification: '',
        // For search
        searchInput: '',
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
    created () {
      this.$store.dispatch('addTermList')
    },
    methods: {
      showNotification (notification) {
        this.notification = notification
        this.snackbar = true
      },
      searchTerm () {
        if (this.searchInput === '') { return null }
        const results = this.$store.getters.searchForTerm(this.searchInput)
        if (results.length === 0) {
          this.showNotification('Otsing ei andnud tulemusi.')
          return null
        } else if (results.length === 1) {
          this.$router.push({ name: 'Term', params: { slug: results[0].slug } })
          this.$store.dispatch('addTerm', results[0])
        } else if (results.length > 1) {
          this.$store.dispatch('addSearchResults', results)
          this.$router.push({ name: 'SearchResults' })
        } else {
          console.log('Something nasty')
        }
      }
    }
  }
</script>
