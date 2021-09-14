<template>
  <div class="category">
    <div class="category-left">
      <van-sidebar v-model="active">
        <van-sidebar-item v-for="item in sideBars"
                          :key="item.id"
                          :title="item.sideTitle"
                          @click="clickSideBar(item)" />
      </van-sidebar>
    </div>

    <div class="category-right">
      <div class="category-right-title">
        <h2>{{activeBody.sideTitle}}</h2>
      </div>
      <div class="category-right-body">
        <div class="category-right-body-item"
             v-for="item in activeBody.bodyItems"
             :key="item.id"
             @click="toProList(item)">
          <div class="category-right-body-item-img">
            <img src="./images/emty.png"
                 alt="">
          </div>
          <div class="category-right-body-item-name">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from 'vue'
import { lc_getSideBar } from '@/api/index'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const state = reactive({
      active: 0,
      activeBody: {}, //点击的数据
      sideBars: [], //侧边栏总数据
    })

    const Router = useRouter()

    onMounted(async () => {
      getSideBar()
    })

    // 获取侧边栏数据
    const getSideBar = async () => {
      const res = await lc_getSideBar()
      state.sideBars = res.data

      // 页面进来  当前默认显示index = 0 的数据
      state.activeBody = state.sideBars.find((v) => {
        return v.id === 1
      })
    }

    // 点击侧边栏
    const clickSideBar = (item) => {
      state.activeBody = state.sideBars.find((v) => {
        return v.id === item.id
      })
    }

    // 跳转产品列表页面
    const toProList = (item) => {
      Router.push(`/pro_list?${item.id}`)
    }

    return { ...toRefs(state), clickSideBar, toProList }
  },
}
</script>

<style lang="less" scoped>
.category {
  display: flex;
  height: 100%;
  &-left {
    /deep/.van-sidebar-item {
      padding: 12px 10px;
    }
  }
  &-right {
    flex: 1;
    padding: 10px 5px;
    background-color: #fff;

    &-title {
    }
    &-body {
      display: flex;
      flex-wrap: wrap;
      &-item {
        width: 33.33%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 90%;
          object-fit: contain;
        }
        &-name {
        }
      }
    }
  }
}
</style>