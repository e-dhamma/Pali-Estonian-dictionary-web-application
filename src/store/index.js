import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedTermList: [],
    loadedTerm: {},
    loadedLettersToAdmin: [],
    loadedUsers: [
      {username: 'jüri'}
    ],
    searchResults: []
  },
  mutations: {
    addLetterToAdmin (state, letter) {
      state.loadedLettersToAdmin.push(letter)
    },
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
  actions: { // Why are there no colons aftre fnction names?
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
    addLetterToAdmin ({commit}, letter) {
      commit('addLetterToAdmin', letter)
    },
    addComment ({commit}, comment) {
      axios.post('http://127.0.0.1:8000/api/term-comment/', comment)
      comment.notApproved = true
      commit('addComment', comment)
    }
  },
  getters: {
    loadedTerm (state) { return state.loadedTerm },
    loadedTerms (state) {
      return state.loadedTerms
    },
    loadedUsers (state) {
      return state.loadedUsers
    },
    searchForTerm (state) { // Right now not working, because term-list API returns data in wrong format.
      return searchInput => { // No completely sure, why it works
        var results = []
        state.loadedTermList.find((term) => {
          if (term.pali.includes(searchInput)) { results.push(term) }
          for (let i = 0; i < term.meaning_set.length; i++) {
            if (term.meaning_set[i].est.includes(searchInput)) { results.push(term) }
            if (term.meaning_set[i].eng.includes(searchInput)) { results.push(term) }
          }
        })
        return results
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
