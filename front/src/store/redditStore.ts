import LatestSubRedditPostNamesWidgetConfig from '@/models/reddit/latestSubreditPostNamesModel'
import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex"

export class StateRedditSubscription {
  latestSubreditPostNamesConf: LatestSubRedditPostNamesWidgetConfig | undefined = undefined;
  // all the other model corresponding to this subscription
}

const getters = <GetterTree<StateRedditSubscription, any>>{
  getAllWidgetsConfig(state: StateRedditSubscription): Array<Object> {
    console.log("je fuckingg get BROOOWW ALL MES CONFIG");
    var confArray = Array<Object>();
    if (state.latestSubreditPostNamesConf !== undefined) {
      console.log("ok il est pas undefined");
      console.log(state.latestSubreditPostNamesConf.componentName);
      confArray.push(state.latestSubreditPostNamesConf);
    }
    else {
      console.log("OH FUCK C'est undefined")
    }
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
  fetchLatestSubRedditPostNames(store) {
    console.log("je suis sensé fetch mais j'hardcore l'actualise de ma state");
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