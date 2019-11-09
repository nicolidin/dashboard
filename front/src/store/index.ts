import Vue from 'vue'
import Vuex from 'vuex'
import RedditLatestSubreditPostNames from '@/models/reddit/latestSubreditPostNamesModel'
Vue.use(Vuex)

const redditStore = {
  namespaced: true,
  state: {
    latestSubreditPostNames: RedditLatestSubreditPostNames,
  },
  mutations: {
    setLatestSubreditPostNames(state: any, newVal: RedditLatestSubreditPostNames) {
      state.latestSubreditPostNames = newVal;
    }
  },
  actions: {
    getLatestSubreditPostNames(context: any, latestSubreditPostNames: RedditLatestSubreditPostNames) {
      //context.commit("setLatestSubreditPostNames", latestSubreditPostNames);
      if (context.state.latestSubreditPostNames instanceof RedditLatestSubreditPostNames) {
        console.log("tchoinnnnnn");
      } else {
        console.log("grosse pute");
      }
    }
  },
}

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

