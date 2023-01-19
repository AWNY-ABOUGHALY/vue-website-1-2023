<template>
  <main class="mt-15 pt-15 d-flex flex-column justify-center align-center">
    <h1 class="mt-15 pt-sm-10 mt-sm-5 text-center white--text">Find, Review And Apply To The Best Universities In The World</h1>
    <div class="d-flex flex-column flex-sm-row my-10">
      <v-btn color="primary" large link class="mb-3 mb-sm-0 me-sm-5">English Courses</v-btn>
      <v-btn large link class="btn">University Courses</v-btn>
    </div>
    <div class="btnsholder text-center">
      <v-text-field
        placeholder="Enter the course name or the required program"
        light
        outlined
        background-color="white"
        type="search"
        class="text-h6 mx-1 font-weight-regular rounded-lg"
        height="80"
        hide-details
      ></v-text-field>
      <v-btn large link class="searchbtn mt-5 mt-sm-10 mb-10 py-5 py-sm-7 px-5 px-sm-15 text-h6 white--text">Search</v-btn>
    </div>
  </main>
</template>

<script>
export default {
    name: "Landing",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
main {
  background-color: $color_main_primary;
  background-image: url('@/assets/images/cover-bg.jpg');
  background-size: cover;
  background-position: top center;
  min-height: 100vh;
  width: 100%;
  .btn {
    transition: 0.3s;
    &:hover {
      background-color: $color_main_primary;
      color: $color_text_light;
    }
  }
  .btnsholder {
    width: 40rem;
    max-width: 100%;
    .searchbtn {
      background-color: $color_main_alternative!important;
      transition: 0.3s;
      &:hover {
        background-color: $color_main_dark!important;
      }
    }
  }
}
</style>