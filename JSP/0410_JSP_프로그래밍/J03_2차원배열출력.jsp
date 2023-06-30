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

        table{border-collapse: collapse;  margin: 130px auto;}
        td{text-align: center; border: 1px solid #333;width: 50px; height: 50px;}
    </style>
</head>
<body>
    <table>

        <%
            int[][] arr= new int[5][5];
            int cnt = 0;

            for(int i=0; i < arr.length; i++){
                out.println(" <tr>");
                   
                for(int j=0; j< i;j++){
                    out.println(" <td></td>");
                }
                for(int j=i; j < arr[i].length; j++){
                    arr[i][j]=++cnt;
                
                    out.println("<td>"+arr[i][j]+"</td>");
                }
                out.println(" </tr>");
                out.println(" ");
            }
        
        %>
    </table>
</body>
</html>