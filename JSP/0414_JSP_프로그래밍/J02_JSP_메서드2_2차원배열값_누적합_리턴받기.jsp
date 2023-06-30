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
        table{width: 400px; margin: 130px auto; border-collapse: collapse;}
        table th{padding: 0 0 20px 0;}
        table td{ height: 40px;font-size: 15px;color: #333; border: 1px solid #ccc;}
    </style>
</head>
<body>
    
    <%!
      
        static String method1(int arr[][]){ 
            int cnt=0;  
            String txt="";
            for(int i=0;i< arr.length;i++){
                txt+="<tr>";
                if(i=arr.length-1){
                    txt+="<th>누적합</th></tr>";
                }
                else{
                    txt+="<th>"+(i+1)+"열</th>";
                }
                txt+="<tr>";
                cnt=0;
                for(int j=0;j< arr[i].length;j++){
                    cnt+=arr[i][j]; 
                    txt+="<td>"+arr[i][j]+"</td>";                            
                }
                txt+="<td>"+cnt+"</td></tr>";                
            }
            return txt; 
        }
    %>

    <%
        int[][] arr1={
            {1,2,3,4,5},
            {5,7,9,2,1},
            {7,12,34,34,6},
            {13,42,23,34,55},
            {12,23,53,46,58}
        };
        
        out.println("<table>"+method1(arr1)+"</table>");
    
    
    %>

</body>
</html>