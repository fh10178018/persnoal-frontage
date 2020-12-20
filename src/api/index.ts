// ajax封装模块
import { message } from 'antd'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { isValidKey } from '../utils/common'

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
  data?: object
  params?: any
}
export interface ResData {
  code: number
  msg: string
  data: object
};


// 最基本的全局配置
const instance = axios.create({
  baseURL: '/api',
  timeout: 2500,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
})
export const Api = (config: AxiosRequestConfig) => {
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
instance.interceptors.request.use((config: any) => {
  if (config.method === "POST" || config.method === "post") {
    const params = new URLSearchParams()
    for (const key in config.data) {
      if (config.data.hasOwnProperty(key)) {
        params.append(key, config.data[key])
      }
    }
    config.data = params
  }
  //add auth
  return config;
}, (error) => {
  return Promise.reject(error);
});

const httpStatus = {
  500: '尚未连接到后端'
}

// Add a response interceptor
instance.interceptors.response.use((response: AxiosResponse) => {
  switch (response.status) {
    case 201:
      message.success({
        top: 56,
        content: response.data.msg
      })
  }
  return response;
}, (error: AxiosError) => {
  if (error.response !== undefined) {
    if (isValidKey(error.response.status, httpStatus)) {
      message.error({
        top: 56,
        content: httpStatus[error.response.status]
      })
    } else {
      message.error({
        top: 56,
        content: error.response.data.msg
      })
    }
  }
  return Promise.reject(error);
});
