<<template>
    <v-container>

        <v-layout>
            <v-flex class='mb-3'>
                <h1>Pali <v-icon>play_arrow</v-icon></h1>
            </v-flex>
        </v-layout>

        <v-layout v-for='meaning in meanings'>
            <v-flex>
                <h3>{{ meaning.est }} [skr {{ meaning.root }}]</h3>
                <p><i>{{ meaning.eng }}</i></p>
                <p>{{ meaning.expl }}</p>
                <v-expansion-panel>
                    <v-expansion-panel-content>
                        <div slot="header">Täpsemalt</div>
                        <v-card>
                            <v-card-text class="grey lighten-4">
                                {{ meaning.further }}
                                <div>{{ meaning.examples }}</div>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meanings: [
            { est: "esimene tõlge", root: "skrskr", eng: 'in English', expl: 'Siin on selgitud', further: 'more info', examples: 'fgh' },
            { est: "teine tõlge", root: "skrskr", eng: 'in English', expl: 'Siin on veel üks selgitus', further: 'even more info' },

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
