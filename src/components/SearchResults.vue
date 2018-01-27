<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h2>Sinu otsingusõnaga andis mitu vastet</h2>
      </v-flex>
    </v-layout>
    <v-flex>{{ results }}</v-flex>
    <v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      results: this.results
    }
  },
}
</script>
