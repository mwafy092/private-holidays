<template>
  <div>
    <Multiselect v-model="value" :options="selectOptions" />
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
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
