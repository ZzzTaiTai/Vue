const mainfilters ={
    numFormat:function(value){
        if(!value){return '0.00'}
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
    dateFormat:function(value){
        let valueDate = new Date(value);
        let weekNum = "日一二三四五六"
        let weekDate = "星期"+weekNum.charAt(valueDate.getDay());
        let valueDay = valueDate.getDate()+"日";

        if(!valueDate){
            return value;
        }
        return valueDay+"-"+weekDate;
    },
    IntegerFormat:function(value){
        if(value <= 0)return value;
        return "+"+value
    }
}
export default mainfilters