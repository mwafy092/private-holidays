<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-fixed-top">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
        rel="noopener noreferrer nofollow"
        target="_blank"
        ><img src="../assets/logo.svg" alt="logo" class="logo"
      /></a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navbar-items" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link active"
              href="#"
              rel="noopener noreferrer nofollow"
              target="_blank"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              href="#"
              rel="noopener noreferrer nofollow"
              target="_blank"
              >Experiences</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              href="#"
              rel="noopener noreferrer nofollow"
              target="_blank"
              >Questions</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              href="#"
              rel="noopener noreferrer nofollow"
              target="_blank"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// NavBar JS
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
// styles for nav
@import "../assets/styles/navbar.scss";
</style>
