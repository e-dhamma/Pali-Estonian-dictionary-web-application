<<template>
    <v-container>

        <v-layout>
            <v-flex>
                <h1><i>{{ term.pali }}</i><v-icon>play_arrow</v-icon></h1>
            </v-flex>
        </v-layout>

        <v-layout v-for='(meaning, i) in term.meanings' class='mt-3'>
            <v-flex>
                <h3>{{ i + 1}}. {{ meaning.est }} [skr <i>{{ meaning.root }}</i>]</h3>
                <p><template v-for='e in meaning.eng'><i>{{ e }}</i>, </template></p>
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
  data() {
    return {
      term: {
        pali: "buddha",
        meanings: [
          {
            est: "virgunu",
            root: "budh",
            eng: ["Buddha", "Enlightened One", "Awakened One"],
            expl: "Teadvuse kõrgeima võimaliku seisundini jõudnud isik, kelle meelest on kadunud kõik meeleplekid, kes on vabanenud sansaarast ja jõudnud nirvaaasse. (viide)",
            further: "D I.74 (sammā° õige, st (aasta-)ajale sobilik dušš; DA I.218=vuṭṭhi); II.15 (udakassa, vool, hoovus, voog); J I.31; Ps I.125 (udaka°); Pv II.970 (sammā°); VvA 4 (hingulika°); PvA 139; DhA IV.15 (assu°); Sdhp 595 (vassa°).",
            examples: [
              { original: "buddhang saranang gacchami.", translation: "Virgunu kaitse alla lähen." },
            ]
          },
          {
            est: "virgunu",
            root: "budh",
            eng: ["Buddha", "Enlightened One", "Awakened One"],
            expl: "Teadvuse kõrgeima võimaliku seisundini jõudnud isik, kelle meelest on kadunud kõik meeleplekid, kes on vabanenud sansaarast ja jõudnud nirvaaasse. (viide)",
            further: "D I.74 (sammā° õige, st (aasta-)ajale sobilik dušš; DA I.218=vuṭṭhi); II.15 (udakassa, vool, hoovus, voog); J I.31; Ps I.125 (udaka°); Pv II.970 (sammā°); VvA 4 (hingulika°); PvA 139; DhA IV.15 (assu°); Sdhp 595 (vassa°).",
            examples: [
              { original: "buddhang saranang gacchami.", translation: "Virgunu kaitse alla lähen." },
            ]
          },
        ],
        comments: [
          { author: "Mari Kuuskemaa", date: "10.10.2017", content: "Kas sõna 'valgustunu' sobiks ka?" },
          {
            author: "Juhan Kivilaid",
            date: "17.10.2017",
            content: "Täpselt samast tuvest tulenevat sõna kasutatakse ka argieeles unest üles ärkamise kohta."
          }
        ],
        translatorsChats: [
          {
            author: "Artur Ahta",
            date: "10.10.2017",
            content: "Sõna 'valgustunu' ei sobi, sest sõnatüvi ei tulene sõnast 'valgus'."
          },
          {
            author: "Joosep Jaik",
            date: "10.10.2017",
            content: "Kõige täpsem tõlge oleks ehk hoopis 'ärganu', aga see ei kõla eriti hästi."
          }
        ]
      }
    };
  }
};
</script>


<style scoped>
.intro {
  font-size: 1.3em;
}
</style>
