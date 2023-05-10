<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<%@ page import="naver.NaverDAO"%>
<%@ page import="naver.NaverDTO"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>네이버 | main</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title"><div class="img"></div></div>
                <%
                    String loginId = null;
                    if(session.getAttribute("id")!=null){
                        loginId=(String)session.getAttribute("id");
                    }
                    if(loginId==null){
                %>
                    <div class="content">
                        <h2>접속하기</h2>
                        <h3></h3>
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
                        <h2>관리하기</h2>
                        <h3>아이디 : <%= loginId%></h3>
                        <ul>
                            <li><a href="./logout_action.jsp">로그아웃</a></li>
                            <li><a href="./update.jsp">정보수정</a></li>
                            <li><a href="./delete.jsp">회원탈퇴</a></li>
                        </ul>
                    </div>

            </div>
        </div>
                        <div class="list">
                        <table>
                            <caption>회원 LIST</caption>
                            <tr>
                                <th>아이디</th>
                                <th>비밀번호</th>
                                <th>이름</th>
                                <th>생년월일</th>
                                <th>성별</th>
                                <th>이메일</th>
                                <th>휴대전화</th>
                            </tr>
                            <%
                                NaverDAO naverDAO = new NaverDAO();
                                List<NaverDTO> list = new ArrayList<>();
                                list =  naverDAO.getJoinList();

                                if(list.size()==0){
                                    out.println("<script>alert('조회내역이 없습니다');</script>");
                                }
                                else{
                                    for(NaverDTO item : list){
                            %>
                                    <tr>
                                        <td><%=item.getId()%></td>
                                        <td><%=item.getPw()%></td>
                                        <td><%=item.getName()%></td>
                                        <td><%=item.getYear()%>-<%=item.getMonth()%>-<%=item.getDate()%></td>
                                        <td><%=item.getGender()%></td>
                                        <td><%=item.getEmail()%></td>
                                        <td><%=item.getHp()%></td>
                                    </tr>
                            <%            

                                    }
                                }
                            %>

                        </table>
                    </div>
                <%        
                    }
                %>
    </div>
</body>
</html>