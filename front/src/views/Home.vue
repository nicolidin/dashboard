<template>
  <div class="home center">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to your dashboard</h1>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

import { Component, Prop, Vue } from 'vue-property-decorator';
import RedditLatestSubreditPostNames from '@/models/reddit/latestSubreditPostNamesModel';

@Component
export default class Home extends Vue {
  mounted() {
  //  this.$store.dispatch('redditStore/getLatestSubreditPostNames');
    this.$store.dispatch("redditStore/getLatestSubreditPostNames", new RedditLatestSubreditPostNames("ayo", 4));
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
