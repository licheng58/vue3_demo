<template>
  <div class="home">

    <!-- 轮播图 -->
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images"
                        :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 导航 -->
    <div class="navBar">

      <div class="navBar-item"
           v-for="item in navs"
           :key="item.id"
           @click="clickNavBar(item)">

        <img :src="require('../../../assets/'+item.imgSrc)"
             alt="">

        <div class="navBar-item-title">{{item.title}}</div>
      </div>

    </div>

    <!-- 新品上线 -->
    <div class="pro">
      <div class="pro-title">新品上线</div>
      <div class="pro-body">
        <div class="pro-body-item"
             v-for="item in pros"
             :key="item.id"
             @click="clickPro(item)">
          <div class="pro-body-item-top">
            <img :src="require('../../../assets/'+item.imgSrc)"
                 alt="">
          </div>
          <div class="pro-body-item-center">{{item.title}}</div>
          <div class="pro-body-item-bottom">{{item.price}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { lc_getNavs, lc_getPros, lc_getImages } from '@/api/index'
import { reactive, onMounted, toRefs } from 'vue'
import { myToast } from '@/utils/toast'
export default {
  name: 'home',

  setup() {
    const state = reactive({
      navs: [],
      images: [],
      pros: [],
    })

    const router = useRouter()

    onMounted(async () => {
      getNavs()
      getPros()
      getImages()
    })

    // 获取navs
    const getNavs = async () => {
      const res = await lc_getNavs()
      state.navs = res.data
    }

    // 获取产品数据
    const getPros = async () => {
      const res = await lc_getPros()
      state.pros = res.data
    }

    // 获取轮播图
    const getImages = async () => {
      const res = await lc_getImages()
      state.images = res.data
    }

    // 点击nav
    const clickNavBar = () => {
      myToast('暂未开放')
    }

    // 点击商品详情
    const clickPro = (item) => {
      router.push(`/pro_detail?${item.id}`)
    }

    return { ...toRefs(state), clickNavBar, clickPro }
  },
}
</script>

<style lang="less" scoped>
.home {
  // 轮播图
  .swiper {
    height: 200px;
    width: 100%;

    .van-swipe {
      height: 100%;
      img {
        height: 200px;
        width: 100%;
        object-fit: contain;
      }
    }
  }

  // 导航
  .navBar {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    background-color: #fff;
    &-item {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      height: 60%;
      width: 60%;
      object-fit: contain;
    }
  }

  // 新品上线
  .pro {
    &-title {
      text-align: center;
      font-size: 16px;
      color: #20b5c5;
      padding: 10px;
    }
    &-body {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;

      &-item {
        width: 50%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #eee;
        &-top {
          text-align: center;
          img {
            width: 60%;
            object-fit: contain;
          }
        }
        &-center {
        }
        &-bottom {
        }
      }

      &-item:nth-child(2n-1) {
        border-right: 1px solid #eee;
      }
    }
  }
}
</style>