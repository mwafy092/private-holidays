<template>
  <header>
    <img src="../assets/header@2x.png" alt="header image" />
    <p>ENJOY FREEDOM LAND</p>
    <div class="form-container">
      <DropDownSelect
        :selectOptions="['Istanbul', 'Antalya', 'Konya']"
        @getLocation="setLocation($event)"
        placeholder="Destination"
        :class="[
          v$.location.required.$invalid && showRequired
            ? 'error-validation'
            : '',
        ]"
      ></DropDownSelect>
      <DropDownSelect
        :selectOptions="['2 BedRooms', '3 BedRooms', '5 BedRooms']"
        @getBedrooms="setBedrooms($event)"
        placeholder="Bedroom size"
        :class="[
          v$.bedrooms.required.$invalid && showRequired
            ? 'error-validation'
            : '',
        ]"
      ></DropDownSelect>
      <DatePicker
        @getDate="setDate($event, $event)"
        :errorValidation="{
          required: showRequired,
          start: v$.startDate.required.$invalid,
          end: v$.endDate.required.$invalid,
        }"
      ></DatePicker>

      <button @click="showFormData">
        <img src="../assets/redarrow.png" style="width: 30px" />
        <span>{{ formError }}</span>
      </button>
    </div>
  </header>
</template>

<script>
// Header JS - Note: importing dropdown and datePicker as separate components
import DropDownSelect from "./DropDownSelect.vue";
import DatePicker from "./DatePicker.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "HeaderSection",
  components: {
    DropDownSelect,
    DatePicker,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      location: "",
      bedrooms: "",
      startDate: "",
      endDate: "",
      formError: "",
      showRequired: false,
    };
  },
  validations() {
    return {
      location: {
        required,
      },
      bedrooms: {
        required,
      },
      startDate: {
        required,
      },
      endDate: {
        required,
      },
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
      this.showRequired = true;
      if (this.location && this.bedrooms && this.startDate && this.endDate) {
        console.log({
          location: this.location,
          bedrooms: this.bedrooms,
          startDate: this.startDate,
          endDate: this.endDate,
        });
        this.formError = "";
      } else {
        this.formError = "Empty fields";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// scoped styles for header
@import "../assets/styles/header.scss";
</style>
