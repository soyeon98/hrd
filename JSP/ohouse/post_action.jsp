<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="photo_post.PhotoPostDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="photo_post.PhotoPostDTO" id="photoPostDTO" scope="page"/>
<jsp:setProperty name="photoPostDTO" property="pyeong"/>
<jsp:setProperty name="photoPostDTO" property="type"/>
<jsp:setProperty name="photoPostDTO" property="style"/>
<jsp:setProperty name="photoPostDTO" property="file"/>
<jsp:setProperty name="photoPostDTO" property="place"/>
<jsp:setProperty name="photoPostDTO" property="memo"/>

<%
    PhotoPostDAO photoPostDAO = new PhotoPostDAO();
    int result = photoPostDAO.post(photoPostDTO);
    if(result==1){
%>
    <script>
        alert("사진이 업로드되었습니다");
    </script>
<%
    } 
    else{
%>
        <script>
            alert("확인 후 다시 시도해주세요");
            history.back();
        </script>
<%          
    }
%>