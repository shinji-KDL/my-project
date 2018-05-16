<template>
  <div>
    <button class="button" v-on:click="validate">START</button>
  </div>
</template>

<script>
//  インポートします。
import PropertyStore from "../../models/PropertyStore.js";
import axios from "axios";

export default {
  name: "input-button",
  data: function() {
    return {
      privateState: {},
      sharedState: PropertyStore,
    };
  },
  methods: {
    validate: function(event) {
      let valid = false;
      let flag = this.sharedState.state.flagData;
      const params = { name: this.$data.sharedState.state.property.name };
      flag.loadFlag = true;
      flag.successFlag = false;
      flag.failedFlag = false;

      try {
        valid = this.$data.sharedState.validate();
        let testData = [];
        if (valid) {
          axios
            .get(
              "https://uynw1vhdl9.execute-api.us-east-2.amazonaws.com/test_stage",
              { params }
            )
            .then(response => {
              flag.loadFlag = false;
              flag.successFlag = true;
              console.log(response.data); // API Gateway response data
              console.log(response.status); // 200
              console.log(params); // 200
              //this.sharedState.state.personalData = response.data;
              this.sharedState.state.personalList.data = response.data;
              console.log("Test Data:" + this.sharedState.state.personalList.data[0].name);
            })
            .catch(error => {
              flag.loadFlag = false;
              flag.failedFlag = true;
              console.log(error.response.status); // 404
              console.log("失敗");
            });
        }
        this.$router.push("/scene2");
      } catch (e) {
        alert(e.message);
      }
    },
    showScene: function() {
      this.$router.push("/scene2");
    }
  }
};
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