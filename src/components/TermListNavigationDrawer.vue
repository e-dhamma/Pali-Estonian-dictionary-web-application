<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="drawer"
    fixed
    app
    width="200"
    class="brown lighten-5"
  >
    <v-list ref="termListNavigationDrawer">
      <!-- <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile>
      <v-list-tile><v-list-tile-title>foo</v-list-tile-title> </v-list-tile> -->
      <v-list-tile v-for="term in termList" :key="term.id" :id="term.slug">
        <v-list-tile-title :id="term.slug">
          <router-link :to="'/terminid/' + term.slug" class="term-list-item">
            <span class="term-list-item" :id="term.slug">{{term.pali}}</span>
          </router-link>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null
      }
    },
    created () {
      this.$store.dispatch('addTermList')
    },
    updated () {
      this.autoScrollToViewedTerm('buddha')
    },
    methods: {
      autoScrollToViewedTerm (slug) {
        const selectedElement = document.getElementById(slug)
        if (!selectedElement) {
          return
        }
        const toolbarHeight = 64
        this.$refs.termListNavigationDrawer.$el.scrollTop = 445
        console.log(selectedElement)
        console.log(this.$refs['termListNavigationDrawer'].$el);
      }
    },
    computed: {
      termList () {
        return this.$store.getters.termList
      }
    }

  }
</script>

<style scoped>
.term-list-item {
  color: #cd5a07;
  text-decoration: none
}
::-webkit-scrollbar {
    display: none;
}
</style>
