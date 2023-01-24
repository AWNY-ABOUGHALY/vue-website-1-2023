<template>
  <section class="our-working-areas py-15">
    <v-container>
      <div class="d-flex flex-column">
        <HeadTitle :headTitle="headTitle" />
        <v-row>
          <v-col v-for="card in cards" :key="card.id" cols="12" sm="6" md="4">
            <v-card :to="card.to" class="cardbox d-flex flex-column justify-center align-center py-10 px-1">
              <img :src="card.img" style="max-width: 100%" :alt="card.title"/>
              <v-card-title class="cardtitle text-center text-uppercase">
                {{ card.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import HeadTitle from './smallComp/HeadTitle.vue';

export default {
    name: "OurWorkingAreas",
    data: () => ({
        headTitle: "Our Working Areas",
        cards: [
          {id: '1', img: 'src/assets/images/OurWorkAreas/u-courses.png', title: 'University Courses', to: '/'},
          {id: '2', img: 'src/assets/images/OurWorkAreas/e-courses.png', title: 'English Courses', to: '/'},
          {id: '3', img: 'src/assets/images/OurWorkAreas/accomodation.png', title: 'Accomodation', to: '/'},
          {id: '4', img: 'src/assets/images/OurWorkAreas/sell-buy.png', title: 'Sell & Buy', to: '/'},
          {id: '5', img: 'src/assets/images/OurWorkAreas/workshops-tuts.png', title: 'Workshops & tutors', to: '/'},
          {id: '6', img: 'src/assets/images/OurWorkAreas/q-a.png', title: 'University Courses', to: '/'}
        ]
    }),
    components: { HeadTitle }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.our-working-areas {
  min-height: 100vh;
  .cardbox {
    min-height: 16rem;
    transition: 0.3s;
    .cardtitle {
      transition: 0.3s;
    }
    &:hover {
      background-color: #f1f1f1;
      .cardtitle {
        color: $color_main_primary;
      }
    }
  }
}
</style>