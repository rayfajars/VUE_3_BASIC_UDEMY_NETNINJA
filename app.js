const app = Vue.createApp({
  //data, funcitons,events
  // template:'<h2>i am the template</h2>'
  data() {
    return {
      showBooks: true,
      title: "The Final Empira",
      author: "Erlangga",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
