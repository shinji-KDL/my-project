<template>
  <div>
    <button class="button" v-on:click="back">検索画面に戻る</button>
  </div>
</template>

<script>
import PropertyStore from '../../models/PropertyStore.js'

export default {
  name: "return-page",
  data:function(){
      return{}
  },
  methods: {
      back:function(){
          this.$router.push("/");
      }
  }
}
</script>
<style>
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 110pt;
  background-color: white;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
</style>