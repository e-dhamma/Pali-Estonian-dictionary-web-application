import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedTerms: [
      {
        pali: 'buddha',
        meanings: [
          {
            est: 'virgunu',
            root: 'budh',
            eng: ['Buddha', 'Enlightened One', 'Awakened One'],
            expl:
              'Teadvuse kõrgeima võimaliku seisundini jõudnud isik, kelle meelest on kadunud kõik meeleplekid, kes on vabanenud sansaarast ja jõudnud nirvaaasse. (viide)',
            further:
              'D I.74 (sammā° õige, st (aasta-)ajale sobilik dušš; DA I.218=vuṭṭhi); II.15 (udakassa, vool, hoovus, voog); J I.31; Ps I.125 (udaka°); Pv II.970 (sammā°); VvA 4 (hingulika°); PvA 139; DhA IV.15 (assu°); Sdhp 595 (vassa°).',
            examples: [
              {
                original: 'buddhang saranang gacchami.',
                translation: 'Virgunu kaitse alla lähen.'
              }
            ]
          },
          {
            est: 'virgunu',
            root: 'budh',
            eng: ['Buddha', 'Enlightened One', 'Awakened One'],
            expl:
              'Teadvuse kõrgeima võimaliku seisundini jõudnud isik, kelle meelest on kadunud kõik meeleplekid, kes on vabanenud sansaarast ja jõudnud nirvaaasse. (viide)',
            further:
              'D I.74 (sammā° õige, st (aasta-)ajale sobilik dušš; DA I.218=vuṭṭhi); II.15 (udakassa, vool, hoovus, voog); J I.31; Ps I.125 (udaka°); Pv II.970 (sammā°); VvA 4 (hingulika°); PvA 139; DhA IV.15 (assu°); Sdhp 595 (vassa°).',
            examples: [
              {
                original: 'buddhang saranang gacchami.',
                translation: 'Virgunu kaitse alla lähen.'
              }
            ]
          }
        ],
        comments: [
          {
            author: 'Mari Kuuskemaa',
            date: '10.10.2017',
            content: 'Kas sõna valgustunu sobiks ka?'
          },
          {
            author: 'Juhan Kivilaid',
            date: '17.10.2017',
            content:
              'Täpselt samast tuvest tulenevat sõna kasutatakse ka argieeles unest üles ärkamise kohta.'
          }
        ],
        translatorsChats: [
          {
            author: 'Artur Ahta',
            date: '10.10.2017',
            content:
              'Sõna valgustunu ei sobi, sest sõnatüvi ei tulene sõnast valgus.'
          },
          {
            author: 'Joosep Jaik',
            date: '10.10.2017',
            content:
              'Kõige täpsem tõlge oleks ehk hoopis ärganu, aga see ei kõla eriti hästi.'
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    loadedTerm (state) {
      return termId => {
        return state.loadedTerms.find(term => {
          return term.id === termId
        })
      }
    }
  }
})
