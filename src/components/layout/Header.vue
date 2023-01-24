<template>
  <header class="overflow-hidden" :style="`height: ${headerHeight}px`">
    <nav>
      <v-container class="py-0 d-flex justify-end" style="max-height:100%">
        <div class="navholder d-flex">
          <v-select
            v-model="country"
            :items="countries"
            :menu-props="{ bottom: true, offsetY: true, openOnHover: false }"
            background-color="transparent"
            dark dense flat solo
            class="ma-0 py-1"
          ></v-select>
          <v-select
            v-model="lang"
            :items="languages"
            :menu-props="{ bottom: true, offsetY: true, openOnHover: false }"
            background-color="transparent"
            dark dense flat solo
            class="ma-0 py-1"
          ></v-select>
          <v-select
            v-model="currency"
            :items="currencies"
            :menu-props="{ bottom: true, offsetY: true, openOnHover: false }"
            background-color="transparent"
            dark dense flat solo
            class="ma-0 py-1"
          ></v-select>
        </div>
      </v-container>
    </nav>
    <div class="mainhead container py-0 overflow-hidden" :style="`height: ${headerHeight}px`">
      <div class="d-flex flex-column flex-md-row justify-md-space-between">
        <div class="d-flex justify-space-between align-center" style="height: 110px;">
          <router-link :to="{name: 'Home'}">
            <img src="src/assets/images/logo.png" class="mainlogo" alt="Student Center"/>
          </router-link>
          <v-icon class="white--text d-md-none" @click="mobileNavbarToggel">mdi-menu</v-icon>
        </div>
        <v-divider dark class="d-md-none mb-3"></v-divider>
        <div class="menuItems d-flex flex-column flex-md-row justify-end align-center mb-2 mb-md-0">
          <router-link :to="{name: 'UniversityCourses'}" class="white--text mb-3 mb-md-0 me-md-5">
            <span class="font-weight-medium text-lg-h6" @click="resetHeader">University Courses</span>
          </router-link>
          <router-link :to="{name: 'EnglishCourses'}" class="white--text mb-3 mb-md-0 me-md-5">
            <span class="font-weight-medium text-lg-h6" @click="resetHeader">English Courses</span>
          </router-link>
          <v-menu offset-y transition="slide-x-transition" open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-title text v-bind="attrs" v-on="on"
                class="white--text pa-0 mb-3 mb-md-0 me-md-5"
              >
                <span class="font-weight-medium text-lg-h6">Get Settled</span>
                <font-awesome-icon class="awesomeicon ms-1" icon="fa-solid fa-caret-down" />
              </v-list-item-title>
            </template>
            <v-list>
              <v-list-item router :to="{name: 'Accommodations'}" @click="resetHeader">
                Accommodations
              </v-list-item>
              <v-list-item router :to="{name: 'SellAndBuy'}" @click="resetHeader">
                Sell & Buy
              </v-list-item>
              <v-list-item router :to="{name: 'WorkshopsAndTutors'}" @click="resetHeader">
                Workshops and Tutors
              </v-list-item>
              <v-list-item router :to="{name: 'Questions'}" @click="resetHeader">
                Q & A
              </v-list-item>
            </v-list>
          </v-menu>
          <router-link :to="{name: 'About'}" class="white--text mb-3 mb-md-0 me-md-5">
            <span class="font-weight-medium text-lg-h6" @click="resetHeader">About Us</span>
          </router-link>
          <router-link :to="{name: 'Contact'}" class="white--text mb-3 mb-md-0 me-md-5">
            <span class="font-weight-medium text-lg-h6" @click="resetHeader">Contact Us</span>
          </router-link>
          <v-btn class="signinbtn text-capitalize mb-3 mb-md-0 me-md-5" depressed>
            <span class="signin white--text">Sign In</span>
          </v-btn>
          <v-icon class="white--text searchicon" @click="searchBarToggel">mdi-magnify</v-icon>
        </div>
      </div>
      <div class="searchdiv d-flex align-center mx-auto">
        <v-text-field
          placeholder="Search Here..."
          background-color="white"
          type="search"
          class="mx-1 font-weight-regular rounded-lg"
          hide-details light outlined dense
        ></v-text-field>
        <v-btn outlined class="searchbtn text-h6 white--text">Go</v-btn>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'WebsiteHeader',
  data:()=>({
    countries: ['All','Saudi Arabia','Bahrain','Iraq','Kuwait','Oman','UAE','Qatar','Yemen','United Kingdom','United States'],
    languages: ['English','Arabic','Turkish','Chiness'],
    currencies: ['SAR','AED','KWD','QAR','USD','GBP'],
    country: 'All',
    lang: 'English',
    currency: 'SAR',
    headerHeight: 150,
  }),
  methods: {
    searchBarToggel(){
      this.headerHeight === 150 || this.headerHeight === 425
      ? this.headerHeight += 50 
      : this.headerHeight -= 50;
    },
    mobileNavbarToggel(){
      this.headerHeight === 150 
      ? this.headerHeight += 275
      : this.headerHeight === 475 
      ? this.headerHeight -= 325
      : this.headerHeight === 425
      ? this.headerHeight -= 275
      : this.headerHeight = 150;
    },
    resetHeaderWhenResize(){
      window.innerWidth >= 900 &&  window.innerWidth <= 1000 ? this.headerHeight = 150 : null
    },
    resetHeader(){
      this.headerHeight = 150
    }
  },
  created() {
    window.addEventListener("resize", this.resetHeaderWhenResize);
  },
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
header {
  background-color: $color_main_light;
  box-shadow: 0px 1px 7px #000;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  transition: 0.3s;
  nav {
    height: 44px;
    background-color: $color_main_dark;
    .navholder {
      width: 300px;
    }
    input[readonly="readonly"] {
      max-width: 1px;
    }
  }
  .mainhead {
    position: relative;
    .mainlogo {
      position: absolute;
      top: -25px;
      width: 110px;
      max-width: 65%;
    }
    .menuItems {
      span, .awesomeicon {
        transition: 0.3s;
        white-space: nowrap;
        &:not(.signin):hover, &:hover + .awesomeicon {
          color: $color_main_alternative!important;
        }
      }
      .searchicon:hover {
        color: $color_main_alternative!important;
      }
      .signinbtn {
        background-color: $color_main_dark!important;
        transition: 0.3s;
        &:hover {
          background-color: $color_main_alternative!important;
        }
      }
    }
    .searchdiv {
      width: 400px;
      max-width: 100%;
    }
  }
}
</style>