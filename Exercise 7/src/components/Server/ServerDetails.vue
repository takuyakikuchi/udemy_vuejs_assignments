<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a server</p>
    <p v-else>Selected server is #{{ server.id }}, status: {{ server.status }}</p>
  </div>
</template>

<script>
  import { serverBus } from '../../main.js'

  export default {
    data: function() {
      return {
        server: null
      }
    },
    created() {
      serverBus.$on('serverSelected', (server) => {
        this.server = server;
      });
    }
  }
</script>

<style>
</style>
