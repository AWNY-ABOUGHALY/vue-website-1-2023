<template>
  <section class="major-subjects pt-15 pb-10">
    <v-container>
      <div class="d-flex flex-column">
        <HeadTitle :headTitle="headTitle" />
        <div class="d-flex flex-wrap justify-center">
          <div v-for="card in cards" :key="card.id"
            class="cardbox my-5 mx-2"
            >
            <v-card
              link 
              :to="card.to"
              height="10rem"
              class="card overflow-hidden"
              :img="card.img"
              >
              <span></span>
              <p class="text-uppercase text-body-2 font-weight-medium">{{ card.title }}</p>
            </v-card>
            <v-card-title class="cardtitle text-uppercase text-body-2 font-weight-medium pt-1">
                {{ card.title }}
              </v-card-title>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import HeadTitle from './smallComp/HeadTitle.vue';

export default {
    name: "MajorSubjects",
    data: () => ({
        headTitle: "Major Subjects",
        cards: [
          {id: '1', title: 'Software', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '2', title: 'Business', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '3', title: 'Graphic Design', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '4', title: 'Art', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '5', title: 'Chemistry', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '6', title: 'Economics', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '7', title: 'Education', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '8', title: 'Engineering', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '9', title: 'Nursing', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '10', title: 'Pharmacy', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '11', title: 'Kathleen Luna', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
          {id: '12', title: 'University', to: '/', img: 'https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg'},
        ]
    }),
    components: { HeadTitle }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.major-subjects {
  min-height: 100vh;
  .cardbox {
    position: relative;
    transition: 0.3s;
    width: 10rem;
    span, p, .cardtitle {
      position: absolute;
      left: 50%;
      transform: translate(-50% , -50%);
      transition: 0.4s;
      white-space: nowrap;
    }
    span {
      top: 50%;
      width: 0%;
      height: 0%;
      background-color: rgba(0, 0, 0, 0.582);
    }
    p {
      top: 110%;
      color: $color_text_light;
    }
    .cardtitle {
      top: 113%;
    }
    .card:hover {
      span {
        width: 100%;
        height: 100%;
      }
      p {
        top: 50%;
      }
      + .cardtitle {
        top: 50%;
        opacity: 0;
        z-index: -1;
      }
    }
  }
}
</style>