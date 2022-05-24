<template>
  <header>
    <img src="../assets/header@2x.png" alt="header image" />
    <p>ENJOY FREEDOM LAND</p>
    <form>
      <DropDownSelect
        :selectOptions="['Istanbul', 'Antalya', 'Konya']"
      ></DropDownSelect>
      <DropDownSelect
        :selectOptions="['2 BedRooms', '3 BedRooms', '5 BedRooms']"
      ></DropDownSelect>
      <v-calendar />
      <v-date-picker v-model="date" />
    </form>
  </header>
</template>

<script>
import DropDownSelect from "./DropDownSelect.vue";

export default {
  name: "HeaderSection",
  components: {
    DropDownSelect,
  },
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
    font-size: 40px;
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }
  form {
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 10px;
    height: 100px;
    width: 85vw;
    margin: auto;
    position: absolute;
    bottom: -50px;
    right: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    div {
      width: 200px;
    }
  }
}
</style>
