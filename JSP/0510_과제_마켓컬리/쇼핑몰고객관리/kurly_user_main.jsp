<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<%@ page import="kurly.UserDAO" %>
<%@ page import="kurly.UserDTO" %>
<%@ page import="java.util.*" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
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
            </div>
            <div class="list">
                <table>
                    <caption>회원 리스트</caption>
                    <tr>
                        <th>아이디</th>
                        <th>비밀번호</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>전화번호</th>
                        <th>주소</th>
                        <th>성별</th>
                        <th>생년월일</th>
                        <th>추가입력사항</th>
                        <th>이용약관동의</th>
                    </tr>
                    <%
                        UserDAO userDAO = new UserDAO();
                        List<UserDTO> list = new ArrayList<>();
                        list = userDAO.getJoinList();

                        
                        if(list.size()==0){
                            out.println("<script>alert('조회내역이 없습니다');</script>");
                        }
                        else{
                            for(UserDTO item : list){
                        
                        
                    %>
                        <tr>
                            <td><%=item.getUser_id()%></td>
                            <td><%=item.getUser_pw()%></td>
                            <td><%=item.getUser_name()%></td>
                            <td><%=item.getUser_email()%></td>
                            <td><%=item.getUser_hp()%></td>
                            <td><%=item.getUser_addr()%></td>
                            <td><%=item.getUser_gender()%></td>
                            <td><%=item.getUser_birth_year()%> / <%=item.getUser_birth_month()%> / <%=item.getUser_birth_date()%></td>
                            <td><%=item.getUser_chooga()%></td>
                            <td>
                                <%
                                if(item.getUser_service_all()!=null){
                                %>    
                                    <%=item.getUser_service_all()%>
                                <%
                                out.println("  ");
                                }
                                %>
                                <%
                                if(item.getUser_service_1()!=null){
                                %>    
                                    <%=item.getUser_service_1()%>
                                <%
                                out.println("  ");
                                }
                                %>
                                <%
                                if(item.getUser_service_2()!=null){
                                %>    
                                    <%=item.getUser_service_2()%>
                                <%
                                out.println("  ");
                                }
                                %>
                                <%
                                if(item.getUser_service_3()!=null){
                                %>    
                                    <%=item.getUser_service_3()%>
                                <%
                                out.println("  ");
                                }
                                %>
                                <%
                                if(item.getUser_service_4()!=null){
                                %>    
                                    <%=item.getUser_service_4()%>
                                <%
                                out.println("  ");
                                }
                                %>
                                <%
                                if(item.getUser_service_5()!=null){
                                %>    
                                    <%=item.getUser_service_5()%>
                                <%
                                out.println("  ");
                                }
                                %>
                                <%
                                if(item.getUser_service_6()!=null){
                                %>    
                                    <%=item.getUser_service_6()%>
                                <%
                                out.println("  ");
                                }
                                %>
                                <%
                                if(item.getUser_service_7()!=null){
                                %>    
                                    <%=item.getUser_service_7()%>
                                <%
                                out.println("  ");
                                }
                                %>
                            </td>
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
        </section>
    </div>
</body>
</html>