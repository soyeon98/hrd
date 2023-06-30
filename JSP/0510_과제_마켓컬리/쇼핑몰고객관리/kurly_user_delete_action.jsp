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
      int result = userDAO.delete(userDTO);
      if(result == -1){
%>
<script>
  alert("아이디와 비밀번호를 확인해주세요!");
  history.back();
  
</script>
<%
      }
      else{
%>
<script>
  alert("회원 탈퇴되었습니다!");
  location.href="./kurly_user_logout_action.jsp";
</script>
<%
      }
    }
%>
