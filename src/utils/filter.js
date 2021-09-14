// import Vue from "vue";
import * as dayjs from "dayjs";
// import { filterDictTextByCache } from '@/components/dict/JDictSelectUtil'

// vue3.0 filter已经废弃


// 所有的日期转化成 YYYY-MM-DD HH:mm:ss 格式 -- 所有都话转化  直至报错 Invalid Date
export const f_day = (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') =>{
  return dayjs(dataStr).format(pattern)
}

//同上  区别在于不会报错
export const moment_day = (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') =>{
  if (!dataStr) {
        return ""
      }
      return dayjs(dataStr).format(pattern)
}

/** 字符串超长截取省略号显示 */
export const filter_ellipsis = (value,vlength = 25)=>{
  if (!value) {
        return "";
      }
      // console.log('vlength: ' + vlength);
      if (value.length > vlength) {
        return value.slice(0, vlength) + '...'
      }
      return value
}

// Vue.filter('typeFormat', function (dataStr, types, emityReturn = "") {
//   if (dataStr === '' || dataStr === undefined || dataStr === null) {
//     return emityReturn
//   }
//   if (!types) {
//     return dataStr
//   }
//   if (Array.isArray(types)) {
//     let obj = {}
//     types.map(item => {
//       obj[item.value + ''] = item.name
//     })
//     types = obj
//   }
//   try {
//     return types[dataStr + '']
//   } catch (error) {
//     return ''
//   }
// })

// Vue.filter('distFormat', function (dataStr, dictCode, emityReturn = "") {
//   if (dataStr === '' || dataStr === undefined || dataStr === null) {
//     return emityReturn
//   }
//   return filterDictTextByCache(dictCode, dataStr)
// })



// 日期过滤是否长期
export const cqdateFormat = (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss', emityReturn = "") =>{
  if (dataStr === '' || dataStr === undefined || dataStr === null) {
    return emityReturn
  }
  if (dataStr === '2099-12-31 00:00:00') {
    return '长期'
  }
  return dayjs(dataStr).format(pattern)
}

//数字转化（负数转正数）
//  value = 需要转化的值  point = （原值）小数点后面需要保留几位
//  unit = 整个小数后面追加的数字   isPositive = 是否需要负数转正数
export const NumberFormat = (value, point = 0, unit = '', isPositive = false) =>{
  try {
    if (value === null || value === undefined || value === '' || value === 0) {
      return 0
    }
    value = Number(value + '')
    if (isPositive) {
      value = Math.abs(value)
    }
    if (unit === '%') {
      value = value * 100
    }
    if (unit === "%万%") {
      value = value / 10000
    }
    if (point > 0) {
      value = Math.round(value * Math.pow(10, point)) / Math.pow(10, point); // point 幂   
    }
    let numArr = value.toString().split('.')
    let numStr = numArr[0].replace(/,/g, "")//输入框 第二次调用 去掉逗号
    let intPartFormat = numStr.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') //将整数部分逢三一断
    if (numArr.length >= 2) {
      intPartFormat = intPartFormat + '.' + numArr[1]
    }
    if (unit && unit !== "%万%") {
      intPartFormat = intPartFormat + unit
    }
    return intPartFormat
  } catch (error) {
    return 0
  }
}


//整数部分逢三一断
export const inputFormat = (value, type = 'number') =>{
  try {
    if (type === 'text' || isNaN(Number(value))) {
      return value
    }
    let numArr = value.toString().split('.')
    let numStr = numArr[0].replace(/,/g, "")//输入框 第二次调用 去掉逗号
    let intPartFormat = numStr.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') //将整数部分逢三一断
    if (numArr.length >= 2) {
      intPartFormat = intPartFormat + '.' + numArr[1]
    }
    return intPartFormat
  } catch (error) {
    return value
  }
}