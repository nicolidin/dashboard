<template>
  <div class="dashboard">
    <h1>DASHBOARD</h1>
    <Subscription componentName="Reddit" />
    <!-- <Subscription componentName="Youtube" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Subscription from "@/components/Subscriptions/Subscription.vue";

@Component({ components: { Subscription } })
export default class Dashboard extends Vue {
  constructor() {
    super();
  }
  mounted() {
    console.log("ok je suis dans dashboard");
  }
}
</script>