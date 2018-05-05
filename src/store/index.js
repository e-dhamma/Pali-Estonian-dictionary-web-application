import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedTermList: [],
    // loadedUsers: [
    //   {username: 'jüri'}
    // ],
    searchResults: []
  },
  mutations: {
    addTermList (state, termList) {
      state.loadedTermList = state.loadedTermList.concat(termList)
    },
    addSearchResults (state, results) {
      state.searchResults = results
    }
  },
  actions: {
    addTermList ({commit}) {
      API.getTermList()
      .then((response) => {
        commit('addTermList', response.data)
      })
      .catch((error) => { console.log(error) })
    },
    addSearchResults ({commit}, results) {
      commit('addSearchResults', results)
    }
  },
  getters: {
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
