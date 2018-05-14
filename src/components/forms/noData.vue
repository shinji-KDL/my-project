<template>
<div class="noData">
<nickname-header></nickname-header>
<br>
検索結果がありません
<br>
<return-page></return-page>
</div>
</template>

<script>
import Vue from "vue";
import NameHeader from './nameHeader.vue'
import Return from './return.vue'

export default {
  
}

//  コンポーネントを登録
Vue.component("nickname-header", NameHeader);
//  コンポーネントを登録
Vue.component("return-page", Return);

</script>

<style scoped lang="scss">
.noData {
  font-size: 1.8rem;
  text-align: center;
}
</style>