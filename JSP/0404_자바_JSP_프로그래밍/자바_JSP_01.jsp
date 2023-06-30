<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSP 스크립트</title>

</head>
<body>
   
    <%
        // 내부주석
        // 자바코딩 그리고 지역 변수 지정 형식 스크립트릿이라 한다

        String strName = "풀 스텍 박소연";
    %>

    <%!
        // 선언 : 전역변수 선언
        String tit ="JSP 자바 서버페이지이이아아아ㅏ아ㅏㅏ아ㅏㅏ";
    %>



    <h1><%=tit%></h1>
   
    <h2>웹 개발자 <strong><%=strName%></strong>입니다.</h2>

     <hr>
     <h2><%=strIrum%></h2>
     
     
    <jsp:include page="./서브페이지1.jsp" flush="false"/>
    <%@ include file="./서브페이지2.jsp" %>

    <h2><%=strIrum%></h2>

    <%
    strIrum = "김유신 장군";
    %>

    <h2><%=strIrum%></h2>

</body>
</html>