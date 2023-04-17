let newDate=new Date();

console.log(newDate);

console.log(newDate.getFullYear());

console.log(`10일 후는 ${newDate.getDate()+10}일 입니다.`);

console.log(newDate);

newDate.setDate(newDate.getDate()+7);
console.log(newDate.getDate());
console.log(newDate.toUTCString(),'/ 일주일 후');

newDate=new Date();

console.log(newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1);
console.log(newDate.getMonth()+1);

setInterval(function(){
    newDate=new Date();
    console.log(`현재 시각은 ${newDate.getFullYear()}년  ${newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1}월  ${newDate.getDate()}일  ${newDate.getHours()}시  ${newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()}분 ${newDate.getSeconds()}초입니다.`);
},1000);
