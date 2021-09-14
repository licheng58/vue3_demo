<template>
  <div class="cate">
    <div class="cate-img">
      <img src="./images//empty-car.png"
           alt="">
    </div>
    <div class="cate-btn"
         @click="toHome">
      {{ellipsis}}
    </div>

    <van-field v-model="ellipsis"
               name="用户名"
               label="用户名"
               placeholder="用户名"
               :rules="[{ required: true, message: '请填写用户名' }]" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, reactive, toRefs } from 'vue'
// import calculation from '@/utils/calculation'
import { replaceAll } from '../../../utils/util'
export default {
  setup() {
    const Router = useRouter()

    const state = reactive({
      ellipsis: '',
    })

    const toHome = () => {
      console.log(111)
      // Router.push('/home')
    }

    // simpleDebounce(toHome, 2000)

    onMounted(() => {
      // console.log(triggerWindowResizeEvent())
      let obj = {
        name: 'aaa',
        age: 11,
        aa: '',
      }
      let now = new Date()
      console.log(replaceAll('111222333', '222', '444'))
    })

    return {
      toHome,
      ...toRefs(state),
    }
  },
}
</script>

<style lang="less" scoped>
.cate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  &-img {
    img {
      object-fit: contain;
      width: 200px;
      height: 180px;
    }
  }

  &-btn {
    width: 200px;
    height: 40px;
    border-radius: 50px;
    background-color: var(--themeColor);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
  }
}
</style>