const app = Vue.createApp({
  //data, funcitons,events
  // template:'<h2>i am the template</h2>'
  data() {
    return {
      title: "The Final Empira",
      author: "Erlangga",
      age: 45,
    };
  },
  methods:{
    changeTitle(title){
      // this.title = 'Judul berubah'

      this.title = title
    }
  }
});

app.mount("#app");
