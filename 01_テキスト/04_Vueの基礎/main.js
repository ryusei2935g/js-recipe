new Vue({
  el: "#app",
  date: {
    count: 0,
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
  },
})
