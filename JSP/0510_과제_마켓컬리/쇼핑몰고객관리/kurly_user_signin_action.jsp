<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="kurly.UserDAO" %>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean id="userDTO" class="kurly.UserDTO" scope="page" />
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />

<%
  if(
    userDTO.getUser_id()==null ||
    userDTO.getUser_pw()==null
  ){
%>
<script>
  alert("빈 항목을 모두 입력하세요!");
  history.back();
</script>
<%
    }
    else{
      UserDAO userDAO = new UserDAO();
      int result = userDAO.signin(userDTO.getUser_id(), userDTO.getUser_pw());
      if(result < 0){
%>
<script>
  alert("존재하지 않는 아이디입니다. 다시 시도해주세요!");
  history.back();
  
</script>
<%
      }
      else if(result == 0){
%>
<script>
  alert("비밀번호를 확인해주세요!");
  history.back();
</script>
<%
      }
      else{
        session.setAttribute("user_id",userDTO.getUser_id());
%>
<script>
  alert("로그인되었습니다!");
  location.href="./kurly_user_main.jsp";
</script>
<%
      }
    }
%>
