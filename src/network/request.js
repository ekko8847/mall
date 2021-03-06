import axios from 'axios'


export function request(config) {
    const instance = axios.create({
        baseURL: '接口找老师要',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        return config
    }, error => {
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    return instance(config)
}