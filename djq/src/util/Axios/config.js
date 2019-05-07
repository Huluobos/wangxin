import axios from 'axios'

var instance = axios.create({
  // baseURL: '/api',
  baseURL: 'http://119.3.216.3:10002/api',
  timeout: 15000
})

export default instance;
