<template>
  <div id="app">
    <router-view/>
    <tab-bar>
      <tab-bar-item>
        <span slot="item-text">asdfasd</span>
      </tab-bar-item>
      <tab-bar-item>
        <span slot="item-text">asdfasd</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar.vue"
  import TabBarItem from "@/components/common/tabbar/TabBarItem.vue"
  export default {
    name: 'app',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "~@/assets/css/normalize.css"
  @import "~@/assets/css/base.css"
</style>
