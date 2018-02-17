<template>
    <v-container>

        <!-- term metadata -->
        <v-layout>
            <v-flex>
                <h1><i>{{ term.pali }}</i></h1>
                <p><template v-if="term.wordClass || term.gender">({{ term.wordClass }}, {{ term.gender }}) </template><!--<i>hääldus</i> <v-icon>play_arrow</v-icon>--></p>
            </v-flex>
        </v-layout>

        <!-- term meanings -->
        <v-layout v-for='(meaning, i) in term.meaning_set' :key='i' class='mt-3'>
            <v-flex>
                <h3>{{ i + 1}}. {{ meaning.est }} [{{ meaning.rootLang }} <i>{{ meaning.root }}</i> ({{ meaning.rootDescription}})]</h3>
                <p>eng {{ meaning.eng }}</p>
                <p>{{ meaning.expl }}</p>
                <v-expansion-panel>
                    <v-expansion-panel-content>
                        <div slot="header">Täpsemalt</div>
                        <v-card>
                            <v-card-text class="grey lighten-4">
                                <p>{{ meaning.further }}</p>
                                <h4>Tõlkenäited:</h4>
                                <div>
                                    <p v-for='example in meaning.example_set' :key='example.original'>
                                        <i>{{ example.original }}</i><br>
                                        {{ example.translation }}
                                    </p>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>
        <hr class='mt-4'>

        <!-- Comments-->
        <div v-for='(comment, i) in term.comment_set' :key='"c" + i' v-if="comment.approved == true || comment.preview" class='mt-2'>
          <p><b>{{ comment.author }}:</b> {{ comment.content}}<br>{{ comment.timestamp | date }}</p>
        </div>

        <!-- Add comment form-->
        <hr>
        <v-layout mt-3><v-flex><h3>Lisa uus kommentar</h3></v-flex></v-layout>
        <v-layout row>
          <v-flex xs12 sm4>
            <v-text-field
              name="name"
              label="Nimi"
              id='name'
              v-model='author'
              required
            ></v-text-field>                
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field
              name="email"
              label="E-mail (ei kuvata avalikult)"
              id='email'
              v-model='email'
              required
            ></v-text-field>                
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-text-field
              name="message"
              label="Sõnum"
              id='message'
              v-model='content'
              required
              multi-line
            ></v-text-field>                
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-btn :disabled='!formIsValid' @click.native='addComment' >Lisa kommentaar</v-btn>
          </v-flex>
        </v-layout>

        <!-- Translator's discussion
        <v-expansion-panel>
            <v-expansion-panel-content>
                <div slot="header">Tõlkijate arutelu</div>
                <v-card>
                    <v-card-text>
                        <div v-for='(message, i) in term.translatorsChats' :key='"t" + i'>
                            <p><b>{{ message.author }}:</b> {{ message.content}}<br>{{ message.date }}</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel> -->

    </v-container>
</template>

<script>
export default {
  data () {
    return {
      author: '',
      email: '',
      content: ''
    }
  },
  props: ['slug'],
  computed: {
    term () {
      return this.$store.getters.loadedTerm
    },
    formIsValid () {
      return this.name !== '' && this.email !== '' && this.message !== ''
    }
  },
  created () {
    this.$store.dispatch('addTerm', this.slug)
  },
  methods: {
    addComment () {
      const comment = {
        term: this.term.id,
        author: this.author,
        email: this.email,
        content: this.content,
        timestamp: new Date()

      }
      this.$store.dispatch('addComment', comment)
      this.author = ''
      this.email = ''
      this.content = ''
    }
  }
}
</script>