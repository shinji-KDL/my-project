<template>
  <input class="input" v-model="sharedState.state.property.name" placeholder="   名前を入力してください">
</template>

<script>
//  インポートします。
import PropertyStore from '../../models/PropertyStore.js'

export default {
  name: 'nickname_input',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>
<style scoped>
.input{
  width: 130pt;
  height:30pt;
}
</style>