<template>
  <header>
    <img src="../assets/header@2x.png" alt="header image" />
    <p>ENJOY FREEDOM LAND</p>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style lang="scss">
header {
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }
}
</style>
