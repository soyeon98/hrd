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
    <title>마켓컬리 회원가입 전송폼</title>
    <style>
        *{margin: 0;padding: 0;box-sizing: border-box;vertical-align: middle;}
        ul{list-style: none;}
        .container{width: 100%; max-width: 640px;margin: 100px auto;}
        .container .gap{width: 100%;}
        .container .gap .title{width: 100%; padding: 0 0 40px 0; border-bottom: 2px solid #333;}
        .container .gap .title h2{font-size: 28px; font-weight: 500;color: #333;letter-spacing: -1px; text-align: center;}

        .container .gap .content{width: 100%;}
        .container .gap .content form{width: 100%;}
        .container .gap .content form >ul{width: 100%;}
        .container .gap .content form >ul >li{width: 100%; padding: 0 20px; display: flex; justify-content: center ; cursor: pointer;}
        .container .gap .content form >ul >li button{padding: 0 20px; width: 120px; height: 40px;}
        .container .gap .content form >ul >li >div{width: 100%; position: relative; padding: 0 130px 0 140px;}
        .container .gap .content form >ul >li >div >label{height: 45px; margin: 10px 0; position: absolute; top: 0;left: 0;display: inline-flex;align-items: center;height: 45px; font-size: 14px; color: #333;font-weight: 600;}
        .container .gap .content form >ul >li >div .center-box{width: 100%; position: relative;}
        .container .gap .content form >ul >li >div .center-box.gender{display: flex; justify-content: space-between;}
        .container .gap .content form >ul >li >div .center-box.chooga{display: flex; justify-content: space-between;}
        .container .gap .content form >ul >li >div .center-box >input[type=text]{width: 100%; height: 45px; margin: 10px 0; border: 1px solid #ccc;background: #fff;padding: 0 15px;font-size: 15px; color: #333; border-radius: 3px;}
        .container .gap .content form >ul >li >div .center-box >ul >li >label >input[type=checkbox]{margin: 10px 0;}
        .container .gap .content form >ul >li >div .center-box.gender >label{width: 100%; margin: 10px 0; padding: 10px 0; display: inline-flex; align-items: center; font-size: 14px; color: #333;font-weight: 500;}
        .container .gap .content form >ul >li >div .center-box >label {font-size: 14px;}
        .container .gap .content form >ul >li >div .center-box >label >input[type=radio]{width: 24px; height: 24px; margin: 0 10px 0 0; appearance: none; border: 1px solid #ccc; border-radius: 50%;}
        .container .gap .content form >ul >li >div .center-box >label >input[type=radio]:checked{border: 6px solid #5f0080;}
        .container .gap .content form >ul >li >div .center-box .birth-box{width: 100%;border: 1px solid #ccc; background: #fff; border-radius: 3px;}
        .container .gap .content form >ul >li >div .center-box .birth-box >ul{width: 90%; margin: 0 auto; display: flex;}
        .container .gap .content form >ul >li >div .center-box .birth-box >ul >li{display: flex; align-items: center; justify-content: center;}
        .container .gap .content form >ul >li >div .center-box .birth-box >ul >li:nth-child(odd){width: 32%;}
        .container .gap .content form >ul >li >div .center-box .birth-box >ul >li:nth-child(even){width: 2%; text-align: center;}
        .container .gap .content form >ul >li >div .center-box .birth-box >ul >li >input{width: 100%; height: 43px; border: 0;margin: 0;padding: 0; font-size: 15px; text-align: center;}

    </style>
</head>
<body>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title">
                    <h2>회원가입</h2>
                </div>
                <div class="content">
                    <form id="kurlyForm" name="kurly_form" method="post" action="./J01_02_과제_응답폼.jsp">
                        <ul>
                            <li>
                                <div>
                                    <label htmlFor="userId">아이디<i>*</i></label>
                                    <div class='center-box'>
                                        <input type="text"  name='user_id' id='userId'  placeholder='아이디를 입력해주세요'/>
                                    </div>
                                </div>    
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="userPw">비밀번호<i>*</i></label>
                                    <div class='center-box'>
                                        <input type="text" name='user_pw' id='userPw' placeholder='비밀번호를 입력해주세요' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="userPw2">비밀번호확인<i>*</i></label>
                                    <div class='center-box'>
                                        <input type="text" name='user_pw2' id='userPw2' placeholder='비밀번호를 확인해주세요' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="name">이름<i>*</i></label>
                                    <div class='center-box'>
                                        <input type="text" name='name' id='name' placeholder='이름을 입력해주세요' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="email">이메일<i>*</i></label>
                                    <div class='center-box'>
                                        <input type="text" name='email' id='email' placeholder='이메일을 입력해주세요' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="hp">휴대폰<i>*</i></label>
                                    <div class='center-box'>
                                        <input type="text" name='hp' id='hp' placeholder='숫자만 입력해주세요' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="addr">주소<i>*</i></label>
                                    <div class='center-box'>
                                        <input type="text" name='addr' id='addr' placeholder='주소를 입력해주세요' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="addr2">상세 주소<i>*</i></label>
                                    <div class='center-box'>
                                        <input type="text" name='addr2' id='addr2' placeholder='나머지 주소를 입력해주세요' />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>성별   </label>
                                    <div class="center-box gender">
                                        <label htmlFor="userMale"> <input type="radio" name='user_gender' id='userMale' value="남자"/>남자</label>
                                        <label htmlFor="userFemale"> <input type="radio" name='user_gender' id='userFemale' value="여자"/>여자</label>
                                        <label htmlFor="userNone"> <input type="radio" name='user_gender' id='userNone' value="선택안함" />선택안함</label>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div>
                                <label>생년월일 </label>
                                <div class="center-box birth">
                                    <div class="birth-box">
                                        <ul>
                                            <li>
                                                <input type="text" maxLength={4} name='user_birth_year' id='userBirthYear' placeholder='YYYY'/>
                                            </li>
                                            <li><i>/</i></li>
                                            <li>
                                                <input type="text" maxLength={2} name='user_birth_month' id='userBirthMonth'placeholder='MM'/>
                                            </li>
                                            <li><i>/</i></li>
                                            <li>
                                                <input type="text" maxLength={2} name='user_birth_date' id='userBirthDate'placeholder='DD'/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='service-box'>
                            <div>
                                <label>이용약관동의<i>*</i>  </label>
                                <div class="center-box service">
                                    <ul>
                                        <li>
                                            <label>
                                                 <input 
                                        
                                                    type="checkbox" name='user_service' 
                                                    id='userServiceAll' 
                                                    value='전체 동의합니다.'
          
                                                 />전체 동의합니다.</label>
                                            <h5>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</h5>
                                        </li>
                                        <li>
                                            <label>
                                                 <input  
                                                    type="checkbox"
                                                    name='user_service' 
                                                    id='userService1' 
                                                    value='이용약관 동의(필수)'

                                                  />이용약관 동의</label><span>필수</span>
                                        </li>
                                        <li>
                                            <label> 
                                                <input  
                                                    type="checkbox" 
                                                    name='user_service' 
                                                    id='userService2' 
                                                    value='개인정보 수집∙이용 동의(필수)'
                       
                                                />개인정보 수집∙이용 동의</label><span>필수</span>
                                        </li>
                                        <li>
                                            <label> 
                                                <input  
                                                    type="checkbox" 
                                                    name='user_service' 
                                                    id='userService3' 
                                                    value='개인정보 수집∙이용 동의(선택)'
                  
                                                />개인정보 수집∙이용 동의</label><span>선택</span>
                                        </li>
                                        <li>
                                            <label>
                                                 <input 
                                                    type="checkbox"
                                                    name='user_service' 
                                                    id='userService4' 
                                                    value='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'
                                
                                                  />무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><span>선택</span>
                                        </li>
                                        <li class='service56'>
                                            <label > 
                                                <input  
                                                    type="checkbox" 
                                                    name='user_service' 
                                                    id='userService5' 
                                                    value='SMS'
                                            
                                          
                                                />SMS</label>
                                            <label>
                                                 <input  
                                                    type="checkbox" 
                                                    name='user_service' 
                                                    id='userService6' 
                                                    value='이메일'
                                           
                                                 />이메일</label>
                                            <h6>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</h6>
                                        </li>
                                        <li>
                                            <label> 
                                                <input 
                                                    type="checkbox"
                                                    name='user_service'
                                                    id='userService7' 
                                                    value='본인은 만 14세 이상입니다.(필수)'
                                             
                                                />본인은 만 14세 이상입니다.</label><span>필수</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </li>
                        <li>
                            <button type='submit'>가입하기</button>
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>