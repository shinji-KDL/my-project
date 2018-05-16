<template>
<div>

  <div v-if="sharedState.state.flagData.loadFlag">
    <load-page></load-page>
  </div>

  <div class="scene2" v-if="sharedState.state.flagData.successFlag">
    <nickname-header></nickname-header>
    <table-data></table-data>
    <return-page></return-page>
  </div>

  <div v-if="sharedState.state.flagData.failedFlag">
    <no-data></no-data>
    <return-page></return-page>
  </div>

</div>
</template>

<script>
//  インポート
import Vue from "vue";
import NameHeader from "./forms/nameHeader.vue";
import GetRes from "./forms/getRes.vue";
import Return from "./forms/return.vue";
import PropertyStore from "../models/PropertyStore.js";
import Loading from "./forms/loading.vue";
import NoData from "./forms/noData.vue";
import Table from "./forms/table.vue";

//  デフォルト値定義
export default {
  data() {
    return {
      privateState: {},
      sharedState: PropertyStore
    };
  }
};
//  コンポーネントを登録
Vue.component("nickname-header", NameHeader);
//  コンポーネントを登録
Vue.component("get-res", GetRes);
//  コンポーネントを登録
Vue.component("return-page", Return);
//  コンポーネントを登録
Vue.component("load-page", Loading);
//  コンポーネントを登録
Vue.component("no-data", NoData);
//  コンポーネントを登録
Vue.component("table-data", Table);
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scene2 {
  font-size: 1.8rem;
  text-align: center;
}
</style>