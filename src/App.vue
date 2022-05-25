<template>
  <div class="main">
    <NavBar />
    <HeaderSection />
    <LatestVacation />
    <RecentHoliday />
    <section>Why we are different</section>
    <ContactUs />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";
import ContactUs from "./components/ContactUs.vue";
import LatestVacation from "./components/LatestVacation.vue";
import RecentHoliday from "./components/RecentHoliday.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeaderSection,
    FooterSection,
    ContactUs,
    LatestVacation,
    RecentHoliday,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
.main {
  min-height: 100vh;
  width: 100%;
  max-width: 1920px;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  margin: auto;
  position: relative;
  background-color: #ddd;
}
</style>
