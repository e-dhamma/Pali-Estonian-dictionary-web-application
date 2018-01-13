<template>
  <v-container>
    <p v-for="term in terms" :key="term.original"><a :href="'/terminid/' + term.pali">{{ term.pali }}</a></p>
  </v-container>
</template>

<script>
  export default {
    computed: {
      terms () {
        return this.$store.getters.loadedTerms
      }
    }
  }
</script>
