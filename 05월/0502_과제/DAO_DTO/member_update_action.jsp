<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="member.MemberDAO"%>
<%@ page import="java.io.PrintWriter" %>

<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="memberDTO" class="member.MemberDTO" scope="page"/>

<jsp:setProperty name="memberDTO" property="num" />
<jsp:setProperty name="memberDTO" property="pw" />


<%

    if(memberDTO.getNum()==null ||memberDTO.getPw()==null){
%>
        <script>
            alert('빈 항목을 확인 후 입력해 주세요.');
            history.back();
        </script>
<%
    }
    else{
        MemberDAO memberDAO = new MemberDAO(); 
        int result = memberDAO.update(memberDTO);
        if(result==-1){
 %>
        <script>
            alert('사업장 관리 번호가 확인되지 않습니다. 확인 후 다시 입력해주세요');
            history.back();
        </script>
<%

        }
        else{
%>
            <script>
                alert('등록되었습니다.');
                window.location.href="./index.jsp";
            </script>
<%  

        }
    }
%>