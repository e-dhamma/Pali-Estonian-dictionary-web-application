import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedTermList: [
      {
        id: 1,
        pali: ['buddha', 'sugatha', 'tatagatha'],
        slug: 'buddha',
        est: ['virgunu', 'valgustunu']
      },
      {
        id: 2,
        pali: ['dhamma', 'dharma'],
        slug: 'dhamma',
        est: ['opetus', 'seadmus']
      },
      {
        id: 3,
        pali: ['sangha', 'sanghaaa'],
        slug: 'sangha',
        est: ['kogudus', 'vennaskond']
      }
    ],
    loadedTerms: [
      {
        id: 1,
        pali: ['buddha', 'sugatha', 'tatagatha'],
        slug: 'buddha',
        gender: 'm', // n, m, k
        wordClass: 'nimis', // nimis, määrs, omds, tegs
        meanings: [
          {
            est: ['virgunu', 'ärganu'],
            root: 'budh',
            rootLang: 'skr', // 'skr' or 'pl'
            rootDescription: 'üles ärkama, unest virguma',
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
            date: new Date(), // must change name to timestamp
            content: 'Kas sõna valgustunu sobiks ka?'
          },
          {
            author: 'Juhan Kivilaid',
            date: new Date(),
            content:
              'Täpselt samast tuvest tulenevat sõna kasutatakse ka argieeles unest üles ärkamise kohta.'
          }
        ],
        translatorsChats: [
          {
            author: 'Artur Ahta',
            date: new Date(), // must change name to timestamp
            content:
              'Sõna valgustunu ei sobi, sest sõnatüvi ei tulene sõnast valgus.'
          },
          {
            author: 'Joosep Jaik',
            date: new Date(),
            content:
              'Kõige täpsem tõlge oleks ehk hoopis ärganu, aga see ei kõla eriti hästi.'
          }
        ]
      }
    ],
    loadedLettersToAdmin: [
      { name: 'Juhan Jurmas', email: 'juhan@gmail.com', message: 'See on kasulik rakendus! :)', time: '2018-01-05' }
    ],
    loadedUsers: [
      {username: 'jüri'}
    ]
  },
  mutations: {
    addComment (state, payload) {
      state.loadedTerms.find(function (term) { return term.pali === payload.term }).comments.push(payload.comment)
    },
    addLetterToAdmin (state, letter) {
      state.loadedLettersToAdmin.push(letter)
    },
    addTermList (state, termList) {
      state.loadedTermList = state.loadedTermList.concat(termList)
      console.log(state.loadedTermList)
    }

  },
  actions: {
    addComment ({commit}, payload) {
      commit('addComment', payload)
    },
    addLetterToAdmin ({commit}, letter) {
      commit('addLetterToAdmin', letter)
    },
    addTermList ({commit}, termList) {
      console.log('action executed')
      commit('addTermList', termList)
    }
  },
  getters: {
    loadedTerm (state) {
      return termSlug => {
        return state.loadedTerms.find((term) => {
          return term.slug === termSlug
        })
      }
    },
    loadedTerms (state) {
      return state.loadedTerms
    },
    loadedUsers (state) {
      return state.loadedUsers
    },
    searchForTerm (state) { // Right now not working, because term-list API returns data in wrong format.
      return searchInput => { // No completely sure, why it works
        const theTerm = state.loadedTermList.find((term) => {
          for (let i = 0; i < term.pali.length; i++) {
            if (term.pali[i] === searchInput) { return term }
          }
          for (let j = 0; j < term.est.length; j++) {
            if (term.est[j] === searchInput) { return term }
          }
          for (let k = 0; k < term.slug.length; k++) {
            if (term.slug[k] === searchInput) { return term }
          }
        })
        if (theTerm === undefined) { return undefined }
        return theTerm.slug
      }
    }
  }
})
