<template>
  <div class="home center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to your dashboard</h1>
    <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
    <button v-on:click="goToDashboardVue">Go to Dashboard</button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

import { Component, Prop, Vue } from "vue-property-decorator";
import RedditLatestSubreditPostNames from "@/models/reddit/latestSubreditPostNamesModel";

@Component
export default class Home extends Vue {
  goToDashboardVue() {
    this.$router.push({
      name: "dashboard",
      params: { componentName: "SubRedditNames" }
    });
  }
  onSignIn(googleUser: any) {
    // Useful data for your client-side scripts:
    console.log("salope");
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log("Full Name: " + profile.getName());
    console.log("Given Name: " + profile.getGivenName());
    console.log("Family Name: " + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }
  mounted() {
    this.$store.dispatch("fetchUserSubscriptions");
    //  this.$store.dispatch('redditStore/getLatestSubreditPostNames');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
