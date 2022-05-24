<template>
  <div class="main">
    <NavBar />
    <HeaderSection />
    <section>See latest vacation ideas</section>
    <section>Recent holiday locations</section>
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

export default {
  name: "App",
  components: {
    NavBar,
    HeaderSection,
    FooterSection,
    ContactUs,
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
}
</style>
