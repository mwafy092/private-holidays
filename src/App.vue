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

<style scoped>
.container {
  max-width: 1920px;
  padding: 0;
}
</style>
