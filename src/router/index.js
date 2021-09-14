import { createRouter, createWebHistory } from 'vue-router'

const  routes= [
  {
		path: '/',
		redirect: '/home',
	},
  
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Index/Index.vue'),
    children:[
      {
        path: '/home',
        name:'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Index/Home/Home.vue'),
        meta: {
          index: 0
        }
      },
      {
        path: '/category',
        name: 'category',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Index/Category/Category.vue'),
        meta: {
          index: 1
        }
      },
      {
        path: '/cate',
        name: 'cate',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Index/Cate/Cate.vue'),
        meta: {
          index: 2
        }
      },
      {
        path: '/person_center',
        name: 'person_center',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Index/Person/Person_center.vue'),
        meta: {
          index: 3
        }
      },
    
     
    ]
  },

  {
    path: '/pro_detail',
    name: 'pro_detail',
    component: () => import(/* webpackChunkName: "pro_detail" */ '@/views/pro_detail/pro_detail.vue'),
    meta: {
      index: 4
    }
  },

  {
    path: '/pro_list',
    name: 'pro_list',
    component: () => import(/* webpackChunkName: "pro_list" */ '../views/pro_list/pro_list.vue'),
    meta: {
      index: 4
    }
  },

  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "home" */ '@/views/test.vue'),
    meta: {
      index: 5
    }
  }
 
]
 
// createRouter 创建路由实例
const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})
 
// 抛出路由实例, 在 main.js 中引用
export default router
