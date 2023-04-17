<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>반복문 for 구현하기</h1>
    <h3>문자열 배열 생성하기</h3>
    <%
        String[] str_ar = {"JAVA","JSP","REACT","NODE","SASS","PHP","VUE","JQUERY","JAVASCRIPT","TYPESCRIPT"};
    %>

    <h3>문자열 배열 출력하기 for</h3>
    <%
        for(int i=0;i<str_ar.length;i++){
            out.println("<p style='background:#f7f7f7;'><em style='font-style:normal;color:#38a;'>str_ar[" + i + "] 배열의 값은 : " +str_ar[i] + "</em></p>");
        }
    %>

    <h3>문자열 배열 출력하기 while</h3>

    <%
        int i=-1;
        while(i<str_ar.length-1){
            i++;
            out.println("<div><i>str_ar[" + i + "] 배열의 값은 : " +str_ar[i] + "</i></div>");
        }
    %>


</body>
</html>