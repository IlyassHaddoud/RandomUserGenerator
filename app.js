const app = Vue.createApp({
  data() {
    return {
      first: "Itachi",
      last: "Uchiha",
      email: "Itachi.uchiha@konoha.me",
      picture: "./Itachi.png",
      gender: "male",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      this.first = results[0].name.first;
      this.last = results[0].name.last;
      this.gender = results[0].gender;
      this.email = results[0].email;
      this.picture = results[0].picture.large;
    },
  },
});
app.mount("#app");
