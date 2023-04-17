import React from 'react';


export default function SignUpComponent(props) {

    const[state,setState]=React.useState(props.회원가입);

    // 성별 라디오버튼 이벤트
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별:e.target.value
        })
    }


    return (
        <main id='signUp'>
            <section id='section1'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>회원가입</h2>
                            <p><span><i>*</i>필수입력사항</span></p>
                        </div>
                        <div className="content">
                            <form name='sign_up_form' id='signUpForm' method='post' action="./sign_up.php">
                                <ul>
                                    <li>
                                        <div>
                                            <label htmlFor="userId">아이디<i>*</i></label>
                                            <div className='center-box'>
                                                <input type="text" maxLength={16} name='user_id' id='userId' placeholder='아이디를 입력해주세요'/>
                                            </div>
                                            <button>중복확인</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw">비밀번호<i>*</i></label>
                                            <div className='center-box'>
                                                <input type="password" maxLength={16} name='user_pw' id='userPw' placeholder='비밀번호를 입력해주세요'/>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw2">비밀번호확인<i>*</i></label>
                                            <div className='center-box'>
                                                <input type="password" maxLength={16} name='user_pw2' id='userPw2' placeholder='비밀번호를 한번 더 입력해주세요'/>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userName">이름<i>*</i></label>
                                            <div className='center-box'>
                                                <input type="text" name='user_name' id='userName' placeholder='이름을 입력해주세요'/>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userEmail">이메일<i>*</i></label>
                                            <div className='center-box'>
                                                <input type="email" name='user_email' id='userEmail' placeholder='이메일을 입력해주세요'/>
                                            </div>
                                            <button>중복확인</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userHp">휴대폰<i>*</i></label>
                                            <div className='center-box'>
                                                <input type="text" maxLength={11} name='user_hp' id='userHp' placeholder='숫자만 입력해주세요'/>
                                            </div>
                                            <button>인증번호받기</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userAddress1">주소<i>*</i></label>
                                            <div className='center-box'>
                                                { //주소검색 이전 버튼
                                                state.isAddress1 && <button type='button'>주소검색</button>
                                                }
                                                { //주소검색 완료 후 주소 입력된 상자
                                                    state.isAddress2 &&
                                                    <>
                                                       <input type="text" name='user_address1' id='userAddress1' placeholder='검색 주소1'/>
                                                        <input type="text" name='user_address2' id='userAddress2' placeholder='나머지 주소2'/>
                                                    </>
                                             
                                                }
                                                {
                                                    state.isAddress2 && 
                                                    <h5>샛별배송</h5>
                                                }
                                                
                                                <h6>배송지에 따라 상품 정보가 달라질 수 있습니다.</h6>
                                            </div>
                                            {
                                                state.isAddress2 &&
                                                <button>재검색</button>
                                            }
                                           
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label>성별   </label>
                                            <div className="center-box gender">
                                                   <label htmlFor="userMale"> <input onChange={onChangeGender} type="radio" name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')}/>남자</label>
                                                   <label htmlFor="userFemale"> <input onChange={onChangeGender} type="radio" name='user_gender' id='userFemale' value={'여자'} checked={state.성별.includes('여자')}/>여자</label>
                                                   <label htmlFor="userNone"> <input onChange={onChangeGender} type="radio" name='user_gender' id='userNone' value={'선택안함'} checked={state.성별.includes('선택안함')}/>선택안함</label>
                                            </div>

                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label>생년월일 </label>
                                            <div className="center-box birth">
                                                <div className="birth-box">
                                                    <ul>
                                                        <li><input type="text" maxLength={4} name='user_birth_year' id='userBirthYear' placeholder='YYYY'/></li>
                                                        <li><i>/</i></li>
                                                        <li><input type="text" maxLength={2} name='user_birth_month' id='userBirthMonth' placeholder='MM'/></li>
                                                        <li><i>/</i></li>
                                                        <li><input type="text" maxLength={2} name='user_birth_date' id='userBirthDate' placeholder='DD' /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label>추가입력 사항 </label>
                                            <div className="center-box chooga">
                                                   <label htmlFor="userMale"> <input  type="radio" name='user_chooga' id='userChooga1' value={'초대 추천인 아이디'}/>초대 추천인 아이디</label>
                                                   <label htmlFor="userFemale"> <input  type="radio" name='user_chooga' id='userChooga2' value={'참여 이벤트명'} />참여 이벤트명</label>
                                                    { 
                                                        state.isChooga1&&(
                                                            <>   
                                                                <input type="text " name='user_chooga_id' id='userChoogaId' placeholder='추천인 아이디를 입력해 주세요' />     
                                                                <h6>가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.</h6>
                                                            </>
                                                        )
                                                   }
                                                   {
                                                        state.isChooga2&&(
                                                           <>
                                                                <input type="text " name='user_chooga_event' id='userChoogaEvent' placeholder='참여 이벤트명을 입력해 주세요.' />     
                                                                <h6>
                                                                추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다. <br />
                                                                가입 이후는 수정이 불가능 합니다. <br />
                                                                가입 이후는 수정이 불가능 합니다.
                                                                </h6>
                                                                <button>아이디 확인</button>
                                                            </>
                                                        )
                                                    }
                                            </div>
                                           
                                        </div>
                                    </li>
                                    <li className='hr'>
                                        <hr />
                                    </li>
                                    <li className='service-box'>
                                        <div>
                                            <label>이용약관동의<i>*</i>  </label>
                                            <div className="center-box service">
                                                <ul>
                                                    <li>
                                                        <label htmlFor="userMale"> <input onChange={onChangeGender} type="checkbox" name='user_service_all' id='userServiceAll' value={'전체 동의합니다.'} />전체 동의합니다.</label>
                                                        <h5>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</h5>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="userMale"> <input onChange={onChangeGender} type="checkbox" name='user_service1' id='userService1' value={'이용약관 동의(필수)'} />이용약관 동의</label><span>필수</span>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="userMale"> <input onChange={onChangeGender} type="checkbox" name='user_service2' id='userService2' value={'개인정보 수집∙이용 동의(필수)'} />개인정보 수집∙이용 동의</label><span>필수</span>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="userMale"> <input onChange={onChangeGender} type="checkbox" name='user_service3' id='userService3' value={'개인정보 수집∙이용 동의(선택)'} />개인정보 수집∙이용 동의</label><span>선택</span>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="userMale"> <input onChange={onChangeGender} type="checkbox" name='user_service4' id='userService4' value={'이용약관 동의(선택)'} />무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><span>선택</span>
                                                    </li>
                                                    <li className='service56'>
                                                        <label htmlFor="userMale"> <input onChange={onChangeGender} type="checkbox" name='user_service5' id='userService5' value={'SMS'} />SMS</label>
                                                        <label htmlFor="userMale"> <input onChange={onChangeGender} type="checkbox" name='user_service6' id='userService6' value={'이메일'} />이메일</label>
                                                        <h6>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</h6>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="userMale"> <input onChange={onChangeGender} type="checkbox" name='user_service7' id='userService7' value={'본인은 만 14세 이상입니다.(필수)'} />본인은 만 14세 이상입니다.</label><span>필수</span>
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
            </section>     
        </main>
    );
};


SignUpComponent.defaultProps={
    회원가입:{
        아이디:'', //string
        비밀번호:'', //string
        비밀번호확인:'', //string
        이름:'', //string
        이메일:'', //string
        휴대폰:'', //string
        주소1:'', //string
        주소2:'', //string


        isAddress1:true, //Boolean
        isAddress2:false,//Boolean
        성별:'선택안함',

        생년:"",
        생월:'',
        생일:'',

        추가입력사항:'',

        isChooga1:false,
        isChooga2:false

        
        
    }
    
}