<template>
  <section>
    <h2>See latest vacation ideas</h2>
    <div class="swiper-container">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :keyboard="{
          enabled: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide>
          <img src="../assets/vacation1.png" alt="holiday image" />
          <div class="slide-tag">
            <p>Beachfront Escapes</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation1.png" alt="holiday image" />
          <div class="slide-tag">
            <p>Group Holidays</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation1.png" alt="holiday image" />
          <div class="slide-tag">
            <p>City Breaks</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation1.png" alt="holiday image" />
          <div class="slide-tag">
            <p>City Breaks</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation1.png" alt="holiday image" />
          <div class="slide-tag">
            <p>Beachfront Escapes</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation1.png" alt="holiday image" />
          <div class="slide-tag">
            <p>Beachfront Escapes</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// latest vacation js - note: using swiper js for sliders
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";

export default {
  name: "LatestVacation",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Pagination, Navigation],
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// scoped styles for latest vacation
@import "../assets/styles/vacation.scss";
</style>
