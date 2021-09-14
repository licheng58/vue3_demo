# pro_vue3

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

1-vue3.0 使用 less 需要控制版本 否则就会报错 less 3.13.1 less-loader 5.0.0

2-vue2.0 和 vue3.0 生命周期比较
created === setup
mounted === onMounted
updated === onUpdated
beforeDestroy === onBeforeDestroy

3- setup 相当于 vue2.0 里面的 created 其他的生命周期函数都是需要手动导入 并且都是在 setup 函数中调用

4-computed 计算属性使用时候 也是需要手动导入 并且在 setup 函数中使用
const bigCount = computed(() => {
return count.value \* 10
})

5-vue3.0 使用 proxy 实现数据的响应式原理 vue2.0 使用 defineProperty 实现 1.使用 proxy 不污染对象 会返回一个新对象 definedProperty 是注入型的 会破坏源对象 2.使用 proxy 只需要监听整个对象的属性 不需要循环使用 Object.defineProperty 监听对象的属性 3.使用 proxy 可以获取到对象属性的更多参数 使用 defineProperty 值能获取到监听到的新值的 newValue

6- 适配移动端 需要安装 2 个包  
 lib-flexible 需要在 main 文件导入
postcss-pxtorem -D（使用 postcss-px2rem-exclude 自动将 css 中的 px 转换成 rem） 创建 postcss.config.js 文件 配置如下
module.exports = {
plugins: {
autoprefixer: {
},
"postcss-px2rem-exclude": {
remUnit: 75,
exclude: /node_modules|folder_name/i // 忽略 node_modules 目录下的文件
}
},
}

7-vue3 路由跳转需要手动引入路由  
 1.import { useRouter } from 'vue-router'
2.const router = useRouter()
3.router.push({ path: `/product/${item.goodsId}` })
"# vue_demo3.0" 
"# vue_demo3.0" 
