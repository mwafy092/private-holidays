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
        :navigation="true"
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
                <div>
                  <img
                    src="../assets/bed.png"
                    alt="bed "
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="bedroom"
                  />
                  <span>{{ roomFeaturesData.bedrooms }}</span>
                </div>
                <div>
                  <img
                    src="../assets/bath.png"
                    alt="pool"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="bathroom"
                  />
                  <span>{{ roomFeaturesData.bathrooms }}</span>
                </div>
                <div>
                  <img
                    src="../assets/beachfront.png"
                    alt="beachfront"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="beachfront"
                  />
                </div>
                <div>
                  <img
                    src="../assets/pool.png"
                    alt="pool"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="pool"
                  />
                </div>
              </div>
              <button>BOOK NOW</button>
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
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";

export default {
  name: "RecentHoliday",
  components: {
    Swiper,
    SwiperSlide,
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
          1900: {
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
section {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  .swiper-container {
    width: 70%;
  }
}
.swiper {
  width: 100%;
  height: fit-content;
  padding: 40px 0;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
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
  width: 600px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  margin-bottom: 10px;
  .slide-images {
    display: grid;
    img {
      height: 100%;
      object-fit: cover;
      max-height: 200px;
    }
    .slide-images-thumps {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
  .slide-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h2 {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 13px;
      text-align: left;
    }
    .slide-content-features {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        margin-right: 10px;
        img {
          width: 20px;
          margin-right: 5px;
        }
        span {
          font-size: 14px;
        }
      }
    }
    button {
      border: none;
      background-color: red;
      color: #fff;
      font-size: 13px;
      padding: 10px 20px;
      border-radius: 40px;
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 900px) {
  section {
    .swiper-container {
      width: 90vw;
    }
  }
}
@media screen and (max-width: 700px) {
  .slide-card {
    width: 100%;
    grid-template-columns: 1fr;
    margin-bottom: 50px;
  }
}
</style>
