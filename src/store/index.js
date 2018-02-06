import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedTermList: [],
    loadedTerm: {},
    // loadedUsers: [
    //   {username: 'jüri'}
    // ],
    searchResults: []
  },
  mutations: {
    addTermList (state, termList) {
      state.loadedTermList = state.loadedTermList.concat(termList)
    },
    addTerm (state, term) {
      state.loadedTerm = term
    },
    addSearchResults (state, results) {
      state.searchResults = results
    },
    addComment (state, comment) {
      state.loadedTerm.comment_set.push(comment)
    }
  },
  actions: {
    addTermList ({commit}) {
      axios.get('http://127.0.0.1:8000/api/term-list/')
      .then((response) => {
        commit('addTermList', response.data)
      })
      .catch((error) => { console.log(error) })
    },
    addTerm ({commit}, slug) {
      axios.get('http://127.0.0.1:8000/api/single-term/' + slug + '/')
      .then((response) => {
        commit('addTerm', response.data)
      })
      .catch((error) => { console.log(error) })
    },
    addSearchResults ({commit}, results) {
      commit('addSearchResults', results)
    },
    addComment ({commit}, comment) {
      axios.post('http://127.0.0.1:8000/api/term-comment/', comment)
      comment.notApproved = true
      commit('addComment', comment)
    }
  },
  getters: {
    loadedTerm (state) { return state.loadedTerm },
    // loadedUsers (state) {
    //   return state.loadedUsers
    // },
    searchForTerm (state) {
      return searchInput => {
        var results = new Set()
        state.loadedTermList.map((term) => {
          if (term.pali.includes(searchInput)) { results.add(term) }
          term.meaning_set.map((meaning) => {
            if (meaning.est.includes(searchInput)) { results.add(term) }
            if (meaning.eng.includes(searchInput)) { results.add(term) }
          })
        })
        return Array.from(results)
      }
    },
    searchResults (state) {
      return state.searchResults
    },
    termList (state) {
      return state.loadedTermList
    }
  }
})
