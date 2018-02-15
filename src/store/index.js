import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { API_BASE_URL } from '../constants'

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
      axios.get(API_BASE_URL + '/term-list/')
      .then((response) => {
        commit('addTermList', response.data)
      })
      .catch((error) => { console.log(error) })
    },
    addTerm ({commit}, slug) {
      axios.get(API_BASE_URL + '/single-term/' + slug + '/')
      .then((response) => {
        commit('addTerm', response.data)
      })
      .catch((error) => { console.log(error) })
    },
    addSearchResults ({commit}, results) {
      commit('addSearchResults', results)
    },
    addComment ({commit}, comment) {
      axios.post(API_BASE_URL + '/term-comment/', comment)
      comment.preview = true
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
        state.loadedTermList.forEach((term) => {
          if (term.pali.toLowerCase().includes(searchInput.toLowerCase())) { results.add(term) }
          term.meaning_set.forEach((meaning) => {
            if (meaning.est.toLowerCase().includes(searchInput.toLowerCase())) { results.add(term) }
            if (meaning.eng.toLowerCase().includes(searchInput.toLowerCase())) { results.add(term) }
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
