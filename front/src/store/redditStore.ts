import LatestSubRedditPostNamesWidgetConfig from '@/models/reddit/latestSubreditPostNamesModel'
import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex"

export class StateRedditSubscription {
  latestSubreditPostNamesConf: LatestSubRedditPostNamesWidgetConfig | undefined = undefined;
  // all the other model corresponding to this subscription
}

const getters = <GetterTree<StateRedditSubscription, any>>{
  getAllWidgetsConfig(state: StateRedditSubscription): Array<Object> {
    var confArray = Array<Object>();
    if (state.latestSubreditPostNamesConf !== undefined) {
      confArray.push(state.latestSubreditPostNamesConf);
    }
    //TODO Do this for the others key state
    //TODO push the other widgetConfs
    return confArray;
  }
};

const mutations = <MutationTree<StateRedditSubscription>>{
  setLatestSubreditPostNames(state: StateRedditSubscription, newVal: LatestSubRedditPostNamesWidgetConfig) {
    state.latestSubreditPostNamesConf = newVal;
    console.log(newVal.componentName);
    console.log(state.latestSubreditPostNamesConf.componentName);
  },
};

const actions = <ActionTree<StateRedditSubscription, any>>{
  fetchAllWidgetConfig(store) {
    store.dispatch("fetchLatestSubRedditPostNames");
    //TODO call other fetchModel
  },
  fetchLatestSubRedditPostNames(store) {
    //TODO
    //je suis sensé fetch mais j'hardcore l'actualise de ma state
    var model = new LatestSubRedditPostNamesWidgetConfig("SubRedditNames", "", 0);//replace with fetching
    store.commit("setLatestSubreditPostNames", model);
  },
};

const redditStore = {
  namespaced: true,
  state: new StateRedditSubscription(),
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default redditStore;