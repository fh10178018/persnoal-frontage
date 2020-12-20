// ajax封装模块
import axios from 'axios'

type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
export interface ResData {
  code: number
  msg: string
  data: object
};


// 最基本的全局配置
const instance = axios.create({
  baseURL: process.env.REACT_APP_HTTP_BASEURL,
  timeout: 2500,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
})
export const Api = (config: AxiosRequestConfig) => {
  console.log(process.env.REACT_APP_HTTP_BASEURL)
  switch (config.method) {
    case 'GET':
    case 'get': {
      return new Promise((resolve, reject) => {
        instance.get(config.url, config.params).then(res => {
          resolve(res.data.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
    case 'POST':
    case 'post': {
      return new Promise((resolve, reject) => {
        instance.post(config.url, config.data).then(res => {
          resolve(res.data.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
    case 'Delete':
    case 'delete': {
      return new Promise((resolve, reject) => {
        instance.delete(config.url, config.data).then(res => {
          resolve(res.data.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
    default: {
      return new Promise((resolve, reject) => {
        instance.get(config.url, config.params).then(res => {
          resolve(res.data.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

// Add a request interceptor， 发送请求之前
instance.interceptors.request.use((config) => {
  //add auth
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
  // 返回错误判断(服务器端定义的err code)
  //保存auth token
  return response;
}, (error) => {
  // 可以在后面的请求中catch
  return Promise.reject(error);
});
