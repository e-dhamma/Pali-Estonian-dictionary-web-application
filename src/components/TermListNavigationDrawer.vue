<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="drawer"
    fixed
    app
    width="200"
    class="brown lighten-5"
  >
    <v-list>
      <v-list-tile v-for="term in termList" :key="term.id">
        <v-list-tile-title>
          <router-link :to="'/terminid/' + term.slug" class="term-list-item">
            <span class="term-list-item">{{term.pali}}</span>
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
</style>
