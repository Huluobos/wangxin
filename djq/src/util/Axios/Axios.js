import Vue from 'vue'
import base from './config'
import allapi from './allapi'
import axios from 'axios'

let xhr = {
  get(url,params){
    return new Promise((resolve,reject) => {
      base.get(allapi[url],{params}).then(res => {
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  post(url,params){
    return new Promise((resolve,reject) => {
      base.post(allapi[url],params).then(res => {
        resolve(res.data)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  qiniuGet(){
    return new Promise((resolve,reject) => {
      base.get(allapi['qiniu']).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
}

Vue.prototype.$axios = xhr;


