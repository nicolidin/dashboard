import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//import SubRedditNames from "@/components/Widgets/RedditWidgets/SubRedditNames.vue";
//Vue.component("SubRedditNames", SubRedditNames);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
