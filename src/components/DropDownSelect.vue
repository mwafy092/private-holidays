<template>
  <div>
    <Multiselect v-model="value" :options="selectOptions" @click="passEvent" />
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  name: "DropDownSelect",
  components: {
    Multiselect,
  },
  props: {
    selectOptions: Array,
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    passEvent() {
      this.$emit("getLocation", this.value);
      this.$emit("getBedrooms", this.value);
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
