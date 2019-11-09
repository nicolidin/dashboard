import Vue from 'vue'
import Vuex from 'vuex'
import redditStore from './redditStore'

Vue.use(Vuex)

const openWeatherStore = {
  state: {
  },
  mutations: {
  },
  actions: {
  },
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    redditStore: redditStore,
    openWeatherStore: openWeatherStore
  }
})

