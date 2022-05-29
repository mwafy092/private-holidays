<template>
  <section>
    <h1>See latest vacation ideas</h1>
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
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide>
          <img src="../assets/vacation1.png" alt="" />
          <p class="slide-tag">Beachfront Escapes</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation2.png" alt="" />
          <p class="slide-tag">Group Holidays</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation3.png" alt="" />
          <p class="slide-tag">City Breaks</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation2.png" alt="" />
          <p class="slide-tag">Group Holidays</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/vacation3.png" alt="" />
          <p class="slide-tag">City Breaks</p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
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
          600: {
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
section {
  height: 400px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
  }
  .swiper-container {
    width: 70%;
  }
}
.swiper {
  width: 100%;
  height: 100%;
  padding: 40px 0;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  position: relative;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-tag {
  position: absolute;
  font-size: 13px;
  background-color: #fff;
  padding: 16px 0;
  margin: 0;
  bottom: 10px;
  width: 170px;
}
</style>
