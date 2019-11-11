<template>
  <div class="card">
    <div class="card-image">
      <img
        src="http://getwallpapers.com/wallpaper/full/8/3/e/1340600-full-size-buddhist-wallpaper-widescreen-1920x1080-for-iphone-5s.jpg"
      />
      <span class="card-title">Card Title</span>
      <a class="btn-floating halfway-fab waves-effect waves-light red">
        <i class="material-icons">add</i>
      </a>
    </div>
    <div class="card-content">
      <component class="card-content" v-bind:is="configModel.componentName" />
      <p>{{configModel.componentName}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SubRedditNames from "@/components/Widgets/RedditWidgets/SubRedditNames.vue";

@Component({ components: { SubRedditNames } })
export default class WidgetCard extends Vue {
  @Prop() private configModel!: any;
  constructor() {
    super();
  }
}
</script>