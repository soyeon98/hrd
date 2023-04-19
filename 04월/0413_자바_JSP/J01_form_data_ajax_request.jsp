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
    <title>폼데이터 AJAX JSP 서버사이드 통신</title>
    <script src="./js/lib/jquery-2.2.4.min.js"></script>

    <style>
        *{margin: 0;padding: 0;box-sizing: border-box; vertical-align: middle;}
        ul{list-style: none;}
        #wrap{width: 100%; padding: 100px;}
        #wrap form{width: 600px; margin: 0 auto; padding: 50px; background: #f7f7f7; font-size: 16px;}
        #wrap form ul{width: 100%; padding: 20px 0;}
        #wrap form ul li{width: 100%; padding: 10px 0;}
        #wrap form ul li input{width: 100%; height: 50px; border: 1px solid #ccc; padding: 0 15px;}
        #wrap form button{width: 100%; height: 40px; background: #39c; border: 0;color: #fff;cursor: pointer;transition: all 0.3s;}
        #wrap form button:hover{background: #fff; border: 0;color: #39c; border: 2px solid #39c;}

        #wrap h2{text-align: center; font-weight: 600; color: #666; padding: 30px 0 0 0;}
        #wrap .result{
            color: #39c; font-size: 20px; text-align: center; padding: 20px 0; line-height: 140%; border: 1px solid #ccc;
            width: 600px; margin: 30px auto; padding: 50px; background: #f7f7f7; font-size: 16px;
        }

    </style>

</head>
<body>
    <div id="wrap">
        <form>
            <ul>
                <li>
                    <input type="text" id="name" name="name" placeholder="이름 입력">
                </li>
                <li>
                    <input type="text" id="hp" name="hp" placeholder="휴대폰 번호 입력">
                </li>
            </ul>
            <button type="button" class="submit-btn">AJAX 전송</button>
        </form>
        <h2>AJAX Response Result</h2>
        <div class="result"></div>
    </div>

    <script>

        (($)=>{

            $('.submit-btn').on({
                click(e){
                    e.preventDefault();
                    const formData ={
                        name:$('#name').val(),
                            hp:$('#hp').val()
                    }
                    $.ajax({
                        url:'./J02_form_data_ajax_response.jsp',
                        type:'POST',
                        data:formData,
                        success(res){
                            console.log(res);
                            $('.result').html(res);
                        },
                        error(err){
                            console.log('AJAX 실패!',err);
                        }
                    });
                }
            });

        })(jQuery);
    </script>

</body>
</html>