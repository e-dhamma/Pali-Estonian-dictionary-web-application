<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="drawer"
    fixed
    app
    width="200"
    class="brown lighten-5"
  >
    <v-btn @click="testScroll()">Scroll</v-btn>
    <v-list ref="termListNavigationDrawer">
      <v-list-tile><v-list-tile-title>fooooooooooooooooooooooooooooo</v-list-tile-title> </v-list-tile>
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
      <v-list-tile v-for="term in termList" :key="term.id" :id="term.slug">
        <v-list-tile-title :id="term.slug">
          <router-link :to="'/terminid/' + term.slug" class="term-list-item">
            <span class="term-list-item" :id="term.slug">{{term.pali}}</span>
          </router-link>
        </v-list-tile-title>
      </v-list-tile>
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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { bus } from '../main.js'
  export default {
    data () {
      return {
        drawer: null,
        slug: ''
      }
    },
    created () {
      this.$store.dispatch('addTermList').then(() => { this.autoScrollToViewedTerm(this.slug) })
      bus.$on('termChange', (slug) => {
        this.slug = slug
        this.autoScrollToViewedTerm(this.slug)
      })
    },
    methods: {
      testScroll () { this.autoScrollToViewedTerm(this.slug) },
      autoScrollToViewedTerm (slug) {
        const selectedElement = document.getElementById(slug)
        this.removeHighlightFromPreviousTerm()
        if (!selectedElement) {
          return
        }
        this.highlightSelectedElement(selectedElement)
        const nDrawer = document.querySelector('#app > div > aside')
        console.log(nDrawer.clientHeight)
        nDrawer.scrollTop = selectedElement.offsetTop - (nDrawer.clientHeight / 2 - selectedElement.clientHeight / 2)
      },
      removeHighlightFromPreviousTerm () {
        const previousTerm = document.getElementsByClassName('selected-term')[0] // perhaps 'selected-term' should be an id, not class
        if (previousTerm) {
          previousTerm.classList.remove('selected-term')
        }
      },
      highlightSelectedElement (selectedElement) {
        selectedElement.classList.add('selected-term') // add if block currently on line 67
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

<style>
.selected-term div a span{
  color: navy  !important;
  font-weight: 900;
}
</style>

