<template>
  <main>
    <WebsiteHeader/>
    <Landing/>
    <OurWorkingAreas/>
    <HelpYou/>
    <MostPopular/>
    <Services/>
    <MajorSubjects/>
    <News/>
    <Feedback/>
    <Achievement/>
    <WebsiteFooter/>
    <!-- <p class="text-center ma-5"><font-awesome-icon icon="fa-brands fa-twitter" /></p>

    <p class="text-center ma-5"><font-awesome-icon icon="fa-solid fa-user-secret" /></p>

    <p class="text-center ma-5"><font-awesome-icon icon="fa-brands fa-facebook" /></p> -->
  </main>
</template>

<script>
import WebsiteHeader from '../views/layout/Header.vue'
import OurWorkingAreas from './layout/Home/OurWorkingAreas.vue';
import Landing from './layout/Home/Landing.vue';
import HelpYou from './layout/Home/HelpYou.vue';
import MostPopular from './layout/Home/MostPopular.vue';
import Services from './layout/Home/Services.vue';
import MajorSubjects from './layout/Home/MajorSubjects.vue';
import News from './layout/Home/News.vue';
import Feedback from './layout/Home/Feedback.vue';
import Achievement from './layout/Home/Achievement.vue';
import WebsiteFooter from '../views/layout/Footer.vue';

export default {
  name: "Home",
  components: { 
    WebsiteHeader,
    Landing, 
    OurWorkingAreas, 
    HelpYou, 
    MostPopular, 
    Services, 
    MajorSubjects, 
    News, 
    Feedback, 
    Achievement, 
    WebsiteFooter,
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
</style>