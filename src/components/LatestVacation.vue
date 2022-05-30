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
    width: 100%;
    .swiper {
      width: 100%;
      height: 100%;
      padding: 40px 0;
      position: relative;
      swiper-pagination {
        position: absolute;
        top: 0;
      }
    }
  }
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
  background-color: #fff;
  margin: 0;
  bottom: 10px;
  width: 180px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 13px;
    margin: 0;
    border: 1px solid #ddd;
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 1600px) {
  section {
    margin: 100px 0;
  }
}
</style>
