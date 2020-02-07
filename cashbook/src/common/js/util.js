import Vue from 'vue';
export function cartAdd(food){
    if(!food.count){
        Vue.set(food, 'count', 1);
      }else{
        food.count++;
      }
}

export function cartDecrease(food){
    food.count--;
}


/**
 * 存储收藏
 * @return String
**/
export function saveToLocal(id, key, value) {
  let seller = window.localStorage.seller;
  if(!seller){
    seller = {};
    seller[id] = {};
  }else{
    seller = JSON.parse(seller);
    if(!seller[id]){
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.setItem(key,seller);
}

/**
 * 读取存储收藏
 * @return String
**/
export function loadFromlLocal(id, key, define) {
  let seller = window.localStorage.seller;
  let sellerId = JSON.parse(seller)[id]
  if(!seller && !sellerId){
    return define
  }
  let ref = sellerId[key];
  return ref
}

/**
 * 解析url参数
 * @return String
**/
export function urlParse(variable){
  let url =window.location.search;
  let query = url.substring(1);
  let vars = query.split("&");
       for (let i=0;i<vars.length;i++) {
              let pair = vars[i].split("=");
              if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

 
