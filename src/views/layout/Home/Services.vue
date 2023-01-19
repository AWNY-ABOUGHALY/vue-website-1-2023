<template>
  <section class="services pt-10 pb-5 pb-md-1 ma-0 text-center">
    <v-container>
      <h1 class="text-h5 text-sm-h4 font-weight-bold mb-3">“WE MAKE YOUR JOURNEY OVERSEAS A STORY OF SUCCESS”</h1>
      <v-row>
        <v-col v-for="service in services" :key="service.id" cols="12" sm="4" lg="2">
          <div class="py-3">
            <img :src="`https://i.ibb.co/${service.src}`" class="my-2" style="max-width: 100%"/>
            <p>{{ service.text }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
    name: "Services",
    data: () => ({
      services: [
        {id: '1', src: 'bs5pTRm/1.png', text: 'Providing an offers from the universities'},
        {id: '2', src: 'YPPtpdg/2.png', text: 'Provide a suitable accommodation for students'},
        {id: '3', src: 'x8tkqBg/3.png', text: 'Arrange an airport pickup Transport'},
        {id: '4', src: 'VphMsty/4.png', text: 'Assist you to book an IELTS Test'},
        {id: '5', src: 'G0M3p9j/5.png', text: 'Organise meetings between students'},
        {id: '6', src: '6mqCZ7R/6.png', text: 'Assist with students visa requirements'},
      ]
    }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.services {
  h1 {
    color: $color_text_dark;
  }
  background-color: #F0F0F0;
}
</style>