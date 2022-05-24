<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
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
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Experiences</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Questions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
nav {
  background: #fff;
  .logo {
    width: 220px;
  }
  .nav-link {
    font-size: 14px;
  }
}
.navbar-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
