<template>
  <div>
    <Multiselect
      v-model="value"
      :options="selectOptions"
      @click="passEvent"
      :placeholder="placeholder"
      :allow-empty="false"
    />
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
    placeholder: String,
  },
  data() {
    return {
      value: null,
    };
  },
  watch: {
    value: function (val) {
      this.$emit("getLocation", val);
      this.$emit("getBedrooms", val);
    },
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
