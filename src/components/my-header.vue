<template>
  <div class="my-header">
    <div class="left">
      <van-icon name="location" />
    </div>
    <div class="center">
      <div class="center-title">新风商城</div>
      <div class="center-search">
        <span>山河无恙 人间捷安</span>
      </div>
    </div>
    <div class="right">
      <van-icon name="manager-o" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
}
</script>

<style lang="less" scoped>
.my-header {
  width: 100%;
  height: 40px;
  background-color: #1baeae;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  z-index: 999;
  .left,
  .right {
    font-size: 20px;
    color: #fff;
  }

  .center {
    background-color: #bbe7e7;
    display: flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 20px;
    &-title {
      font-size: 18px;
      font-weight: 700;
      color: #1baeae;
      border-right: 1px solid #ccc;
      padding: 0 10px;
    }
    &-search {
      padding: 0 10px;
    }
  }
}
</style>