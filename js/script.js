// data object
var data = {
  message: "I'm a dirty cumboi",
  number: 69,
  fartcount: 0
}

var vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    fart: function (e) {
      this.fartcount += 1;
    }
  }
})