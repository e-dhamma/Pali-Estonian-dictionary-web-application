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
                <v-btn flat small fab @click.stop="meaning.showMore = !meaning.showMore"><v-icon>keyboard_arrow_down</v-icon></v-btn>
                <div>
                    <p>{{ meaning.further }}</p>
                    <p>examples</p>
                </div>
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meanings: [
            { est: "esimene tõlge", root: "skrskr", eng: 'in English', expl: 'Siin on selgitud', further: 'more info',examples: [['algtekst', 'tõlge'], ['teine algtekst', 'teine tõlge']], show: false },
            { est: "teine tõlge", root: "skrskr", eng: 'in English', expl: 'Siin on veel üks selgitus', further: 'even more info', show: false },

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
