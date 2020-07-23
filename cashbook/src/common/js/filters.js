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
    allDateFormat:function(value,format) {
        var o = {           
            "M+" : value.getMonth()+1, //月份           
            "d+" : value.getDate(), //日           
            "h+" : value.getHours()%12 == 0 ? 12 : value.getHours()%12, //小时           
            "H+" : value.getHours(), //小时           
            "m+" : value.getMinutes(), //分           
            "s+" : value.getSeconds(), //秒           
            "q+" : Math.floor((value.getMonth()+3)/3), //季度           
            "S" : value.getMilliseconds() //毫秒           
            };           
            var week = {           
            "0" : "\u65e5",           
            "1" : "\u4e00",           
            "2" : "\u4e8c",           
            "3" : "\u4e09",           
            "4" : "\u56db",           
            "5" : "\u4e94",           
            "6" : "\u516d"          
            };           
            if(/(y+)/.test(format)){           
                format = format.replace(RegExp.$1, (value.getFullYear()+"").substr(4 - RegExp.$1.length));           
            }           
            if(/(E+)/.test(format)){           
                format = format.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[value.getDay()+""]);           
            }           
            for(var k in o){           
                if(new RegExp("("+ k +")").test(format)){           
                    format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));           
                }           
            }           
            return format;     
    },  
    IntegerFormat:function(value){
        if(value <= 0)return value;
        return "+"+value
    },
    numTo2:function(value){
        return (Number(value)).toFixed(2);
    }
}
export default mainfilters