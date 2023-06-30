 
 <%
    response.setHeader("Access-Control-Allow-Origin","*");
 %>

 <%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="kurly.UserDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<%
    String user_id = request.getParameter("user_id");
    String user_pw = request.getParameter("user_pw");
    String user_name = request.getParameter("user_name");
    String user_email = request.getParameter("user_email");
    String user_ph = request.getParameter("user_ph");
    String user_address = request.getParameter("user_address");
    String user_gender = request.getParameter("user_gender");
    String user_birth = request.getParameter("user_birth");
    String user_chooga = request.getParameter("user_chooga");
    String user_service = request.getParameter("user_service");
%>


{"아이디":"<%=user_id%>","비밀번호":"<%=user_pw%>","이름":"<%=user_name%>","이메일":"<%=user_email%>","휴대전화":"<%=user_ph%>","주소":"<%=user_address%>","성별":"<%=user_gender%>","생년월일":"<%=user_birth%>","추가입력사항":"<%=user_chooga%>","이용약관동의":"<%=user_service%>"}


