import RedditLatestSubreditPostNames from '@/models/reddit/latestSubreditPostNamesModel'
import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"

export class State {
  latestSubreditPostNames: RedditLatestSubreditPostNames | undefined = undefined;
}

const mutations = <MutationTree<State>> {
    setLatestSubreditPostNames(state: State, newVal: RedditLatestSubreditPostNames) {
      state.latestSubreditPostNames = newVal;
    }
};

const actions = <ActionTree<State, any>> {
  getLatestSubreditPostNames(store: ActionContext<State, any>, latestSubreditPostNames: RedditLatestSubreditPostNames) {
    store.commit("setLatestSubreditPostNames", latestSubreditPostNames);
    if (store.state.latestSubreditPostNames === undefined) {
        console.log("tchoinnnnnn");
      } else {
        console.log("grosse pute");
      }
    }
}

const redditStore = {
  namespaced: true,
  state: new State(),
  mutations: mutations,
  actions: actions
}

export default redditStore;