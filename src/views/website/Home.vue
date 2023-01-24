<template>
  <main>
    <Landing/>
    <OurWorkingAreas/>
    <HelpYou/>
    <MostPopular/>
    <Services/>
    <MajorSubjects/>
    <News/>
    <Feedback/>
    <Achievements/>
  </main>
</template>

<script>
import OurWorkingAreas from '../../components/website/home/OurWorkingAreas.vue';
import Landing from '../../components/website/home/Landing.vue';
import HelpYou from '../../components/website/home/HelpYou.vue';
import MostPopular from '../../components/website/home/MostPopular.vue';
import Services from '../../components/website/home/Services.vue';
import MajorSubjects from '../../components/website/home/MajorSubjects.vue';
import News from '../../components/website/home/News.vue';
import Feedback from '../../components/website/home/Feedback.vue';
import Achievements from '../../components/website/home/Achievements.vue';

export default {
  name: "Home",
  components: { 
    Landing, 
    OurWorkingAreas, 
    HelpYou, 
    MostPopular, 
    Services, 
    MajorSubjects, 
    News, 
    Feedback, 
    Achievements, 
  }
}
</script>