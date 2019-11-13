import LatestSubRedditPostNamesWidgetConfig from '@/models/reddit/latestSubreditPostNamesModel'
import { GetterTree, MutationTree, ActionTree, ActionContext } from "vuex"

export class StateRedditSubscription {
  latestSubreditPostNamesConf: Array<LatestSubRedditPostNamesWidgetConfig> | undefined = undefined;
  // all the other model corresponding to this subscription
}

const getters = <GetterTree<StateRedditSubscription, any>>{
  getAllWidgetsConfig(state: StateRedditSubscription): Array<Object> {
    var confArray = Array<Object>();
    if (state.latestSubreditPostNamesConf !== undefined) {
      for (var widgetConf of state.latestSubreditPostNamesConf) {
        if (widgetConf !== undefined) {
          confArray.push(widgetConf);
        }
      }
    }
    //TODO Do this for the others key state (repeat this for for n model)
    //TODO push the other widgetConfs
    return confArray;
  }
};

const mutations = <MutationTree<StateRedditSubscription>>{
  setLatestSubreditPostNames(state: StateRedditSubscription, newVal: LatestSubRedditPostNamesWidgetConfig) {
    if (state.latestSubreditPostNamesConf !== undefined) {
      state.latestSubreditPostNamesConf.forEach(function (item, index) {
        if (item.id == newVal.id) {
          state.latestSubreditPostNamesConf![index] = newVal;
          return;
        }
      })
    }
    else {
      state.latestSubreditPostNamesConf = new Array<LatestSubRedditPostNamesWidgetConfig>();
      console.log("undefined should be pass one time");
    }
    state.latestSubreditPostNamesConf.push(newVal)
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
    var model = new LatestSubRedditPostNamesWidgetConfig("SubRedditNames", "", 0, "3538629");//replace with fetching
    store.commit("setLatestSubreditPostNames", model);
    model = new LatestSubRedditPostNamesWidgetConfig("SubRedditNames", "", 0, "dq963730");//replace with fetching
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