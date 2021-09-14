<template>
  <div class="other-header">
    <div class="left"
         @click="goBack">
      <van-icon name="arrow-left" />
    </div>
    <div class="center">
      <slot name="headerTitle"></slot>
    </div>
    <div class="right">
      <van-icon name="weapp-nav" />
    </div>

  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: {},

  setup() {
    const router = useRouter()
    console.log(router)
    const goBack = () => {
      router.go(-1)
    }

    return { goBack }
  },
}
</script>

<style lang="less" scoped>
.other-header {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 999;
  .left {
    font-size: 20px;
  }
  .center {
    font-size: 14px;
  }
  .right {
    font-size: 20px;
  }
}
</style>