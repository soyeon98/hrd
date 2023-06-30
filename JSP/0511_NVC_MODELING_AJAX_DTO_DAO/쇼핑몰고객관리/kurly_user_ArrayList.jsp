<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<%@ page import="java.util.*" %>
<% request.setCharacterEncoding("UTF-8");%>

<%
    ArrayList<String> list = new ArrayList<>();
    list.add("딸기");    
    list.add("사과");    
    list.add("수박");    
    list.add("복숭아");    
    list.add("체리");  
    list.set(4,"앵두");  // 해당 인덱스 값 변경 
    // list.remove(0); // 해당 인덱스 값 삭제
    // list.clear(); // 모두 삭제

    out.println("<hr>");
    out.println(list);

   
    out.println("<ol>");
    for(String item : list){
        out.println("<li>"+item+"</li>");
    }
    out.println("</ol>");


    out.println("<ol>");
    for(int i=0; i<list.size(); i++){
        out.println("<li>"+list.get(i)+"</li>");
    }
    out.println("</ol>");
%>




