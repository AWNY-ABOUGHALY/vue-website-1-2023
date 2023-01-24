<template>
    <div class="headtitle d-flex justify-center justify-sm-start mb-10">
      <img src="@/assets/images/title-sep.svg" class="d-none d-sm-block"/>
      <span class="ms-sm-5 text-uppercase text-h4 font-weight-medium">{{ headTitle }}</span>
    </div>
</template>

<script>
export default {
  name: 'HeadTitle',
  props: ['headTitle']
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.headtitle {
  span {
    color: $color_text_dark;
  }
}
</style>