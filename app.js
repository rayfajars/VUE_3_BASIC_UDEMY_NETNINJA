const app = Vue.createApp({
  //data, funcitons,events
  // template:'<h2>i am the template</h2>'
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "books abcd",
          author: "ray",
        },
        {
          title: "books abcd 2",
          author: "ray 2",
        },
        {
          title: "books abcd 3",
          author: "ray 3",
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
