<<template>
    <v-container>

        <v-layout>
            <v-flex>
                <h1><i>{{ term.pali }}</i><v-icon>play_arrow</v-icon></h1>
            </v-flex>
        </v-layout>

        <v-layout v-for='(meaning, i) in term.meanings' :key='i' class='mt-3'>
            <v-flex>
                <h3>{{ i + 1}}. {{ meaning.est }} [skr <i>{{ meaning.root }}</i>]</h3>
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
        <div v-for='(comment, i) in term.comments' :key='i' class='mt-2'>
            <p><b>{{ comment.author }}:</b> {{ comment.content}}<br>{{ comment.date }}</p>
        </div>

        <v-expansion-panel>
            <v-expansion-panel-content>
                <div slot="header">Tõlkijate arutelu</div>
                <v-card>
                    <v-card-text>
                        <div v-for='(message, i) in term.translatorsChats' :key='i'>
                            <p><b>{{ message.author }}:</b> {{ message.content}}<br>{{ message.date }}</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>

    </v-container>
</template>

<script>
export default {
  props: ['pali'],
  computed: {
    term () {
      return this.$store.getters.loadedTerm(this.pali)
    }
  }
}
</script>


<style scoped>
.intro {
  font-size: 1.3em;
}
</style>
