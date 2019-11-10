<template>
  <div class="subscription">
    <h1>SUBSCRIPTION {{componentName}}</h1>
    <component v-bind:is="widgetsConf[0].componentName" />
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
import RedditLatestSubreditPostNames from "@/models/reddit/latestSubreditPostNamesModel";

@Component({ components: { SubRedditNames } })
export default class Subscription extends Vue {
  @Prop() private componentName!: string;
  private widgetsConf!: Array<Object>;

  constructor() {
    super();
  }

  created() {
    console.log("ok je monte une subscription");
    switch (this.componentName) {
      case "Reddit": {
        this.widgetsConf = this.$store.getters[
          "redditStore/getAllWidgetsConfig"
        ];

        console.log("ayooooo" + this.widgetsConf[0].componentName);
        break;
      }
      //this.widgetsConfI      --> Implement the other getters call
      default:
        break;
    }
    console.log(this.componentName);
    console.log(this.widgetsConf.length);
  }
}
</script>