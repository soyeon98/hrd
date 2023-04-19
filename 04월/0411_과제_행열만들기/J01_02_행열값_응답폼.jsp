<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<% 
    // 폼 전송 받은 힌글깨짐현상 셋팅 인코딩
    request.setCharacterEncoding("UTF-8");    
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{width: 800px; margin: 0 auto;border-collapse: collapse;}
        table caption{width: 100%; font-size: 28px; font-weight: 600;padding: 100px 0 40px 0 ;}
        th,td{border: 1px solid #ccc; padding: 15px 10px; }
        th{background: #f0f0f0; }
        td{text-align: center;}
    </style>
</head>
<body>
    <%
        int row = Integer.parseInt(request.getParameter("row"));
        int col = Integer.parseInt(request.getParameter("col"));
    %>
    <table>
        <caption>입력받은 행열</caption>

    <%
        int[][] arr = new int[row][col];
        for(int i=0; i < arr.length; i++){
            out.println("<tr>");
            for(int j=0; j < arr[i].length; j++){
                arr[i][j] = (int)(Math.random()*26+65);
                out.println("<td>"+(char)(arr[i][j])+"</td>");
            }
            out.println("<tr>");
        
        }
    
    %>
    </table>
</body>
</html>