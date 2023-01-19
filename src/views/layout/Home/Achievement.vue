<template>
  <section class="achievement pt-5 pb-5">
    <v-container>
      <div class="d-flex flex-column text-center">
        <h1 class="font-weight-medium text-h4 text-uppercase">Our Achievements</h1>
        <v-row class="my-10">
          <v-col v-for="achievement in achievements" :key="achievement.id" cols="12" sm="4">
            <h2 class="cardnumber text-h4 font-weight-medium">{{ achievement.number }}</h2>
            <h3 class="cardtitle my-2 text-uppercase font-weight-bold">{{ achievement.title }}</h3>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Achievement",
  data: () => ({
    achievements: [
      {id: '1', number: '344+', title: 'Educational Institutions'},
      {id: '2', number: '3+', title: 'Courses'},
      {id: '3', number: '344+', title: 'Students We Helping'},
    ]
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.achievement {
  h1 {
    color: $color_text_dark;
  }
  .cardnumber {
    color: $color_main_alternative;
  }
  .cardtitle {
    color: $color_text_secondary;
  }
}
</style>