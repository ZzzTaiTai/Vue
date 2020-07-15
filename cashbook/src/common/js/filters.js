const mainfilters ={
    numFormat:function(value){
        if(!value)return '0.00'
        if(typeof value !== "number")return value
        //取数字整数部分
        let intPart =  Math.trunc(value);
        let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        let floatPart = '.00';
        let valueAry = value.toString().split('.');
        if(value.length === 2){
            return intPartFormat+'.'+valueAry[1];
        }else{
            return intPartFormat+floatPart
        }
    },
    //转换为2日-星期四
    weekFormat:function(value){
        let valueDate = new Date(value);
        let weekNum = "日一二三四五六"
        let weekDate = "星期"+weekNum.charAt(valueDate.getDay());
        let valueDay = valueDate.getDate()+"日";

        if(!valueDate){
            return value;
        }
        return valueDay+"-"+weekDate;
    },
    //转换为mm-dd
    pickerFormat:function(value){
        let month = value.getMonth() + 1;
        let days = value.getDate();
        return `${month}-${days}`
    },
    IntegerFormat:function(value){
        if(value <= 0)return value;
        return "+"+value
    },
    numTo2:function(value){
        return value.toFixed(2);
    }
}
export default mainfilters