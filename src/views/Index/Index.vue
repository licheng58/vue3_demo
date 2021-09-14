<template>
  <div class="layout">
    <!-- 头部 -->
    <myHeader> </myHeader>

    <!-- 主体出口 -->
    <div class="body">
      <router-view />
    </div>

    <!-- 底部导航 -->
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/my-header.vue'
import myFooter from '@/components/my-footer.vue'
export default {
  components: {
    myHeader,
    myFooter,
  },
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  .body {
    flex: 1;
    margin-bottom: 40px;
    margin-top: 40px;
  }
}
</style>