<<template>
    <v-container>

        <v-layout>
            <v-flex>
                <h1><i>Pali</i><v-icon>play_arrow</v-icon></h1>
            </v-flex>
        </v-layout>

        <v-layout v-for='(meaning, i) in meanings' class='mt-3'>
            <v-flex>
                <h3>{{ i + 1}}. {{ meaning.est }} [skr <i>{{ meaning.root }}</i>]</h3>
                <p><i>{{ meaning.eng }}</i></p>
                <p>{{ meaning.expl }}</p>
                <v-expansion-panel>
                    <v-expansion-panel-content>
                        <div slot="header">Täpsemalt</div>
                        <v-card>
                            <v-card-text class="grey lighten-4">
                                <p>{{ meaning.further }}</p>
                                <h4>Tõlkenäited:</h4>
                                <div>
                                    <p v-for='example in meaning.examples'>
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
        <div v-for='(comment, i) in comments' :key='i' class='mt-2'>
            <b>{{ comment.author }}:</b> {{ comment.content}}<br>{{ comment.date }}
            </div>

        </div>
    </v-container>
</template>

<script>
  export default {
    data () {
        return {
            meanings: [
                { est: "esimene tõlge", root: "skrskr", eng: 'in English', expl: 'Siin on selgitud', further: 'more info', examples: [{ original: 'in pali', translation: 'eestikeelne tõlge'}, { original: 'more in pali', translation: 'veel üks eestikeelne tõlge' } ] },
                { est: "teine tõlge", root: "skrskr", eng: 'in English', expl: 'Siin on veel üks selgitus', further: 'even more info' },
            ],
            comments: [
                {author: 'Mari', date: '10.10.2017', content: 'Siin on kommentar.' },
                {author: 'Juhan', date: '17.10.2017', content: 'Siin on teine kommentar.' }
            ]     
        }
    }
  }
</script>


<style scoped>
    .intro {
        font-size: 1.3em;
    }
</style>
