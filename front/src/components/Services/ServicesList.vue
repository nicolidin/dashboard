<template>
  <div class="serviceList">
    <ul class="flexRow">
      <li v-for="serviceName in servicesNames" v-bind:key="serviceName">
        <Service v-bind:serviceName="serviceName" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Service from "@/components/Services/Service.vue";
import { mapState } from "vuex";

@Component({
  components: { Service },
  computed: {
    ...mapState({ servicesNames: "servicesNames" })
  }
})
export default class ServicesList extends Vue {
  servicesNames!: Array<string>;
  mounted() {}
}
</script>

<style scoped lang="scss">
.flexRow {
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center; //center
}
.flexRow > li {
  margin-right: 10px;
}
.flexRow > li:last-child {
  margin-right: 0px;
}
ul.flexRow::before {
  vertical-align: baseline;
  content: "Service Liste : ";
  align-self: center;
  margin-right: 15px;
}
</style>


