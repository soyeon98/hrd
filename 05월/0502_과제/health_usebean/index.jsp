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
    <title>Document</title>
    <style>
        #wrap{width: 100%; position: relative;display: flex; justify-content: center;}
        #wrap .title{width: 100%; position: absolute; z-index: 2;top: 10%;left: 0;text-align: center;}
        #wrap .title h1{width: 100%; font-size: 60px; color: #fff; font-weight: 600; }
        #wrap img{ width: 80%; position: relative; z-index: 1;}

    </style>
</head>
<body>
    <div id="wrap">
        <div class="title">
            <h1>가입 되셨습니다~~~</h1>
        </div>
        <img src="./img/다운로드.jpg" alt="">
    </div>
</body>
</html>