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
        body{text-align: center; line-height: 180%; box-sizing: border-box;}
        #main{background: url(./img/thumb-3024265115_rWVwURDd_27705a7d5fa7d22aea3cf26ea8812f111a84cbed_835x470.jpg) no-repeat 50% 50%; height: 100vh;width: 100%;background-size: cover;}
        #main .container{padding: 120px 0;}
        #main .container .img-box{height: 120px; background: url(./img/다운로드.jpg) no-repeat 50% 45%; margin: 15px 0 20px 0;}
        #main h1{display: flex; align-items: center; text-align: center;justify-content: center; font-size: 40px; color: rgb(173, 132, 93);}
        #main h1 img{width: 60px;height: 60px; padding: 0 15px;}
    </style>
</head>
<body>
    <main id="main">
        <div class="container">
            <div class="img-box"></div>
            <h1><img src="./img/99DD0D485BAC757D2D.png" alt="">쿠키 가져오기 for <img src="./img/99DD0D485BAC757D2D.png" alt=""></h1>
        </div>
    </main>

<%
    // 1. 쿠키 가져오기 생성자 생성
    Cookie[] item = request.getCookies();

    for(int i=0;i < item.length; i++ ){
        out.println(item[i].getName()+" "+item[i].getValue()+"<br>");
    }
%>
    
</body>
</html>