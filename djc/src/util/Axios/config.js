import axios from 'axios'

var instance = axios.create({
	baseURL: 'http://119.3.216.3:10002/api',
  timeout: 15000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'},
})

export default instance;
