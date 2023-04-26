<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%> 
<%@
    page import ="beans_dto.GradeBeans"
%>
<%
    
    GradeBeans newGradeBeans = new GradeBeans();

   
    newGradeBeans.setName("서효빈");
    newGradeBeans.setKor(95);
    newGradeBeans.setEng(100);
    newGradeBeans.setMath(98);
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자바빈즈 JSP </title>
    <style>
        body{text-align: center; padding: 130px 0 0 0; background: url(./cute-kitties-staring-wallpaper-12195_w635.webp)  no-repeat; background-size: cover;}
        h1 ,h2{color: #fff; font-size: 50px;}
    </style>
</head>
<body>
    <h1>JAVA BEAMS DTO 가져오기 getter 함수</h1>
    <hr>
    <h2><%= newGradeBeans.getName() %></h2>
    <h2><%= newGradeBeans.getKor() %></h2>
    <h2><%= newGradeBeans.getEng() %></h2>
    <h2><%= newGradeBeans.getMath() %></h2>
</body>
</html>