<template>
    <div>
        <table align="center" border="1">
            <tr>
                <th>名前</th>
                <th>カード番号</th>
                <th>住所</th>
            </tr>
            <tr v-for="(item,index) in sharedState.state.personalList.data" 
                v-bind="item" v-bind:key="index">
                <td>{{item.name}}</td>
                <td>{{item.card}}</td>
                <td>{{item.address}}</td>
            </tr>
            
        </table>
    </div>
</template>

<script>
import PropertyStore from "../../models/PropertyStore.js";
import Vue from 'vue'

export default {
  data: function() {
    return {
      privateState: {},
      sharedState: PropertyStore,
      lists:[]
    };
  }
};
</script>

<style>
.tbl {
  text-align: center;
}
</style>
