new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertOnClick: function() {
      alert("Hello world!");
    },
    updateValue: function(event) {
      this.value = event.target.value;
    }
  }  
});