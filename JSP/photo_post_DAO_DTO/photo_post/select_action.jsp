<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@
    page import="java.util.*"
%>
<%@ page import="photo_post.PhotoPostDAO"%>
<%@ page import="photo_post.PhotoPostDTO"%>


<% request.setCharacterEncoding("UTF-8");%>



<%
    PhotoPostDAO photoPostDAO = new PhotoPostDAO();
    ArrayList<PhotoPostDTO> photolist = photoPostDAO.select();
    
%>


{"result" : }