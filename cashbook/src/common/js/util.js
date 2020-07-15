import Vue from 'vue';
function rangedate(min,max) {
  var min = min,
    max = max,
    days = (new Date(max) - new Date(min))/1000/60/60/24,
    i = 0,
    len = Math.floor(days),
    dates = [];
  for(;i<len;i++){
    dates.push(format(new Date(min).getTime()+1000*60*60*24*i));
  } 
  return dates[Math.floor(Math.random()*len)]; 
}

function format(date) {
  var dateString = new Date(date),
      month = (dateString.getMonth()+1)<10 ? '0'+(dateString.getMonth()+1): (dateString.getMonth()+1),
      day = dateString.getDate()<10 ? '0'+dateString.getDate() : dateString.getDate();
  return dateString.getFullYear()+'-'+month+'-'+day
}

function setlocalStorage(name,token) {
  return localStorage.setItem(name,token)
}

// function getlocalStorage() {
//   return localStorage.getItem(name)
// }

// function removelocalStorage() {
//   return localStorage.setItem(name,null)
// }

export { rangedate, setlocalStorage } 

 
