<template>
  <footer>
    <div class="pt-8 pb-3">
      <v-container class="d-flex px-0">
        <v-row>
          <v-col cols="12" md="3">
            <div class="px-1 text-center mb-7 mb-md-0 text-md-start">
              <img src="@/assets/images/logo-square.png" alt="Student Center">
              <div>
                <v-icon class="white--text me-1 my-5" dense>mdi-email-outline</v-icon>
                <span>info@domain.com</span>
              </div>
              <div class="media">
                <v-icon class="white--text pa-2 rounded-circle" dense>mdi-instagram</v-icon>
                <v-icon class="white--text mx-1 pa-2 rounded-circle" dense>mdi-facebook</v-icon>
                <v-icon class="white--text pa-2 rounded-circle" dense>mdi-twitter</v-icon>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="9" class="d-flex justify-space-between flex-wrap">
            <v-row class="mx-1">
              <v-col cols="12" sm="6" class="colstyle d-flex pa-1">
                <div class="whatsApp px-1 mb-8 flex-grow-1">
                  <h3 class="mb-3 text-no-wrap">WhatsApp No.</h3>
                  <div class="numbers ms-1">
                    <div v-for="whatsApp in whatsApps" :key="whatsApp.country" class="mb-1">
                      <img :src="`https://swift-lead.com/site/assets/images/flags/${whatsApp.image}`" :alt="whatsApp.country" class="me-3"/>
                      <span>{{ whatsApp.number }}</span>
                    </div>
                  </div>
                </div>
                <div class="about px-1 mb-8 flex-grow-1">
                  <h3 class="mb-3">About</h3>
                  <div class="links d-flex flex-column">
                    <router-link to="/" class="mb-2">About Us</router-link>
                    <router-link to="/" class="mb-2">Contact Us</router-link>
                    <router-link to="/">Blogs</router-link>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" class="colstyle d-flex pa-1">
                <div class="Legal px-1 mb-8 flex-grow-1">
                  <h3 class="mb-3">Legal</h3>
                  <div class="links d-flex flex-column">
                    <router-link to="/" class="mb-2">Terms & Conditions</router-link>
                    <router-link to="/">Privacy Policy</router-link>
                  </div>
                </div>
                <div class="Quick-Links px-1 mb-8 flex-grow-1">
                  <h3 class="mb-3">Quick Links</h3>
                  <div class="links d-flex flex-column">
                    <router-link to="/" class="mb-2">Accommodation</router-link>
                    <router-link to="/" class="mb-2">Sell & Buy</router-link>
                    <router-link to="/" class="mb-2">Workshops and Tutors</router-link>
                    <router-link to="/">Q & A</router-link>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-divider dark />
    <div class="d-flex justify-center align-center white--text" style="min-height: 4rem">
      <div class="text-center text-caption text-sm-subtitle-1 py-1">Copyright &copy; Student Center 2023 All Rights Reserved.</div>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      whatsApps: [
        {country: 'kuwait', image: 'kuwait.svg', number: '50733445'},
        {country: 'bahrain', image: 'bahrain.svg', number: '50733454'},
        {country: 'egypt', image: 'egypt.svg', number: '50733443'},
        {country: 'jordan', image: 'jordan.svg', number: '50733444'},
        {country: 'ksa', image: 'ksa.svg', number: '50733442'},
        {country: 'qatar', image: 'qatar.svg', number: '50733445'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
footer {
  background-color: $color_main_dark;
  color: $color_text_light;
  h3 {
    color: $color_main_alternative;
  }
  .media i {
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 8px $color_main_alternative;
    }
  }
  .links a {
    color: $color_text_light;
    &:hover {
      text-decoration: underline;
    }
  }
  .colstyle {
    @media(max-width: 400px){
      flex-direction: column;
    }
  }
  .whatsApp, .about, .Legal, .Quick-Links {
    @media(max-width: 600px){
      flex-basis: 50%;
      text-align: center;
    }
  }
}
</style>