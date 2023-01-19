<template>
  <section class="news py-15">
    <v-container>
      <div class="d-flex flex-column">
        <HeadTitle :headTitle="headTitle" />
        <carousel
          :nav="false"
          :loop="true"
          :dots="false"
          style="max-width:1200px"
          :responsive="{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            960: {
              items: 3,
            },
          }"
        >
          <v-card
            class="mx-auto ms-sm-auto me-sm-5 mx-md-3 my-2 py-2 text-center"
            max-width="340"
            min-height="260"
            v-for="news in newsGroup" :key="news.id"
          >
            <v-card-title class="d-flex justify-center text-h5 font-weight-medium">{{ news.title }}</v-card-title>
            <v-card-text>
              <p class="mb-0">{{ news.date }}</p>
            </v-card-text>
            <v-card-text>
              <p class="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, quis fuga temporibus nam sint quaerat laborum culpa. Quos, distinctio. Repudiandae eos quae ducimus</p>
            </v-card-text>
          </v-card>
        </carousel>
      </div>
    </v-container>
  </section>
</template>

<script>
import HeadTitle from './smallComp/HeadTitle.vue';
import carousel from 'vue-owl-carousel';

export default {
    name: "News",
    data: () => ({
        headTitle: "News",
        newsGroup: [
          {id: '1', title: 'Word of the Day', date: '05/01/2023', to: '/'},
          {id: '2', title: 'Word of the Day', date: '05/01/2023', to: '/'},
          {id: '3', title: 'Word of the Day', date: '05/01/2023', to: '/'},
          {id: '4', title: 'Word of the Day', date: '05/01/2023', to: '/'},
          {id: '5', title: 'Word of the Day', date: '05/01/2023', to: '/'},
          {id: '6', title: 'Word of the Day', date: '05/01/2023', to: '/'},
        ]
    }),
    components: { HeadTitle, carousel }
};
</script>

<style lang="scss" scoped>
</style>