import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { Button,Icon,Swipe, SwipeItem,Lazyload ,Grid, GridItem ,Toast, 
  Sidebar, SidebarItem ,List ,Tab, Tabs,Sticky ,Uploader,
  Form, Field, CellGroup } from 'vant';
import 'vant/lib/index.css'; // 全局引入样式
import './assets/index.less'
import 'lib-flexible'

const app = createApp(App)

import http from './utils/http'
app.config.globalProperties.$http = http

import './moke/index'

app.use(router).use(Button).use(Icon ).use(Swipe ).use(SwipeItem )
.use(Lazyload ).use(Grid ).use(GridItem ).use(Toast ).use(Sidebar )
.use(SidebarItem ).use(List ).use(Tab ).use(Tabs )
.use(Sticky ).use(Uploader ).use(Form ).use(Field ).use(CellGroup )
.mount('#app')


