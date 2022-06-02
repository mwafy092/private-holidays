<template>
  <section>
    <h2>Why we are different</h2>
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
          <div class="slide-card">
            <img src="../assets/feature1.png" alt="features" />
            <h2>Tailor-Made Packages</h2>
            <p>
              When it comes to delivering the best planned holiday package to
              you, we strive to exceed your expectations. For us, it has to be
              spot-on. We do what we do in the ideal way possible.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-card">
            <img src="../assets/feature2.png" alt="features" />
            <h2>Best Experience</h2>
            <p>
              At Purplerain Holidays, we choose to put forth an essence of our
              own expertise and firsthand experiences into our services and
              method of planning.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-card">
            <img src="../assets/feature3.png" alt="features" />
            <h2>Exquisite Service</h2>
            <p>
              From the moment you make the first call to enquire, our services
              are geared up. From the time booking, to your stay and well after
              the trip as well, we will guide you and be at your back and call.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-card">
            <img src="../assets/feature1.png" alt="features" />
            <h2>Tailor-Made Packages</h2>
            <p>
              When it comes to delivering the best planned holiday package to
              you, we strive to exceed your expectations. For us, it has to be
              spot-on. We do what we do in the ideal way possible.
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// features section js file - note: using swiper js for slider
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";

export default {
  name: "FeaturesSection",
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
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// scoped styles for features section
@import "../assets/styles/features.scss";
</style>
