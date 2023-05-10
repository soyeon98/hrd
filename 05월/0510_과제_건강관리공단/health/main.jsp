<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="health.HealthDAO"%>
<%@ page import="health.HealthDTO"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title">
                    <h1>메인페이지</h1>
                </div>
                <%
                    String loginNum=null;
                    if(session.getAttribute("num")!=null){
                        loginNum=(String)session.getAttribute("num");
                    }
                    if(loginNum==null){
                %>
                    <div class="content">
                        <h3>접속하기</h3>
                        <h4></h4>
                        <ul>
                            <li><a href="./signin.jsp">로그인</a></li>
                            <li><a href="./signup.jsp">회원가입</a></li>
                        </ul>
                    </div>
                <%
                    }
                    else{
                %>
                        <div class="content">
                            <h3>관리하기</h3>
                            <h4> 사업장번호 :<%=loginNum%> </h4>
                            <ul>
                                <li><a href="./update.jsp">수정하기</a></li>
                                <li><a href="./delete.jsp">탈퇴하기</a></li>
                                <li><a href="./logout_action.jsp">로그아웃</a></li>
                            </ul>
                        </div>
                <%        
                    }
                %>


            </div>
        </div>
    </div>
</body>
</html>