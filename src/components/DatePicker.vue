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
.date-item {
  margin-right: 20px;
}
.date-container {
  display: flex;
  align-items: center;
}
.flex {
  display: flex;
  flex-direction: row-reverse;
  border-radius: 5px;
  input {
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    width: 200px;
  }
  span {
    display: flex;
    align-items: center;
    border-radius: 0 5px 5px 0;
    margin-left: -25px;
    z-index: 1;
    background: none;
    border: none;
  }
}
.date-icon {
  width: 15px;
}
.error {
  border: 1px solid red;
  border-radius: 5px;
  width: 202px;
  display: flex;
}
@media screen and (max-width: 1200px) {
  .date-item {
    margin-bottom: 20px;
    margin-right: 10px;
  }
  .date-container {
    flex-direction: column;
  }
}
</style>
