<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Kirjuta lehe haldajale</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
        name='name'
        label='Nimi'
        id='name'
        v-model="name"
        required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
        name='email'
        label='E-mail'
        id='email'
        v-model="email"
        required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
        name='message'
        label='Sõnum'
        id='message'
        v-model="message"
        required
        multi-line></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn :disabled='!formIsValid' @click="addLetterToAdmin">Saada</v-btn>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  computed: {
    formIsValid () {
      return this.name !== '' && this.email !== '' && this.message !== ''
    }
  },
  methods: {
    addLetterToAdmin () {
      const letter = {
        name: this.name,
        email: this.email,
        message: this.message,
        date: new Date()
      }
      this.$store.dispatch('addLetterToAdmin', letter)
      console.log(letter)
    }
  }
}
</script>

