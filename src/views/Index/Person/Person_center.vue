<template>
  <div class="person-center">
    <div class="person-center-top">
      <div class="person-center-top-info">
        <div class="person-center-top-info-left">
          <van-uploader v-model="fileList" />
        </div>
        <div class="person-center-top-info-right">
          <div class="person-center-top-info-right-nickname">
            <div class="person-center-top-info-right-nickname-left">昵称 :</div>
            <div class="person-center-top-info-right-nickname-right">asd</div>
          </div>

        </div>
      </div>
    </div>
    <div class="person-center-center">
      <bar-item><template #barItem> 我的订单 </template> </bar-item>
      <bar-item><template #barItem> 账号管理 </template> </bar-item>
      <bar-item><template #barItem> 地址管理 </template> </bar-item>
      <bar-item><template #barItem> 关于我们 </template> </bar-item>
    </div>

    <div class="person-center-bottom"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import barItem from './compoments/barItem.vue'
export default {
  components: {
    barItem,
  },

  setup() {
    const state = reactive({
      fileList: [],
      personInfo: [{ nickName: '' }],
    })

    return { ...toRefs(state) }
  },
}
</script>

<style lang="less" scoped>
.person-center {
  padding: 0 10px;
  &-top {
    background-color: #4dc5c5;
    margin: 10px 0;
    border-radius: 10px;
    padding: 10px;
    &-info {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      /deep/.van-uploader__upload {
        margin: 0;
        border-radius: 50%;
      }

      /deep/.van-image__img {
        border-radius: 50%;
      }

      &-left {
      }
      &-right {
        flex: 1;
        padding: 10px;
        color: #fff;
        &-nickname {
          display: flex;
          &-left {
          }
          &-right {
          }
        }
      }
    }
  }

  &-center {
    background-color: #fff;
    padding: 5px 10px;
    padding-bottom: 0;
    border-radius: 5px;
  }

  &-bottom {
  }
}
</style>