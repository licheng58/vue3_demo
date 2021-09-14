<template>
  <div class="pro-list">
    <my-header>
      <template #headerTitle>
        <span>商品列表</span>
      </template>
    </my-header>

    <div class="pro-list-body">
      <van-tabs v-model:active="active"
                type="card"
                sticky
                ellipsis
                color='#1baeae'
                animated
                @click-tab="clickBar">
        <van-tab v-for="item in proList"
                 :key="item.id"
                 :title="item.barName">

          <div class="pro-list-body-item"
               v-for="item in activeBar.barItem"
               :key="item.id">
            <div class="pro-list-body-item-left">
              <img src="./images/pro_list1.jpg"
                   alt="">
            </div>
            <div class="pro-list-body-item-right">
              <div class="pro-list-body-item-right-top">{{item.name}}</div>
              <div class="pro-list-body-item-right-center">hsdjkasd j hsdjkasd</div>
              <div class="pro-list-body-item-right-bottom">{{item.price}}</div>
            </div>
          </div>

        </van-tab>

      </van-tabs>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/other-header.vue'
import { reactive, toRefs, onMounted } from 'vue'
import { lc_getProList } from '@/api/index'
export default {
  components: {
    myHeader,
  },

  setup() {
    const state = reactive({
      proList: [],
      activeBar: {}, //选中的bar
      loading: false,
    })

    onMounted(() => {
      getProList()
    })

    // 获取proList
    const getProList = async () => {
      const res = await lc_getProList()
      state.proList = res.data
      state.activeBar = state.proList.find((v) => {
        return v.id === 1
      })
    }

    // 点击
    const clickBar = (item) => {
      console.log(item)
    }

    return { ...toRefs(state), clickBar }
  },
}
</script>

<style lang="less" scoped>
.pro-list {
  margin-top: 40px;
  padding: 10px 0;
  /deep/.van-sticky--fixed {
    top: 50px !important;
  }
  &-body {
    height: 100%;

    &-item {
      border-bottom: 1px solid #eee;
      padding: 10px;
      display: flex;
      height: 120px;
      &-left {
        flex: 1;
        img {
          height: 100%;
        }
      }
      &-right {
        flex: 2;
        &-top {
        }
        &-center {
        }
        &-bottom {
        }
      }
    }
  }
}
</style>