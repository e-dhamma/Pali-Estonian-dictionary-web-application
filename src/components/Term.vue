<<template>
    <v-container>

        <!-- term metadata -->
        <v-layout>
            <v-flex>
                <h1><i><template v-for="(p,i) in term.pali">{{ p }}<template v-if="i < paliLength">, </template></template></i></h1>
                <p><template v-if="term.wordClass || term.gender">({{ term.wordClass }}, {{ term.gender }}) </template><i>hääldus</i> <v-icon>play_arrow</v-icon></p>
            </v-flex>
        </v-layout>

        <!-- term meanings -->
        <v-layout v-for='(meaning, i) in term.meanings' :key='i' class='mt-3'>
            <v-flex>
                <h3>{{ i + 1}}. <template v-for='est in meaning.est'>{{ est }}, </template>[{{ meaning.rootLang }} <i>{{ meaning.root }}</i> ({{ meaning.rootDescription}})]</h3>
                <p>eng <template v-for='e in meaning.eng'><i>{{ e }}</i>, </template></p>
                <p>{{ meaning.expl }}</p>
                <v-expansion-panel>
                    <v-expansion-panel-content>
                        <div slot="header">Täpsemalt</div>
                        <v-card>
                            <v-card-text class="grey lighten-4">
                                <p>{{ meaning.further }}</p>
                                <h4>Tõlkenäited:</h4>
                                <div>
                                    <p v-for='example in meaning.examples' :key='example.original'>
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
        <div v-for='(comment, i) in term.comments' :key='"c" + i' class='mt-2'>
            <p><b>{{ comment.author }}:</b> {{ comment.content}}<br>{{ comment.date | date }}</p>
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

        <!-- Translator's discussion-->
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
        </v-expansion-panel>

    </v-container>
</template>

<script>
import { TermCommentService } from '../services/index'
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
      return this.$store.getters.loadedTerm(this.slug)
    },
    formIsValid () {
      return this.name !== '' && this.email !== '' && this.message !== ''
    },
    paliLength () { return this.term.pali.length - 1 }
  },
  created () {
    this.service = new TermCommentService()
  },
  methods: {
    addComment () { // This method is perhaps not needed.
      const payload = {
        term: this.term.pali,
        comment: {
          author: this.author,
          email: this.email,
          content: this.content
        }
      }
      this.$store.dispatch('addComment', payload)

      const comment = {
        term: this.term.id,
        author: this.author,
        email: this.email,
        content: this.content
      }
      this.service.save(comment)
    }
  }
}
</script>


<style scoped>
.intro {
  font-size: 1.3em;
}
</style>
