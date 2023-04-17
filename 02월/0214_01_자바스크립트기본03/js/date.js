// const newDate = new Date();  날짜 객체 불변변수

let newDate = new Date(); //날짜 객체 가변변수
const day=['일','월','화','수','목','금','토'];

//날짜
console.log(`표준시 newDate() ${newDate}`); //날짜 확인
console.log(`년 newDate.getFullYear() ${newDate.getFullYear()}년`); //년도
console.log(`월 newDate.getMonth()+1 ${newDate.getMonth() + 1}월`); //월 0 ~ 11로 표시 되므로 + 1 을 해줘야함
console.log(`일 newDate.getDate() ${newDate.getDate()}일`); //일
console.log(`요일 ${newDate.getDay()}요일`); //요일 0~6 일요일~토요일
console.log(`${day[newDate.getDay()]}요일`); //요일 0~6 일요일~토요일 조건문이 있어야 요일 표시 가능 배열[] 사용

// 0000.00.00
console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1 }-${newDate.getDate()}`);
//조건문
//if(){}
//switch() case()

//삼항연산자
//조건식 ? 참 :거짓 - 총 3항
2<10 ? 02:2;
newDate.getMonth()+1 <10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1;//월이 10보다 작으면 앞에 0을 붙이라는 조건문


//시간 시분초
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

//00:00:00
console.log(`${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

//게터 getter() : 날짜와 시간 가져오기
//세터 setter() : 날짜와 시간 변경하기,설정하기

//현재 년도에 1년을 더한다. setfullYear(현재년도 + 1);
//현재 월에 한달을 더한다. setMonth(현재월 + 1);
//현재 날짜에 하루를 더한다. setDate(현재일 + 1);
//현재 시간에 한시간을 더한다. setHours(현재시간 + 1);

// newDate.setFullYear(현재년도 가져오기 + 1)
newDate.setFullYear(newDate.getFullYear() + 1);
//설정돤 년도 확인하기
console.log('1년 후' ,newDate.getFullYear());
//날짜 표준시로 반환
console.log(newDate.toUTCString());

//3개월 더하기
newDate = new Date(); //방금 더해진 1년을 새로 세팅

console.log('셋팅 전 월',newDate.getMonth()+1);
newDate.setMonth(newDate.getMonth() + 3);
console.log('셋팅 후 월',newDate.getMonth()+1);
console.log(newDate.toUTCString());

//7일 더하기
newDate = new Date(); //방금 더해진 1년을 새로 세팅

console.log('셋팅 전 날짜',newDate.getDate());
newDate.setDate(newDate.getDate() + 7);
console.log('셋팅 후 날짜',newDate.getDate());
console.log(newDate.toUTCString());

//10시간 더하기
newDate = new Date();
console.log('셋팅 전 시간',newDate.getHours(),'시');
newDate.setHours(newDate.getHours() + 10);
console.log('셋팅 후 시간',newDate.getHours(),'시');
console.log(newDate.toUTCString());

//현재 시 분 초 띄우기
// 1초단위로 현재 날짜 객체를 가져오기-자동타이머
setInterval(function(){
    newDate=new Date();
    console.log(`${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
},1000); //1초 간격으로 게속 실행







