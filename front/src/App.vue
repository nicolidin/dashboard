<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

import { Component, Prop, Vue } from 'vue-property-decorator';
import RedditLatestSubreditPostNames from '@/models/reddit/latestSubreditPostNamesModel';

@Component
export default class App extends Vue {
  mounted() {
    this.$store.dispatch("fetchAllWidgetConf");
  }
}

</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}
</style>
