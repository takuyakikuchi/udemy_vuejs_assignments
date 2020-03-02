new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
     highlight: false,
     shrink: true
    },
    bold: 'font-bold',
    fontRed: 'font-red',
    color: 'green',
    effectOn: true,
    myStyle: {
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      const vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink; 
      }, 1000);
    },
    startProgress: function() {
      const vm = this;
      let width = 0;
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
