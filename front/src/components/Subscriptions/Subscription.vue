<template>
  <div class="subscription">
    <h1>SUBSCRIPTION {{serviceSubscribeName}}</h1>
    <WidgetCard
      v-for="widgetConf in widgetsConf"
      v-bind:configModel="widgetConf"
      v-bind:key="widgetConf.componentName"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import WidgetCard from "@/components/Widgets/WidgetCard.vue";

@Component({ components: { WidgetCard } })
export default class Subscription extends Vue {
  @Prop() private serviceSubscribeName!: string;
  private widgetsConf!: Array<Object>;

  created() {
    console.log("ok je monte une subscription");
    switch (this.serviceSubscribeName) {
      case "Reddit": {
        this.widgetsConf = this.$store.getters[
          "redditStore/getAllWidgetsConfig"
        ];
        break;
      }
      case "Google Actuality": {
        //TODO call geter of googleActualityWidgetConf
        break;
      }
      //TODO Implement the 'n' other getters call
      default:
        break;
    }
    // console.log(this.serviceSubscribeName);
    console.log(this.widgetsConf.length);
  }
}
</script>