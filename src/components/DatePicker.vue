<template>
  <v-date-picker
    class="inline-block h-full date-item"
    v-model="startDate"
    :max-date="endDate"
    :class="[errorValidation.required && errorValidation.start ? 'error' : '']"
  >
    <template v-slot="{ inputValue, togglePopover }">
      <div class="flex items-center">
        <span>
          <img
            src="../assets/date.png"
            alt="dropdown"
            class="date-icon"
            @click="togglePopover()"
          />
        </span>
        <input
          :value="inputValue"
          class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
          readonly
        />
      </div>
    </template>
  </v-date-picker>
  <v-date-picker
    class="inline-block h-full date-item"
    v-model="endDate"
    :min-date="startDate"
    :class="[errorValidation.required && errorValidation.end ? 'error' : '']"
  >
    <template v-slot="{ inputValue, togglePopover }">
      <div class="flex items-center">
        <span @click="togglePopover()">
          <img src="../assets/date.png" alt="dropdown" class="date-icon" />
        </span>
        <input
          :value="inputValue"
          class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
          readonly
        />
      </div>
    </template>
  </v-date-picker>
</template>

<script>
export default {
  name: "DatePicker",
  data() {
    return {
      startDate: new Date().toDateString(),
      endDate: new Date().toDateString(),
    };
  },
  props: {
    errorValidation: Object,
  },
  watch: {
    startDate: function (date) {
      this.$emit("getDate", {
        startDate: date,
        endDate: this.endDate,
      });
    },
    endDate: function (date) {
      this.$emit("getDate", {
        startDate: this.startDate,
        endDate: date,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// date picker styles
@import "../assets/styles/datePicker.scss";
</style>
