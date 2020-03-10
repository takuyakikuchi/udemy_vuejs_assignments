<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <button class="btn btn-primary" v-customOn:click="clicked">Click me</button>
        <hr />
        <div 
          style="width: 100px; height: 100px; background-color: lightgreen"
          v-customOn:mouseenter="mouseEntered"
          v-customOn:mouseleave="mouseLeft"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("The button was clicked!");
    },
    mouseEntered() {
      console.log("Mouse entered!");
    },
    mouseLeft() {
      console.log("Mouse left!");
    }
  }
};
</script>

<style>
</style>
