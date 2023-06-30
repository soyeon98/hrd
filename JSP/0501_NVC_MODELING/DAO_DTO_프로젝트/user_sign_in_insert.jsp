<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="user.UserDAO" %>
<%@ page import="java.io.PrintWriter" %>
<%
    request.setCharacterEncoding("UTF-8");
%>

<jsp:useBean id="userDTO" class="user.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id"/>
<jsp:setProperty name="userDTO" property="user_pw"/>
<jsp:setProperty name="userDTO" property="user_name"/>
<jsp:setProperty name="userDTO" property="user_hp"/>
<jsp:setProperty name="userDTO" property="user_email"/>

<%
    // 입력상자 값이 없다면 다시 돌아가서 입력하시오.
    // 게터함수에서 값을 가져온다 그리고 값이 비어 있다면 돌아가서 입력대기
    if(userDTO.getUser_id()==null || userDTO.getUser_pw()==null || userDTO.getUser_name()==null ||userDTO.getUser_hp()==null ||userDTO.getUser_email()==null ){
        PrintWriter script = response.getWriter();
        script.println("<script>");
        script.println("alert('입력값이 비워있는 항목이 있습니다.\\n 다시 입력 후 등록 하세요');");
        script.println("history.go(-1);");
        script.println("</script>");
    }
    else{ //입력값 모두 완료되면 가져온 DAO 객체를 인스턴스 생성한다
        UserDAO newUserDAO = new UserDAO();
        
        // insert(매개변수 DTO 인스턴스 이름) 메서드 호출 실행
        int result = newUserDAO.insert(userDTO);
    

        // result 변수값이 -1이면 중복된 아이디 ? 아이디 중복 불가

        if(result == -1){
            PrintWriter script2 = response.getWriter();
            script2.println("<script>");
            script2.println("alert('중복된 아이디입니다. 다시 입력 후 등록 하세요');");
            script2.println("history.back();");
            script2.println("</script>");
        }
        else{
            PrintWriter script3 = response.getWriter();
            script3.println("<script>");
            script3.println("alert('등록되었습니다.');");
            script3.println("history.back();"); 
            script3.println("</script>");
        }
    }
%>