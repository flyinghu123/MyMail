<template>
  <div id="tab-bar" :style="style">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    props: {
      height: {
        type: String,
        default: "49px"
      },
      fontSize: {
        type: String,
        default: "14px"
      }
    },
    computed: {
      style () {
        return {
          height: this.$props.height,
          fontSize: this.$props.fontSize
        }
      }
    }
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    /* box-shadow添加阴影 x y height color */
    box-shadow: 0px -1px 1px rgba(100, 100, 100, .2);
  }
</style>
