<template>
  <section class="feedback py-10">
    <v-container>
      <div class="d-flex flex-column text-center">
        <h1 class="font-weight-medium text-h4 text-uppercase">Enroll Student's Feedback</h1>
        <v-row class="my-10">
          <v-col v-for="feedback in feedbacks" :key="feedback.id" class="mx-2">
            <v-avatar size="80">
              <img
                :src="feedback.img"
                alt="John"
              >
            </v-avatar>
            <h5 class="name my-2">{{ feedback.name }}</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Feedback",
  data: () => ({
    feedbacks: [
      {id: '1', name: 'Elmajed', to: '/', img: 'https://cdn4.premiumread.com/?url=https://alyaum.com/uploads/images/2021/08/08/1125617.jpeg&w=600&q=72&f=jpg'},
      {id: '2', name: 'abdulhadi', to: '/', img: 'https://www.okaz.com.sa/uploads/images/2020/05/29/1572425.jpg'},
      {id: '3', name: 'Abdulla', to: '/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlETPqjdKjRtT001nrhEz-xcb3xHxN1PkW91zcTNp7SaItn7AbpgCItpsMNmlQVWhpvFo&usqp=CAU'},
      {id: '4', name: 'Hind', to: '/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_ZXF-vr8XbqIZixE0X6bYWvyqxHQR_MbLTsIwnvG9UHIu5aDlDn1U-pQT7T285Q_nB0&usqp=CAU'},
      {id: '5', name: 'Khalid', to: '/', img: 'https://i0.wp.com/news.almlf.org/wp-content/uploads/1%D8%A8%D8%B3%D9%8A%D8%B4%D8%A8%D8%B4%D8%A83744518899.jpg'},
      {id: '6', name: 'Mohammed', to: '/', img: 'https://i2.wp.com/lovee.cc/wp-content/uploads/2019/05/4491-5.jpg'},
      {id: '7', name: 'Nayef', to: '/', img: 'https://i0.wp.com/ar.almlf.org/wp-content/uploads/b5AT_ygo_%D8%AA%D8%A7%D9%84%D8%AA%D8%A7400x400-1.jpeg'},
      {id: '8', name: 'Kholoud', to: '/', img: 'https://i2.wp.com/carss.cc/wp-content/uploads/2020/12/6081-6.jpg'},
    ]
  }),
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.feedback {
  h1 {
    color: $color_text_dark;
  }
  .name {
    color: $color_main_alternative;
  }
}
</style>