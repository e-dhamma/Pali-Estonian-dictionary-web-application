<template>
  <v-container>
  <v-layout>
    <v-flex>
      {{ user }}
    </v-flex>
  </v-layout>
  </v-container>
</template>

<<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    user () {
      console.log(this.$store.getters.loadedUsers, 'yes')
      return this.$store.getters.loadedUsers
    }
  }
}
</script>

