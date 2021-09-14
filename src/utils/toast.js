import {Toast} from 'vant'
import { createApp } from 'vue'

createApp().use(Toast)

export const myToast = (text='提示语')=>{
  return Toast(text)
}