<template>
  <div>
    <HealthBar :healthBar="healthBar" />
    <ActionButtons
      :gameOn="gameOn"
      @startGame="startGame"
      @giveUp="giveUp"
      @attack="attack"
      @specialAttack="specialAttack"
      @heal="heal"
    />
    <Log :logs="logs" />
  </div>
</template>

<script>
import HealthBar from "./components/HealthBar.vue";
import ActionButtons from "./components/ActionButtons.vue";
import Log from "./components/Log.vue";

export default {
  name: "App",
  data() {
    return {
      gameOn: false,
      healthBar: {
        player: 100,
        monster: 100
      },
      logs: []
    };
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
        message: "Player hits Monster for " + damage
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    specialAttack: function() {
      const damage = this.calcurateDamage(7, 14);
      this.healthBar.monster -= damage;
      this.logs.unshift({
        isPlayer: true,
        message: "Player kicks Monster for " + damage
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    heal: function() {
      const heal = Math.floor(Math.random() * 10) + 1;
      this.healthBar.player += heal;
      this.logs.unshift({
        isPlayer: true,
        message: "Player heals for " + heal
      });
      this.monsterAttacks();
    },
    monsterAttacks: function() {
      const damage = this.calcurateDamage(1, 10);
      this.healthBar.player -= damage;
      this.logs.unshift({
        isPlayer: false,
        message: "Monster hits Player for " + damage
      });
      this.checkWin();
    },
    calcurateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if (this.healthBar.monster <= 0) {
        if (confirm("You won! New game?")) {
          this.startGame();
        } else {
          this.gameOn = false;
        }
        return true;
      } else if (this.healthBar.player <= 0) {
        if (confirm("You lost... New game?")) {
          this.startGame();
        } else {
          this.gameOn = false;
        }
        return true;
      }
      return false;
    }
  },
  components: {
    HealthBar,
    ActionButtons,
    Log
  }
};
</script>

<style>
.controls,
.log {
  margin-top: 30px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 3px 6px #ccc;
}
</style>
