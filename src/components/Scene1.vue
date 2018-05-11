<template>
  <div class="scene1">
    <input-text></input-text>
    <nickname-header></nickname-header>
    <input-button></input-button>
  </div>
</template>

<script>
//  インポート
import Vue from "vue";
import NameHeader from "./forms/nameHeader.vue";
import InputButton from "./forms/inputButton.vue";
import InputText from "./forms/inputText.vue";
import axios from "axios";

//  デフォルト値定義
export default {
  
};

//  コンポーネントを登録
Vue.component("nickname-header", NameHeader);
//  コンポーネントを登録
Vue.component("input-text", InputText);
//  コンポーネントを登録
Vue.component("input-button", InputButton);

</script>


  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scene1 {
  font-size: 1.8rem;
  text-align: center;
  a div p {
    display: block;
    margin: 0 auto;
    height: 30pt;
  }
}
.input {
  width: 130pt;
  height: 30pt;
}
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
</style>