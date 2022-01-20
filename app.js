const app = Vue.createApp({
  //data, funcitons,events
  // template:'<h2>i am the template</h2>'
  data() {
    return {
      showBooks:true,
      title: "The Final Empira",
      author: "Erlangga",
      age: 45,
    };
  },methods:{
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    }
  }
});

app.mount("#app");
