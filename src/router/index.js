import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/website/Home.vue"),
    },
    {
      path: "/university-courses",
      name: "UniversityCourses",
      component: () => import("../views/website/UniversityCourses.vue"),
    },
    {
      path: "/english-courses",
      name: "EnglishCourses",
      component: () => import("../views/website/EnglishCourses.vue"),
    },
    {
      path: "/accommodations",
      name: "Accommodations",
      component: () => import("../views/website/Accommodations.vue"),
    },
    {
      path: "/sell-buy",
      name: "SellAndBuy",
      component: () => import("../views/website/SellAndBuy.vue"),
    },
    {
      path: "/workshops-tutors",
      name: "WorkshopsAndTutors",
      component: () => import("../views/website/WorkshopsAndTutors.vue"),
    },
    {
      path: "/questions",
      name: "Questions",
      component: () => import("../views/website/Questions.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/website/About.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/website/Contact.vue"),
    },
  ],
});

export default router;
