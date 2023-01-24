<template>
  <section class="helpyou pt-10 pb-5 pb-md-1 ma-0">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-center">
          <img src="src/assets/images/banner-illust.png" alt="Let us help you" style="max-width: 100%"/>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center align-md-start justify-space-around">
            <p class="letus text-h6 text-sm-h4 font-weight-medium text-uppercase text-center ms-md-5">Let us help you</p>
            <div class="d-flex flex-column align-center align-md-start text-center ms-md-5 my-5">
              <span class="text-h6 font-weight-normal">We here to help you,</span>
              <span class="text-h6 font-weight-normal">Feel free to ask us</span>
            </div>
            <v-btn class="btn-style white--text text-subtitle-1 pa-5 ms-md-5">click here</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
    name: "HelpYou",
    data: () => ({
    }),
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.helpyou {
  // min-height: 100vh;
  background-image: url('src/assets/images/banner-bg.png');
  background-size: cover;
  margin-left: -5px!important;
  .letus {
    color: $color_text_dark;
  }
}
</style>