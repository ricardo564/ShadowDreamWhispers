import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

interface InternalAxiosRequestConfig<T = any> extends AxiosRequestConfig {
  retryCount?: number
  expectedResponse?: T
}

const MAX_REQUESTS_COUNT = 5
const INTERVAL_MS = 10
const MAX_RETRY_COUNT = 3

let pendingRequests = 0

const requestInterceptor = (config: AxiosRequestConfig) =>
  new Promise<AxiosRequestConfig>((resolve, reject) => {
    const interval = setInterval(() => {
      if (pendingRequests < MAX_REQUESTS_COUNT) {
        pendingRequests += 1
        clearInterval(interval)
        resolve(config)
      }
    }, INTERVAL_MS)
  })

const responseInterceptor = (response: any) => {
  pendingRequests = Math.max(0, pendingRequests - 1)
  return Promise.resolve(response)
}

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    maxConcurrentRequests: 5,
    keepAlive: true,
  })

  instance.interceptors.request.use(requestInterceptor)
  instance.interceptors.response.use(responseInterceptor, errorInterceptor)

  return instance
}

const axiosInstance: AxiosInstance = createAxiosInstance()

const errorInterceptor = (error: { response?: any; config?: InternalAxiosRequestConfig<any> }) => {
  pendingRequests = Math.max(0, pendingRequests - 1)
  if (
    error.response
    && error.response.status === 500
    && error.response.data.error === 'ER_USER_LIMIT_REACHED'
  ) {
    const { config } = error
    const retryCount = config?.retryCount || 0
    if (retryCount < MAX_RETRY_COUNT) {
      return new Promise((resolve) => {
        setTimeout(() => {
          config!.retryCount = retryCount + 1
          resolve(axiosInstance(config!))
        }, (retryCount + 1) * 1000)
      })
    }
  }
  return Promise.reject(error)
}

export default defineNuxtPlugin((nuxtApp: { provide: (arg0: string, arg1: AxiosInstance) => void }) => {
  nuxtApp.provide('axios', axiosInstance)
})
