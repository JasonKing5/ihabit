import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // 替换为你的后端地址
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // 添加 token 或其他请求前处理逻辑
    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
)

export default axiosInstance
