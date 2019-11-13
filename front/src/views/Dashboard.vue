<template>
  <div>
    <h1>DASHBOARD</h1>
    <ServicesList />
    <div class="dashboard">
      <Subscription serviceSubscribeName="Reddit" />
      <!-- <Subscription componentName="Youtube" /> -->
      <!--loop in state tab  -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Subscription from "@/components/Subscriptions/Subscription.vue";
import ServicesList from "@/components/Services/ServicesList.vue";

@Component({ components: { Subscription, ServicesList } })
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

