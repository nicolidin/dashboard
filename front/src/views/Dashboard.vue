<template>
  <div class="dashboard">
    <h1>DASHBOARD</h1>
    <Subscription serviceSubscribeName="Reddit" />
    <!-- <Subscription componentName="Youtube" /> -->
    <!--loop in state tab  -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Subscription from "@/components/Subscriptions/Subscription.vue";

@Component({ components: { Subscription } })
export default class Dashboard extends Vue {
  mounted() {}
}
</script>
<style scoped lang="scss">
.dashboard {
  width: 100vw;
  height: 100vh;
}
</style>

