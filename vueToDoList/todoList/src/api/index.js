import axios from "axios"

axios.defaults.baseURL='https://www.easy-mock.com/mock/5db90560f94af263202969db/shoppingmall';
axios.interceptors.response.use((data)=>data.data.data)
export let getSlidesData=()=>{
    return axios.get('/slides');
}