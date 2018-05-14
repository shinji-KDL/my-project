<template>
  <div class="scene2">
    <nickname-header></nickname-header>
    <get-res></get-res>
  </div>
</template>

<script>
//  インポート
import Vue from "vue";
import NameHeader from './forms/nameHeader.vue'
import GetRes from "./forms/getRes.vue";

//  デフォルト値定義
export default {
  data() {
    return {};
  }
};
//  コンポーネントを登録
Vue.component("nickname-header", NameHeader);
//  コンポーネントを登録
Vue.component("get-res", GetRes);

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scene2 {
  font-size: 1.8rem;
  text-align: center;
}
</style>