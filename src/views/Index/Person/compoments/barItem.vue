<template>
  <div class="bar-item"
       @click="clickBar">
    <div class="left">
      <slot name="barItem"></slot>
    </div>
    <div class="right">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    // const clickBar = ()=>{
    // }
  },
}
</script>

<style lang="less" scoped>
.bar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 5px 10px;
  .left {
  }
  .right {
    font-size: 16px;
  }
}
</style>