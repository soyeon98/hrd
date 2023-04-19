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
    <title>구구단 응답폼</title>
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
        int s_dan = Integer.parseInt(request.getParameter("s_dan"));
        int e_dan = Integer.parseInt(request.getParameter("e_dan"));
    %>
    <table>
        <caption>구구단</caption>

    <%

        int[][] arr = new int[9][e_dan-s_dan+1];
        
        out.print("<tr>");
        for(int i= s_dan; i <= e_dan; i++){
            out.print("<th>"+i+"단</th>");
        }
        out.print("</tr>");

        int row=-1;
        for(int i=1; i <= arr.length; i++){
            out.println("<tr>");
                int col=-1;
                row++;
                
            for(int j=(s_dan); j <= (e_dan); j++){
                col++;
                arr[row][col] = j*i;
                out.print("<td>"+j+"×"+i+"="+arr[row][col]+"</td>");
            }
            out.println("</tr>");
        
        }
    
    %>
    </table>
</body>
</html>