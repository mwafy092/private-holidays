<template>
  <div class="main">
    <NavBar />
    <HeaderSection />
    <div class="container">
      <LatestVacation />
      <RecentHoliday />
      <FeaturesSection />
    </div>
    <ContactUs />
    <FooterSection />
  </div>
</template>

<script>
// Main Js File
import NavBar from "./components/NavBar.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";
import ContactUs from "./components/ContactUs.vue";
import LatestVacation from "./components/LatestVacation.vue";
import RecentHoliday from "./components/RecentHoliday.vue";
import FeaturesSection from "./components/FeaturesSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeaderSection,
    FooterSection,
    ContactUs,
    LatestVacation,
    RecentHoliday,
    FeaturesSection,
  },
};
</script>

<style>
/* Main CSS For Main Container */
@import "./assets/styles/main.scss";
</style>
