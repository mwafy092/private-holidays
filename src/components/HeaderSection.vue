<template>
  <header>
    <img src="../assets/header@2x.png" alt="header image" />
    <p>ENJOY FREEDOM LAND</p>
    <div class="form-container">
      <DropDownSelect
        :selectOptions="['Istanbul', 'Antalya', 'Konya']"
        @getLocation="setLocation($event)"
      ></DropDownSelect>
      <DropDownSelect
        :selectOptions="['2 BedRooms', '3 BedRooms', '5 BedRooms']"
        @getBedrooms="setBedrooms($event)"
      ></DropDownSelect>

      <DatePicker @getDate="setDate($event, $event)"></DatePicker>

      <button @click="showFormData">
        <img src="../assets/redarrow.png" style="width: 30px" />
        <span>{{ formError }}</span>
      </button>
    </div>
  </header>
</template>

<script>
import DropDownSelect from "./DropDownSelect.vue";
import DatePicker from "./DatePicker.vue";
export default {
  name: "HeaderSection",
  components: {
    DropDownSelect,
    DatePicker,
  },
  data() {
    return {
      location: "",
      bedrooms: "",
      startDate: "",
      endDate: "",
      formError: "",
    };
  },
  methods: {
    setLocation(location) {
      this.location = location;
    },
    setBedrooms(bedrooms) {
      this.bedrooms = bedrooms;
    },
    setDate(dates) {
      this.startDate = new Date(dates.startDate).toDateString();
      this.endDate = new Date(dates.endDate).toDateString();
    },
    showFormData() {
      if (this.location && this.bedrooms && this.startDate && this.endDate) {
        console.log({
          location: this.location,
          bedrooms: this.bedrooms,
          startDate: this.startDate,
          endDate: this.endDate,
        });
      } else {
        this.formError = "Empty fields";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
  .form-container {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
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
      margin: 0 10px;
    }
    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
        color: red;
        font-size: 13px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  header {
    p {
      top: 30%;
    }
    .form-container {
      top: 0;
      display: flex;
      flex-direction: column;
      height: fit-content;
      width: 100vw;
      position: relative;
      padding: 20px;
      div {
        margin-bottom: 24px;
      }
      button {
        margin-top: 10px;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  header {
    p {
      font-size: 28px;
    }
  }
}
</style>
