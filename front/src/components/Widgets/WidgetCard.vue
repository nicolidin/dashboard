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
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WidgetCard extends Vue {}
