<template>
  <div>
    <button class="button" v-on:click="validate">START</button>
    <transition name="fade">
    <h1 v-if="show" v-on="showScene"></h1>
    </transition>
  </div>
</template>

<script>
//  インポートします。
import PropertyStore from "../../models/PropertyStore.js";
import axios from "axios";
import Scene2 from "../Scene2.vue";

export default {
  name: "input-button",
  data: function() {
    return {
      privateState: {},
      sharedState: PropertyStore,
      show: false,
      status: 200
    };
  },
  methods: {
    validate: function(event) {
      console.log(this.$el);
      let valid = false;
      const params = { name: this.$data.sharedState.state.property.name };
      try {
        valid = this.$data.sharedState.validate();
        if (valid) {
          axios
            .get(
              "https://uynw1vhdl9.execute-api.us-east-2.amazonaws.com/test_stage",
              { params }
            )
            .then(response => {
              console.log(response.data); // API Gateway response data
              console.log(response.status); // 200
              console.log(params); // 200
              this.sharedState.state.personalData = response.data;
              this.status = response.status;
              this.$router.push("/scene2");
            })
            .catch(error => {
              console.log(error.response.status); // 200
              console.log("失敗");
              this.$router.push("/scene2");
            });
        }
      } catch (e) {
        alert(e.message);
      }
    },
    showScene: function() {
      this.$router.push("/scene2");
    }
  }
};

//  コンポーネントを登録
//Vue.component("scene2", Scene2);
</script>


<style scoped>
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  background-color: white;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>