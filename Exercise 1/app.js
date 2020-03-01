const app = new Vue({
  el: '#exercise',
  data: {
    name: 'Takuya Kikuchi',
    age: 29,
    chelsea: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/07/05/02/franklampard0507d.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70",
  },
  methods: {
    randomFloat: function() {
      return Math.random();
    }
  }
})