<template>
  <div class="subscription">
    <h1>SUBSCRIPTION {{serviceSubscribeName}}</h1>
    <component v-bind:is="widgetsConf[0].componentName" />
    <WidgetCard />
    <!-- <component v-bind:is="widgetName" /> -->
    <!-- <component v-bind:is="componentName"></component> -->
    <!--   BOUCLER ET PUTAIN DE CALL LE WIDGET AVEC LA BALISE COMPONENT ET SA VALEUR
QUI LA VALEUR DE la clef componentsName DANS CHACUN DEs MODEL DE "private widgetsConf"
    -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SubRedditNames from "@/components/Widgets/RedditWidgets/SubRedditNames.vue";
import WidgetCard from "@/components/Widgets/WidgetCard.vue";
import RedditLatestSubreditPostNames from "@/models/reddit/latestSubreditPostNamesModel";

@Component({ components: { SubRedditNames, WidgetCard } })
export default class Subscription extends Vue {
  @Prop() private serviceSubscribeName!: string;
  private widgetsConf!: Array<Object>;

  constructor() {
    super();
  }

  created() {
    console.log("ok je monte une subscription");
    switch (this.serviceSubscribeName) {
      case "Reddit": {
        this.widgetsConf = this.$store.getters[
          "redditStore/getAllWidgetsConfig"
        ];

        console.log("ayooooo" + this.widgetsConf[0].componentName + "okkk");
        break;
      }
      //this.widgetsConfI      --> Implement the other getters call
      default:
        break;
    }
    // console.log(this.serviceSubscribeName);
    // console.log(this.widgetsConf.length);
  }
}
</script>