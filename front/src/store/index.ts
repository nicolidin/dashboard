import Vue from 'vue'
import Vuex from 'vuex'
import redditStore from './redditStore'
import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex"

Vue.use(Vuex)

class State {
  accessToken!: string;
  clientId!: string;
  servicesNames: Array<string> = ["Reddit", "OpenWeather", "GoogleActuality"];
  subscriptionsNames: Array<string> = [];
}

const mutations = <MutationTree<State>>{
  setSubscriptionsNames(state, subNames: Array<string>) {
    state.subscriptionsNames = subNames;
    console.log("les subNames: " + state.subscriptionsNames)
  },
};

const actions = <ActionTree<State, any>>{
  fetchUserSubscriptions(store) {
    //TODO fetch subscriptions
    //the below line is just hardcoding -> TODO change it with fetching
    store.commit("setSubscriptionsNames", new Array<String>("Reddit", "Youtube"));
  },
  fetchAllWidgetConf(store) {
    for (var subscription of store.state.subscriptionsNames) {
      switch (subscription) {
        case "Reddit": {
          store.dispatch("redditStore/fetchAllWidgetConfig");
          break;
        }
        case "Google Actuality": {
          //store.dispatch("googleActualityStore/fetchAllWidgetConfig");
          break;
        }
        //fetch  all other model config
        default:
          break;
      }
    }
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

