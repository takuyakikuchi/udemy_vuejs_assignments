<template>
  <div class="container">
    <Header 
      :maxCount="maxQuote" 
      :quoteCount="quotes.length"/>
    <NewQuote @newQuote="addQuote"/>
    <QuoteGrids :quotes="quotes" @deleteQuote="deleteQuote"/>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Click on a quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import NewQuote from './components/NewQuote.vue';
import QuoteGrids from './components/QuoteGrids.vue';

export default {
  data: function() {
    return {
      quotes: [
        'Test quote'
      ],
      maxQuote: 10
    }
  },
  components: {
    QuoteGrids,
    NewQuote,
    Header
  },
  methods: {
    addQuote(quote) {
      if(this.quotes.length >= this.maxQuote) {
        return alert('Reaching maximum number! Please delete a quote first!');
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
