<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="naver.NaverDAO"%>
<% request.setCharacterEncoding("UTF-8");%>



<%
    String id=request.getParameter("id");
    String pw=request.getParameter("pw");
    String name=request.getParameter("name");
    String year=request.getParameter("year");
    String month=request.getParameter("month");
    String date=request.getParameter("date");
    String gender=request.getParameter("gender");
    String email=request.getParameter("email");
    String hp=request.getParameter("hp");

%>

{"아이디":"<%=id%>","비밀번호":"<%=pw%>","이름":"<%=name%>","생년":"<%=year%>","생월":"<%=month%>","생일":"<%=date%>","성별":"<%=gender%>","이메일":"<%=email%>","휴대전화":"<%=hp%>"}