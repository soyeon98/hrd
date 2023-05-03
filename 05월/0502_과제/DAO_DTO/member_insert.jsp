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
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="up">
                    <a href="./gaib_view.jsp">회원 가입 정보 목록</a>
                </div>
                <div class="title">
                    <h1>회원가입</h1>
                </div>
                <div class="content">
                    <p><img src="./img/ico-compulsory.png" alt="">표는 필수 입력 사항이며, [동일아이디검색] 및 [가입여부확인] 버튼을 반드시 눌러주세요.</p>
                    <form action="./member_insert_action.jsp" method="post" name="gaib_form" id="gaibForm" >
                        <table>
                            <tr>
                                <th>사업장관리번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="num" id="num" ></td>
                            </tr>
                            <tr>
                                <th>사업장기호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="sign1" id="sign1" ></td>
                            </tr>
                            <tr>
                                <th>단위사업장기호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="sign2" id="sign2" ></td>
                            </tr>
                            <tr>
                                <th>아이디<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="id" id="id" placeholder="영문+숫자 6~10자 이내" ></td>
                            </tr>
                            <tr>
                                <th>비밀번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="pw" id="pw" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내" ></td>
                            </tr>
                            <tr>
                                <th>비밀번호확인<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="pw_ok" id="pwOk" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내" ></td>
                            </tr>
                            <tr>
                                <th>비밀번호 분실 시 확인 <br> 질문<img src="./img/ico-compulsory.png" alt=""></th>
                                <td>
                                    <label for="chkQue">
                                        <select type="text" name="chk_que" id="chkQue" placeholder="">
                                            <option value="질문을 선택하세요." selected>질문을 선택하세요.</option>    
                                            <option value="나의 아버지 성함은?." >나의 아버지 성함은?</option>        
                                            <option value="나의 그리운 고향은?" >나의 그리운 고향은?</option>    
                                            <option value="나의 첫째아이 이름은?" >나의 첫째아이 이름은?</option>    
                                            <option value="나의 초등학교 이름은?" >나의 초등학교 이름은?</option>    
                                            <option value="나의 보물 제1호는?" >나의 보물 제1호는?</option>    
                                            <option value="기억에 남는 추억의 장소는?" >기억에 남는 추억의 장소는?</option>    
                                            <option value="나의 인생 좌우명은?" >나의 인생 좌우명은?</option>    
                                            <option value="내가 좋아하는 캐릭터는?" >내가 좋아하는 캐릭터는?</option>    
                                            <option value="추억하고 싶은 날짜가 있다면?">추억하고 싶은 날짜가 있다면?</option>    
                                            <option value="인상 깊게 읽은 책 이름은?" >인상 깊게 읽은 책 이름은?</option>    
                                            <option value="내가 가장 존경하는 인물은?" >내가 가장 존경하는 인물은?</option>    
                                            <option value="가장 기억에 남는 선생님 성함은?" >가장 기억에 남는 선생님 성함은?</option>    
                                            <option value="내가 받았던 선물 중 기억에 남는 선물은?">내가 받았던 선물 중 기억에 남는 선물은?</option>    
                                        </select>    
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 분실 시 확인 <br> 답변<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="chk_ans" id="chkAns" placeholder="조회 답변은 띄어쓰기 포함 10자 이내" ></td>
                            </tr>
                            <tr>
                                <th>전화번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="hp" id="hp" placeholder="“-(하이픈)” 없이 입력 (예 : 01012345678)"></td>
                            </tr>
                            <tr>
                                <th>업무담당자명<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="name" id="name" placeholder="사업장의 소속된 직장 가입자 직원 또는 대표자"></td>
                            </tr>
                            <tr>
                                <th>이메일<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="email" id="email"  ></td>
                            </tr>
                            <tr>
                                <th>소식지 수신여부<img src="./img/ico-compulsory.png" alt=""></th>
                                <td>
                                    <label for="recieveY"><input type="radio" name="receive" id="receiveY" value="받음" checked="true">받음</label>
                                    <label for="recieveN"><input type="radio" name="receive" id="receiveN" value="안받음">안받음 (공단의 다양한 소식을 무료로 만나보세요)</label>
                                </td>
                            </tr>
                        </table>
                        <div class="btn-box">
                            <button type="submit">확인</button>
                            <button>취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>