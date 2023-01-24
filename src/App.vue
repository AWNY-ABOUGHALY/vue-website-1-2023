<template>
  <v-app>
    <v-main>
      <WebsiteHeader/>
      <router-view />
      <WebsiteFooter/>
    </v-main>
  </v-app>
</template>

<script>
import WebsiteHeader from './components/layout/Header.vue';
import WebsiteFooter from './components/layout/Footer.vue';
export default {
  name: "App",
  components: {
    WebsiteHeader,
    WebsiteFooter,
  }
};
</script>
