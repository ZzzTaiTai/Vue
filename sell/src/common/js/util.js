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
 
