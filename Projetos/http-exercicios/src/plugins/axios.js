import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://vue-axios-5475a.firebaseio.com/'
axios.defaults.headers.commom['Authorization'] = 'abc123' 
// axios.defaults.headers.get['Accepts'] = 'application/json' 


Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://vue-axios-5475a.firebaseio.com/',
            headers: {
                'Authorization': "acb123"
            }
        })
        Vue.prototype.$http.interceptors.request.use(config => {
            
            // if(config.method == 'post') {
            //     config.method = 'put'
            // }
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        // Mudar os dados antes de receber o valor deles no front
        Vue.prototype.$http.interceptors.respose.use(res => {
            // const array = []

            // for (let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave]})
            // }

            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})