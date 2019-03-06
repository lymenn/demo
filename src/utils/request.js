import axios from 'axios'

const service = axios.create({
  baseURL: 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin/', // api 的 base_url
  timeout: 50000 // 请求超时时间
})

export default service
