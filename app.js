const app = Vue.createApp({
  //data, funcitons,events
  // template:'<h2>i am the template</h2>'
  data() {
    return {
      url:'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        {
          title: "books abcd",
          author: "ray",
          img:'assets/1.jpg',
          isFav:true
        },
        {
          title: "books abcd 2",
          author: "ray 2",
          img:'assets/1.jpg',
          isFav:false
        },
        {
          title: "books abcd 3",
          author: "ray 3",
          img:'assets/1.jpg',
          isFav:true
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },toggleFav(book){
      book.isFav = !book.isFav
    }
  },
});

app.mount("#app");
