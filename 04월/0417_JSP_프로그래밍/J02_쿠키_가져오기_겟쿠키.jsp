<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>쿠키가져오기</title>
    <style>
        *{margin: 0;padding: 0;}
        body{text-align: center; line-height: 180%;}
        div{height: 100px; background: url(./img/uaninet_80427.gif) no-repeat 50% 50%; margin: 80px 0 -5px 0;}
        h1{display: flex; align-items: center; text-align: center;justify-content: center; font-size: 40px; color: rgb(173, 132, 93);}
        h1 img{width: 60px;height: 60px; padding: 0 15px;}
    </style>
</head>
<body>
    <div></div>
    <h1><img src="./img/99DD0D485BAC757D2D.png" alt="">쿠키 가져오기(getCookie) <img src="./img/99DD0D485BAC757D2D.png" alt=""></h1>
    <%
        //쿠키 배열처리
        //Cookie[] 쿠키 = 요청.겟쿠키s();
        Cookie[] cookies = request.getCookies(); // 여러개의 쿠키 가져오기

        // 만약 쿠키가 한개도 없다면(빈값 null) 수행 안함
        // 쿠키가 한개라도 있다면 수행(쿠키 값이 null이 아니면)
        if(cookies != null){
            for(Cookie idx : cookies){
                String cookieName=idx.getName(); // 쿠키 키(key)이름 = 쿠키이름
                // 쿠키 이름(key) 검색 : psy_cookie1
                if(cookieName.equals("psy_cookie1")){
                    out.println("cookieName"+" : "+cookieName);
                }

            }
        }
        out.println("</br>");

        if(cookies != null){
            for(Cookie idx : cookies){
                String cookieValue=idx.getValue(); // 쿠키 값(value)
                // 쿠키 값(value) 검색 :첫번째쿠키값입니다
                if(cookieValue.equals("첫번째쿠키값입니다")){
                    out.println("cookieValue"+" : "+cookieValue);
                }

            }
        }
    %>
    
</body>
</html>