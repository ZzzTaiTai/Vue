import { Loading } from 'element-ui'
let loading;
let loadingCount = 0;

const startLoading = () =>{
    loading = Loading.service({
        lock:true,
        target:'.home',
        fullscreen: false
    });
    // setTimeout(()=>{
    //     loading.close();
    // },5000)
};
const endLoading = () => {
    loading.close();
}

export const showLoading = () => {
    if(loadingCount === 0){
        startLoading()
    }
    loadingCount += 1;
}

export const hideLoading = () => {
    if(loadingCount <= 0){
        return;
    }
    loadingCount -= 1;
    if(loadingCount === 0){
        endLoading();
    }
    
}