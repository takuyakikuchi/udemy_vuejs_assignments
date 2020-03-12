<template>
  <div>
    <!-- Start new game section -->
    <section class="row controls" v-if="!gameOn">
      <div class="small-12 columns">
        <button id="start-game" @click="$emit('startGame')">START NEW GAME</button>
      </div>
    </section>
    <!-- Action buttons section -->
    <section class="row controls" v-else>
      <div class="small-12 columns">
        <button id="attack" @click="$emit('attack')">ATTACK</button>
        <button id="special-attack"  @click="$emit('specialAttack')">SPECIAL ATTACK</button>
        <button id="heal" @click="$emit('heal')">HEAL</button>
        <button id="give-up" @click="$emit('giveUp')">GIVE UP</button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ActionButtons",
    props: ["gameOn"]
  }
</script>

<style>
  button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
  }
  #start-game {
    background-color: #aaffb0;
  }
  #start-game:hover {
    background-color: #76ff7e;
  }
  #attack {
    background-color: #ff7367;
  }
  #attack:hover {
    background-color: #ff3f43;
  }
  #special-attack {
    background-color: #ffaf4f;
  }
  #special-attack:hover {
    background-color: #ff9a2b;
  }
  #heal {
    background-color: #aaffb0;
  }
  #heal:hover {
    background-color: #76ff7e;
  }
  #give-up {
    background-color: #ffffff;
  }
  #give-up:hover {
    background-color: #c7c7c7;
  }
</style>
