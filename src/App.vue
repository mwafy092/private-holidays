<template>
  <div class="container">
    <NavBar />
    <header>header</header>
    <section>See latest vacation ideas</section>
    <section>Recent holiday locations</section>
    <section>Why we are different</section>
    <section>Contact us</section>
    <footer>footer</footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
.container {
  max-width: 1920px;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
</style>
