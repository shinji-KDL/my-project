<<template>
  <div>
    <ul>
      <li>氏名:{{sharedState.state.personalData.name}}</li>
      <li>カード番号:{{sharedState.state.personalData.card}}</li>
      <li>住所:{{sharedState.state.personalData.address}}</li>
    </ul>
  </div>
</template>
<script>

import axios from "axios";
import PropertyStore from "../../models/PropertyStore.js";

export default {
  data: function() {
    return {
      privateState: {},
      sharedState: PropertyStore,
      count: 0
    };
  },
  methods: {
    getResponse: function() {
      axios
        .get(
          "https://uynw1vhdl9.execute-api.us-east-2.amazonaws.com/test_stage"
        )
        .then(response => {
          console.log(response.data); // API Gateway response data
          console.log(response.status); // 200
          this.sharedState.state.personalData = response.data;
          this.count++;
        });
    }
  }
};
</script>

<style scoped>
.getRes {
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
