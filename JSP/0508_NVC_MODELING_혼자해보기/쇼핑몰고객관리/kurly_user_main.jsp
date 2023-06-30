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
    <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>
    <div id="wrap">
        <section id="signup" class="main">
            <div class="container">
                <div class="title">
                    <h2>메인 페이지</h2>
                </div>
                <%
       
                String loginId=null;
                if(session.getAttribute("user_id")!=null){
                    loginId=(String)session.getAttribute("user_id");
                }
                if(loginId==null){
                 %>
                 <div class="content">
                    <h2>접속 하기</h2>
                    <h3></h3>
                    <ul>
                        <li><a href="./kurly_user_signin.jsp">로그인</a></li>
                        <li><a href="./kurly_user_signup.jsp">회원가입</a></li>
                    </ul>
                </div>
                <%
                    }
                    else{
                %>
                <div class="content">
                    <h2>정보 관리</h2>
                    <h3>아이디 : <%=loginId%></h3>
                    <ul>
                        <li><a href="./kurly_user_logout_action.jsp">로그아웃</a></li>
                        <li><a href="./kurly_user_update.jsp">정보수정</a></li>
                        <li><a href="./kurly_user_delete.jsp">회원탈퇴</a></li>
                    </ul>
                </div>
                <%        
                    }

                %>
            </div>
        </section>
    </div>
</body>
</html>