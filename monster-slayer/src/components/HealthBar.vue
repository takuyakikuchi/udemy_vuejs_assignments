<template>
  <section class="row">
    <div class="small-6 columns">
      <h1 class="text-center">YOU</h1>
      <div class="healthbar">
        <div class="healthbar text-center" 
              style="background-color: green; margin: 0; color: white;"
              :style="{width: healthBar.player + '%'}" 
        >
          {{ healthBar.player }}
        </div>
      </div>
    </div>
    <div class="small-6 columns">
      <h1 class="text-center">MONSTER</h1>
      <div class="healthbar">
        <div class="healthbar text-center" 
              style="background-color: green; margin: 0; color: white;"
              :style="{width: healthBar.monster + '%'}" 
        >
          {{ healthBar.monster }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "HealthBar",
    props: ["healthBar"]
  }
</script>

<style>
  .text-center {
    text-align: center;
  }
  .healthbar {
    width: 80%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
  }
</style>
