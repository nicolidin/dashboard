<template>
  <div class="SubRedditNamesWidget">
    <h1>On est dans le component SubRedditNames</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SubRedditNames extends Vue {
  mounted() {
    console.log("suceeeeeedd");
  }
}
</script>