
import $http from '../utils/http'
// import $http from 'axios'
// import {   } from '@/api/index'


// home页面
export const lc_getNavs = () =>{
  return $http.get('/getNavs')
}

export const lc_getPros = () =>{
  return $http.get('/getPros')
}

export const lc_getImages = () =>{
  return $http.get('/getImages')
}


// category页面
export const lc_getSideBar=()=>{
  return $http.get('/getSideBar')
}

// proList页面
export const lc_getProList=()=>{
  return $http.get('/getProList')
}
