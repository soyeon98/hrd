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

<jsp:useBean class="naver.NaverDTO" id="naverDTO" scope="page"/>
<jsp:setProperty name="naverDTO" property="id"/>
<jsp:setProperty name="naverDTO" property="pw"/>
<jsp:setProperty name="naverDTO" property="name"/>
<jsp:setProperty name="naverDTO" property="year"/>
<jsp:setProperty name="naverDTO" property="month"/>
<jsp:setProperty name="naverDTO" property="date"/>
<jsp:setProperty name="naverDTO" property="gender"/>
<jsp:setProperty name="naverDTO" property="email"/>
<jsp:setProperty name="naverDTO" property="hp"/>

{"아이디":"<%=naverDTO.getId()%>","비밀번호":"<%=naverDTO.getPw()%>","이름":"<%=naverDTO.getName()%>","생년":"<%=naverDTO.getYear()%>","생월":"<%=naverDTO.getMonth()%>","생일":"<%=naverDTO.getDate()%>","성별":"<%=naverDTO.getGender()%>","이메일":"<%=naverDTO.getEmail()%>","휴대전화":"<%=naverDTO.getHp()%>"}