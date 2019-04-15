import axios from 'axios'

var instance = axios.create({
  baseURL: '/api',       //http://02.yaojunrong.com
  timeout: 15000
})

export default instance;
