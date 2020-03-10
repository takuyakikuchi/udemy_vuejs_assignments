<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="userInput"/>
        <div class="reverse-input">{{userInput | reverse}} ({{userInput | countLength}})</div>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: ''
    }
  },
  filters: {
    reverse(value) {
      return value.split("").reverse().join("");
    }
  }
};
</script>

<style>
</style>
