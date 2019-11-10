import Vue from 'vue'
import Vuex from 'vuex'
import redditStore, { StateRedditSubscription } from './redditStore'
import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex"

Vue.use(Vuex)

class State {
  accessToken!: String;
  clientId!: String;
  subscriptionsNames: Array<string> = [];
}

const mutations = <MutationTree<State>>{
  setSubscriptionsNames(store, subNames: Array<string>) {
    store.subscriptionsNames = subNames;
  }
};

const actions = <ActionTree<State, any>>{
  fetchUserSubscriptions(store) {
    //fetch
    store.commit("setSubscriptionsNames", new Array<String>("Reddit", "Youtube"));
  },
  fetchAllWidgetConf(store) {
    console.log("fetch all widget conf");
    store.dispatch("redditStore/fetchLatestSubRedditPostNames");
  }
};

export default new Vuex.Store({
  state: new State(),
  mutations: mutations,
  actions: actions,
  modules: {
    redditStore: redditStore,
    // openWeatherStore: openWeatherStore
  }
})

