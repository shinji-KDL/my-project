<template>
  <div class="loading">
      <p>Now Loading...</p>
  </div>
</template>

<script>
import PropertyStore from "../../models/PropertyStore.js";
export default {
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  updated: {
     judge:function(){
       if(sharedState.state.flagData.successFlag == true || sharedState.state.flagData.failedFlag == true ){
        //sharedState.state.flagData.loadFlag = false;
      }
     }
  }
}
</script>

<style scoped>
.loading{
  display: block;
  height: 3rem;
  font-size: xx-large;
  font-family:Impact;
}
</style>
