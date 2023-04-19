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
    <style>
        body{text-align: center;}
        table{width: 400px; margin: 50px auto; border-collapse: collapse;}
        table td{width: 100%; height: 40px;font-size: 15px;color: #333; border: 1px solid #ccc;}
    </style>
</head>
<body>

    <%!
        // 리턴값있는 메서드1 
        static String method1(String str){
            return str;
        }

        static String method2(String str, int num){
            String txt="";
            txt+="<table>";
            for(int i=0;i < num;i++){
                txt +="<tr><td>"+(i+1)+' '+str+"</td></tr>";
            }
            txt+="</table>";
            return txt;
        }
    
    %>

    <%
        out.println("<h1>"+method1("JSP 문자열 매개변수")+"</h1>");
        out.println("<div>"+method2("JSP 안녕하세요!",6)+"</div>");
    %>

</body>
</html>