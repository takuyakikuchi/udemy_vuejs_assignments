<template>
  <div>
    <!-- Health bar section -->
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
    <!-- Start new game section -->
    <section class="row controls" v-if="!gameOn">
      <div class="small-12 columns">
        <button id="start-game" @click="startGame()">START NEW GAME</button>
      </div>
    </section>
    <!-- Action buttons section -->
    <section class="row controls" v-else>
      <div class="small-12 columns">
        <button id="attack" @click="attack">ATTACK</button>
        <button id="special-attack"  @click="specialAttack">SPECIAL ATTACK</button>
        <button id="heal" @click="heal">HEAL</button>
        <button id="give-up" @click="giveUp">GIVE UP</button>
      </div>
    </section>
    <!-- Log section -->
    <section class="row log">
      <div class="small-12 columns">
        <ul>
          <li v-for="log in logs"
              :class="{'player-turn': log.isPlayer, 'monster-turn': !log.isPlayer}"
          >
            {{ log.message }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        gameOn: false,
        healthBar: {
          player: 100,
          monster: 100,
        },
        logs: [],
      }
    },
    methods: {
      startGame: function() {
        this.gameOn = true;
        this.healthBar.player = 100;
        this.healthBar.monster = 100;
        this.logs = [];
      },
      giveUp: function() {
        this.gameOn = false;
      },
      attack: function() {
        const damage = this.calcurateDamage(1, 7); 
        this.healthBar.monster -= damage;
        this.logs.unshift({
          isPlayer: true,
          message: 'Player hits Monster for ' + damage,
        });
        if(this.checkWin()){
          return;
        }
        this.monsterAttacks();
      },
      specialAttack: function() {
        const damage = this.calcurateDamage(7, 14);
        this.healthBar.monster -= damage;
        this.logs.unshift({
          isPlayer: true,
          message: 'Player kicks Monster for ' + damage,
        });
        if(this.checkWin()){
          return;
        }
        this.monsterAttacks();
      },
      heal: function() {
        const heal = Math.floor(Math.random() * 10) + 1;
        this.healthBar.player += heal;
        this.logs.unshift({
          isPlayer: true,
          message: 'Player heals for ' + heal,
        });
        this.monsterAttacks();
      },
      monsterAttacks: function() {
        const damage = this.calcurateDamage(1, 10);
        this.healthBar.player -= damage;
        this.logs.unshift({
          isPlayer: false,
          message: 'Monster hits Player for ' + damage,
        });
        this.checkWin();
      },
      calcurateDamage: function(min, max) {
        return Math.max(Math.floor(Math.random() * max) + 1, min);
      },
      checkWin: function() {
        if(this.healthBar.monster <= 0){
          if(confirm('You won! New game?')){
            this.startGame();  
          } else {
            this.gameOn = false;
          }
          return true;
        } else if(this.healthBar.player <= 0){
          if(confirm('You lost... New game?')){
            this.startGame();  
          } else {
            this.gameOn = false;
          }
          return true;
        }
        return false;
      }
    }
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
  .controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
  }
  .turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
  }
  .log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
  }
  .log ul li {
    margin: 5px;
  }
  .log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
  }
  .log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
  }
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
