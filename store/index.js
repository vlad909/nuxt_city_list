import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    all_cities: []
  },
  mutations: {
    setAll(state, payload) {
      state.all_cities = payload
    },
    addCity(state, payload) {
      state.all_cities.push(payload)
    },
    deleteCity(state, index) {
      state.all_cities.splice(index, 1)
    }
  }
})

export default store

