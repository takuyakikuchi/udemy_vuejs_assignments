<template>
  <div class="form-group">
    <label for="name">Name</label>
    <input
      type="text"
      class="form-control"
      id="name"
      v-model="name"
      @input="nameUpdate"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    nameUpdate() {
      this.$emit('input', this.name);
    }
  }
};
</script>

<style>
</style>
