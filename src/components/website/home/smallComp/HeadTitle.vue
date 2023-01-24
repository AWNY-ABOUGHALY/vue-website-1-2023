<template>
  <div class="headtitle d-flex flex-column justify-center justify-sm-start mb-10">
    <span class="mb-sm-5 text-uppercase text-h4 font-weight-medium">{{
      headTitle
    }}</span>
    <img src="@/assets/images/title-sep.svg" class="d-none d-sm-block" style="max-width: 180px" />
  </div>
</template>

<script>
export default {
  name: "HeadTitle",
  props: ["headTitle"],
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.headtitle {
  span {
    color: $color_text_dark;
  }
}
</style>
