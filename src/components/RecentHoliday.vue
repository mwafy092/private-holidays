<template>
  <section>
    <h1>Recent holiday locations</h1>
    <div class="swiper-container">
      <swiper
        :slidesPerView="2"
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
        <swiper-slide v-for="(item, index) in 5" :key="index">
          <div class="slide-card" v-for="(card, index) in 2" :key="card">
            <div class="slide-images">
              <img
                v-bind:src="`src/assets/` + 'holiday1a.png'"
                v-if="index !== mainImageId.id"
                alt="holiday image"
              />
              <img
                v-bind:src="`src/assets/` + mainImageId.img"
                v-else
                alt="holiday image"
              />
              <div class="slide-images-thumps">
                <img
                  src="../assets/holiday1a.png"
                  @click="(e) => setMainImageId(e, index)"
                  alt="holiday image"
                />
                <img
                  src="../assets/holiday1b.png"
                  @click="(e) => setMainImageId(e, index)"
                  alt="holiday image"
                />
                <img
                  src="../assets/holiday1c.png"
                  @click="(e) => setMainImageId(e, index)"
                  alt="holiday image"
                />
              </div>
            </div>
            <div class="slide-content">
              <h2>Montage Kapalua</h2>
              <p>
                Located only a jaunt from Kahului airport, you’ll be greeted by
                an easy and scenic drive along the West Maui Mountains and
                crystal blue waters of the Pacific Ocean.
              </p>
              <div class="slide-content-features">
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="bedroom"
                >
                  <img src="../assets/bed.png" alt="bed " />
                  <span>{{ roomFeaturesData.bedrooms }}</span>
                </div>
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="bathroom"
                >
                  <img src="../assets/bath.png" alt="bathroom" />
                  <span>{{ roomFeaturesData.bathrooms }}</span>
                </div>
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="beachfront"
                >
                  <img src="../assets/beachfront.png" alt="beachfront" />
                </div>
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="pool"
                >
                  <img src="../assets/pool.png" alt="pool" />
                </div>
              </div>
              <button>BOOK NOW</button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <button
        type="button"
        class="btn btn-secondary me-2"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Tooltip on left"
      >
        Tooltip on left
      </button>
    </div>
  </section>
</template>

<script>
// recent holidays js files - note: using swiper js
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  name: "RecentHoliday",
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  },
  data() {
    return {
      roomFeaturesData: {
        bathrooms: Math.floor(Math.random() * (6 - 1 + 1) + 1),
        bedrooms: Math.floor(Math.random() * (6 - 1 + 1) + 1),
      },
      mainImageId: { img: "holiday1a.png", id: "0" },
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  methods: {
    setMainImageId(e, index) {
      let imageId = e.target.src.substring(
        e.target.src.lastIndexOf("/") + 1,
        e.target.src.length
      );
      this.mainImageId.img = imageId;
      this.mainImageId.id = index;
    },
  },
  setup() {
    return {
      modules: [Keyboard, Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
// scoped styles for recent holidays
@import "../assets/styles/holidays.scss";
</style>
