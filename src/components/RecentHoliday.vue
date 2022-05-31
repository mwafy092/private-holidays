<template>
  <section>
    <h1>Recent holiday locations</h1>
    <div class="swiper-container">
      <swiper
        :cssMode="true"
        :mousewheel="true"
        :slidesPerView="2"
        :spaceBetween="30"
        :grid="{
          rows: 2,
          fill: 'row',
        }"
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
          <div class="slide-card">
            <div class="slide-images">
              <img
                v-bind:src="`src/assets/${
                  sessionData[`${index}`]
                    ? sessionData[`${index}`]
                    : 'holiday1a.png'
                }`"
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
                  @click.stop="(e) => setMainImageId(e, index)"
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
              <button @click="testClick">BOOK NOW</button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// recent holidays js files - note: using swiper js
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/grid";
import { Navigation, Pagination, Mousewheel, Keyboard, Grid } from "swiper";
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
      document.querySelectorAll('div[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  },
  data() {
    return {
      roomFeaturesData: {
        bathrooms: Math.floor(Math.random() * (6 - 1 + 1) + 1),
        bedrooms: Math.floor(Math.random() * (6 - 1 + 1) + 1),
      },
      value: {},
      sessionData: {},
      mainImageId: { img: "holiday1a.png", id: "0" },
      swiperOptions: {
        preventClicks: false,
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
  watch: {
    value: function () {
      this.sessionData = JSON.parse(sessionStorage.getItem("selectedImg"));
    },
  },
  methods: {
    setMainImageId(e, index) {
      let imageId = e.target.src.substring(
        e.target.src.lastIndexOf("/") + 1,
        e.target.src.length
      );
      this.mainImageId.img = imageId;
      this.mainImageId.id = index;
      this.value = { ...this.value, [index]: imageId };
      sessionStorage.setItem("selectedImg", JSON.stringify(this.value));
    },
    testClick() {
      console.log("Thanks for booking");
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard, Grid],
    };
  },
};
</script>

<style lang="scss" scoped>
// scoped styles for recent holidays
@import "../assets/styles/holidays.scss";
</style>
