<template>
  <div class="row">
    <Quote 
      v-for="(quote, index) in quotes" 
      :key="quote"
      @click.native="selectedQuote(index)"
    >
        {{ quote }}
    </Quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    props: ['quotes'],
    components: {
      Quote,
    },
    methods: {
      selectedQuote(index) {
        this.$emit('deleteQuote', index);
      }
    }
  }
</script>

<style>
</style>
