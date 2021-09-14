<template>
  <div class="test">
    <div class="aa"
         @click="countAdd">{{btnText}}</div>
    <div class="bb">{{count}}</div>
    <div class="cc">
      <span>{{obj.name}}</span>
      <span>{{obj.like}}</span>
      <span>{{obj.age}}</span>
    </div>
  </div>
</template>

<script>
//ref是创建一个响应式数据（简单数据）  reactive 是创建一个响应式的数组或者是对象
import { ref, reactive } from 'vue'
export default {
  setup() {
    // 定义一个不需要改变的数据
    const btnText = '点这个按钮上的数字会变'

    // 定义一个count的响应式数据，并赋值为0
    const count = ref(0)

    // 定义一个函数，修改count值
    const countAdd = () => {
      count.value++
    }

    // 定义一个响应式对象
    const obj = reactive({
      name: 'hahaha',
      age: 10,
      like: 'football',
    })

    return {
      btnText,
      count,
      countAdd,
      obj,
    }
  },
}
</script>
<style lang="less" scoped>
.test {
  .aa {
    width: 200px;
    height: 100px;
    border: 1px solid #000;
  }
}
</style>