<template>
  <div class="my-footer">
    <div class="item"
         v-for="item in footerBars"
         :key="item.id"
         @click="clickBar(item)"
         :style="{color:activeTab === item.id?'#1baeae':''}">
      <div class="top">
        <van-icon :name="item.icon" />
      </div>
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'myFooter',
  setup() {
    const router = useRouter()
    const state = reactive({
      footerBars: [
        { id: 1, name: '首页', icon: 'wap-home-o', path: '/home' },
        { id: 2, name: '分类', icon: 'apps-o', path: '/category' },
        { id: 3, name: '购物车', icon: 'logistics', path: '/cate' },
        { id: 4, name: '我的', icon: 'contact', path: '/person_center' },
      ],
      activeTab: 1,
    })

    watch(
      () => router.currentRoute.value.path,
      (val) => {
        // console.log(val)
        let activeBar = state.footerBars.find((v) => {
          if (v.path === val) {
            return v
          }
        })
        if (activeBar.id) {
          state.activeTab = activeBar.id
        }
      }
    )

    onMounted(() => {
      let activeRouter = router.currentRoute.value.path
      let activeBar = state.footerBars.find((v) => {
        return v.path === activeRouter
      })
      state.activeTab = activeBar.id
    })

    nextTick()

    const clickBar = (item) => {
      state.activeTab = item.id
      router.push(item.path)
    }

    return { ...toRefs(state), clickBar }
  },
}
</script>

<style lang="less" scoped>
.my-footer {
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .van-icon {
      font-size: 18px;
    }
  }
}
</style>