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
        <v-text-field hide-details single-line label="Otsi" v-model="searchInput"></v-text-field>
        <v-btn flat @click="searchTerm"><v-icon>search</v-icon></v-btn>
        <v-btn
        flat
        v-for='item in menueItems' :key='item.title'>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>        
      </v-toolbar-items>
    </v-toolbar>

    <!-- For small screen -->
    <v-navigation-drawer
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
    </v-navigation-drawer>

  <router-view></router-view>
  
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        searchInput: '',
        rightDrawer: false,
        menueItems: [
          { icon: 'search', title: 'Otsi', link: '' },
          { icon: 'toc', title: 'Rohkem', link: '' },
          { icon: 'notifications', title: 'Teavitused', link: '' },
          { icon: 'account_circle', title: 'Logi sisse', link: '' }
        ]
      }
    },
    methods: {
      searchTerm () {
        if (this.searchInput === '') { return null }
        const termSlug = this.$store.getters.searchForTerm(this.searchInput)
        if (termSlug === undefined) { return null } // Error message here
        this.$router.push({ name: 'Term', params: { slug: termSlug }})
      }
    }
  }
</script>
