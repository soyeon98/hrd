<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%> 
<%@ page import ="beans_dto.StudyMember" %>
<%
    StudyMember newStudyMember = new StudyMember();

    newStudyMember.setName("박소연");
    newStudyMember.setSubject("자바");
    newStudyMember.setAge(26);
    newStudyMember.setTime("6시~");
    newStudyMember.setScore(100);
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{text-align: start; width: 960px; margin: 0 auto; background: url(./img/다운로드.jpg) no-repeat 50% -50%;}
        body h1{text-align: center; }
        body h2{padding: 0 190px; }
     
    </style>
</head>
<body>
    <h1>JAVA BEANS DTO 가져오기 getter 함수</h1>
    <hr>
    <h2><%=newStudyMember.getName()%></h2>
    <h2><%=newStudyMember.getSubject()%></h2>
    <h2><%=newStudyMember.getAge()%></h2>
    <h2><%=newStudyMember.getTime() %></h2>
    <h2><%=newStudyMember.getScore() %></h2>
</body>
</html>