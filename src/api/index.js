import axios from 'axios'
const service = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/123991',
    timeout: 60000
});

service.interceptors.response.use(// response 拦截器
  response => {
        return response.data
  },
  error => {
   console.log('error')
  }
)

export const TotalTemplate = data => service.post('/template',data)
