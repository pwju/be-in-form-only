import axios from 'axios'
import Vue from 'vue'
let baseUrl = 'https://www.baidu.com/'

Vue.prototype.$post = (url, data) => {
    return axios.post(`${baseUrl}${url || ''}`, data)
}

Vue.prototype.$get = (url, data) => {
    return axios.get(`${baseUrl}${url || ''}`, { params: data })
}