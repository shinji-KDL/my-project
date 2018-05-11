<template>
  <div class="nickname">検索:{{ sharedState.state.property.name }}</div>
</template>

<script>
//  インポートします。
import PropertyStore from '../../models/PropertyStore.js'

export default {
  name: 'nickname_header',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>
<style scoped>
.nickname{
  display: block;
  height: 3rem;
}
</style>