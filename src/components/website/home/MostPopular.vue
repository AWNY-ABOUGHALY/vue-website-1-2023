<template>
  <section class="most-popular py-15">
    <v-container>
      <div class="d-flex flex-column text-center text-sm-start">
        <HeadTitle :headTitle="headTitle" />
        <h1 class="text-uppercase mb-3">English Courses</h1>
        <v-row>
          <v-col v-for="EnCard in EnCards" :key="EnCard.id" cols="12" sm="6" md="4" lg="3">
            <v-card max-width="400" class="mx-auto pa-2">
              <v-img
                class=""
                height="230px"
                :src="EnCard.img"
                style="max-width: 100%"
              >
              </v-img>
              <v-card-title class="text-uppercase px-2 pb-2 d-flex justify-center justify-sm-start">{{ EnCard.title }}</v-card-title>
              <v-card-subtitle class="price mt-1 text-h6 px-2">
                {{ EnCard.price }} Per Month
              </v-card-subtitle>
              <v-card-text class="px-2">
                <div class="mb-1">Required Level</div>
                <div class="mb-2">Lessons/Week {{ EnCard.lessons }}</div>
                <div class="location text-body-1 font-weight-bold">{{ EnCard.location }}</div>
              </v-card-text>
              <v-card-actions class="d-flex justify-center justify-sm-start">
                <v-btn link :to="EnCard.to" class="btn-style white--text text-capitalize text-body-1 pa-3">View More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <h1 class="text-uppercase mt-10 mb-3">University Courses</h1>
        <v-row>
          <v-col v-for="UnCard in UnCards" :key="UnCard.id" cols="12" sm="6" md="4">
            <v-card max-width="400" class="mx-auto pa-2">
              <v-img
                class=""
                height="230px"
                :src="UnCard.img"
                style="max-width: 100%"
              >
              </v-img>
              <v-card-title class="text-uppercase d-flex flex-column align-start px-2">
                <span>{{ UnCard.title }}</span>
                <span class="text-start">{{ UnCard.subTitle }}</span>
              </v-card-title>
              <v-divider></v-divider>
              <div class="d-flex justify-space-between align-center flex-wrap">
                <div class="location text-body-1 font-weight-bold ms-2">
                  <span>{{ UnCard.location }}</span>
                </div>
                <v-card-actions>
                  <v-btn link :to="UnCard.to" class="btn-style white--text text-capitalize text-body-1 pa-3">View More</v-btn>
                </v-card-actions>
              </div>
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
    name: "MostPopular",
    data: () => ({
      headTitle: "Most Popular",
      EnCards: [
        {id: '1', title: 'Course 1', price: '9210.53', lessons: '333', location: 'Honduras', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '2', title: 'Course 2', price: '57.89', lessons: '32', location: 'Wallis And Futuna', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '3', title: 'Course 3', price: '396.05', lessons: '6', location: 'Kuwait', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '4', title: 'Course 4', price: '86.84', lessons: '33', location: 'Netherlands', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '5', title: 'Course 5', price: '28.95', lessons: '22', location: 'Egypt', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '6', title: 'Course 6', price: '397.37', lessons: '10', location: 'Egypt', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '7', title: 'Course 7', price: '184.21', lessons: '30', location: 'Egypt', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '8', title: 'Course 8', price: '131.58', lessons: '8', location: 'United Arab Emirates', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
      ],
      UnCards: [
        {id: '1', title: 'Test', subTitle: 'University 1', location: 'Dubai', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '2', title: 'Test', subTitle: 'University 2', location: 'Liverpool', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '3', title: 'Test', subTitle: 'University 3', location: 'Egypt', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '4', title: 'Test', subTitle: 'University 4', location: 'Berlin', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '5', title: 'Test', subTitle: 'University 5', location: 'Cairo', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
        {id: '6', title: 'Test', subTitle: 'University 6', location: 'New York', to: '/', img: 'https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1103/files/2020/09/hannah-marie-hughes-graduation-masters-degree-finance-600-400.jpg'},
      ]
    }),
    components: { HeadTitle }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.most-popular {
  min-height: 100vh;
  h1 {
    color: $color_main_alternative;
  }
  .price {
    color: $color_main_light;
  }
  .location {
    color: $color_main_alternative;
  }
  .cardbox {
    min-height: 16rem;
    transition: 0.3s;
    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>