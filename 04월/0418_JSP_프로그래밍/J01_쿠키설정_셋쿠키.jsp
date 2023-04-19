<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<% 
    // 폼 전송 받은 힌글깨짐현상 셋팅 인코딩
    request.setCharacterEncoding("UTF-8");    
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>쿠키설정</title>
    <style>
        *{margin: 0;padding: 0;}
        div{height: 120px; background: url(./img/다운로드.jpg) no-repeat 50% 45%; margin: 80px 0 0 0;position: relative;}
        h1{display: flex; align-items: center; text-align: center;justify-content: center; font-size: 40px; color: rgb(182, 138, 97);}
        h1 img{width: 60px;height: 60px; padding: 0 15px;}
    </style>
</head>
<body>
    <div></div>
    <h1><img src="./img/99DD0D485BAC757D2D.png" alt="">쿠키 설정과 쿠키 삭제하기 <img src="./img/99DD0D485BAC757D2D.png" alt=""></h1>
    <%
        // 1. 쿠키 생성하기
        //Cookie newCookie=new Cookie("키(key)","값(value)");
        // 첫번째쿠키
        Cookie newCookie1=new Cookie("psy_cookie1","첫번째쿠키값입니다");
        newCookie1.setPath("/");
        newCookie1.setMaxAge(60*60*24*1); // 1일
        response.addCookie(newCookie1); 
        // 두번째쿠키
        Cookie newCookie2= new Cookie("psy_cookie2","두번째쿠키값입니다");
        newCookie2.setPath("/"); // path 설정
        newCookie2.setMaxAge(60*60*24*3); // 3일
        response.addCookie(newCookie2);
        // 세번째쿠키
        Cookie newCookie3= new Cookie("psy_cookie3","세번째쿠키값입니다");
        newCookie3.setPath("/");
        newCookie3.setMaxAge(60*60*24*7); //7일
        response.addCookie(newCookie3);

        // 2. 쿠키 삭제하기
        // 만료일을 0으로 설정하면 삭제됨.
        // newCookie3.setMaxAge(0);
        // response.addCookie(newCookie3); // newCookie3.setMaxAge(0); 으로 쿠키를 추가하면 날짜설정이 0이되므로 삭제된다.
        // newCookie2.setMaxAge(0);
        // response.addCookie(newCookie2);
        // newCookie1.setMaxAge(0);
        // response.addCookie(newCookie1);



    %>
</body>
</html>