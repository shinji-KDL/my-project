<template>
  <button class="button" v-on:click="validate">START</button>
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
      sharedState: PropertyStore
    };
  },
  methods: {
    validate: function(event) {
      console.log(this.$el);
      let valid = false;
      try {
        valid = this.$data.sharedState.validate();
        if (valid) {
            const params = { name : this.$data.sharedState.state.property.name };
          axios
            .get(
              "https://uynw1vhdl9.execute-api.us-east-2.amazonaws.com/test_stage",{params}
            )
            .then(response => {
              console.log(response.data); // API Gateway response data
              console.log(response.status); // 200
              console.log(params); // 200
              this.sharedState.state.personalData = response.data;
              this.count++;
            });
          this.$router.push("/scene2");
        }
      } catch (e) {
        alert(e.message);
      }
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
</style>