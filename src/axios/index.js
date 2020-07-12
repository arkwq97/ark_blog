import axios from 'axios'

const service = axios.create({
  baseURL: 'http://120.79.160.95:8080',
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use( config => {
  config.headers.post['Content-Type'] = 'application/json';
  return config
}, error => {
  return Promise.reject(error);
})

//  response拦截器
service.interceptors.response.use( response => {
  return response
})

export default service;