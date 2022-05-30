<template>
  <section>
    <h1>Why we are different</h1>
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
section {
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  .swiper-container {
    width: 100%;
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

.slide-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    width: 80px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }
  p {
    font-size: 13px;
  }
}
</style>
