<template>
  <div class="service">
    <p>{{serviceName}}</p>
    <form action="#">
      <p>
        <label>
          <input type="checkbox" />
          <span>Use</span>
        </label>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class Service extends Vue {
  @Prop() serviceName!: string;
  mounted() {}
}
</script>

<style scoped lang="scss">
</style>

