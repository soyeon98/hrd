import React from 'react';
import $ from 'jquery';


export default function SignUpComponent ({naverForm})  {

    const[state,setState]=React.useState(naverForm);

    const onChangeId=(e)=>{
        let 아이디='';
        아이디 = e.target.value;
        setState({
            ...state,
            아이디:아이디
        })
    }
    const onChangePw=(e)=>{
        let 비밀번호='';
        비밀번호 = e.target.value;
        setState({
            ...state,
            비밀번호:비밀번호
        })
    }
    const onChangeName=(e)=>{
        let 이름='';
        이름 = e.target.value;
        setState({
            ...state,
            이름:이름
        })
    }
    const onChangeYear=(e)=>{
        let 생년='';
        생년 = e.target.value;
        setState({
            ...state,
            생년:생년
        })
    }
    const onChangeMonth=(e)=>{
        let 생월='';
        생월 = e.target.value;
        setState({
            ...state,
            생월:생월
        })
    }
    const onChangeDate=(e)=>{
        let 생일='';
        생일 = e.target.value;
        setState({
            ...state,
            생일:생일
        })
    }
    const onChangeGender=(e)=>{
        let 성별='';
        성별 = e.target.value;
        setState({
            ...state,
            성별:성별
        })
    }
    const onChangeEmail=(e)=>{
        let 이메일='';
        이메일 = e.target.value;
        setState({
            ...state,
            이메일:이메일
        })
    }
    const onChangeHp=(e)=>{
        let 휴대전화='';
        휴대전화 = e.target.value;
        setState({
            ...state,
            휴대전화:휴대전화
        })
    }

    const onSubmitSignUp=(e)=>{
        e.preventDefault();

        const formData={
            "id":state.아이디,
            "pw":state.비밀번호,
            "name":state.이름,
            "year":state.생년,
            "month":state.생월,
            "date":state.생일,
            "gender":state.성별,
            "email":state.이메일,
            "hp":state.휴대전화
        }

        $.ajax({
            url:'http://localhost:8080/jsp/0512_과제_네이버/naver/signup_action.jsp',
            type:'post',
            data:formData,
            success(res){
                console.log('AJAX 성공');
                console.log(res);
              alert('AJAX 성공');
            },
            error(err){
                console.log('AJAX 실패!'+err);
                alert('AJAX 실패');
            }
        })
    }



    return (
        <div id='signUp'>
            <div className="container">
                <div className="gap">
                    <div className="title"><div className="img"></div></div>
                    <div className="content">
                        <form onSubmit={onSubmitSignUp} id="naverForm" name="naver_form" method="post" action="./signup_action.jsp">
                            <div className="join-box">
                                <label for="id">아이디</label>
                                <input 
                                    type="text" name="id" id="id" placeholder="" required autoFocus
                                    onChange={onChangeId}
                                    value={state.아이디}
                                /><span>@naver.com</span>
                            </div>
                            <div className="join-box">
                                <label for="pw">비밀번호</label>
                                <input 
                                    type="text" name="pw" id="pw" placeholder="" required autoFocus
                                    onChange={onChangePw}
                                    value={state.비밀번호}
                                />
                            </div>
                            <div className="join-box">
                                <label for="pwOk">비밀번호 재확인</label>
                                <input type="text" name="pw_ok" id="pwOk" placeholder="" required autoFocus/>
                            </div>
                            <div className="join-box">
                                <label for="name">이름</label>
                                <input 
                                    type="text" name="name" id="name" placeholder="" required autoFocus
                                    onChange={onChangeName}
                                    value={state.이름}
                                />
                            </div>
                            <div className="join-box birth">
                                <label for="birth">생년월일</label>
                                <input type="text" name="year" id="year" placeholder="년(4자리)" required autoFocus onChange={onChangeYear} value={state.생년}/>
                                <select type="text" name="month" id="month" placeholder="" onChange={onChangeMonth} value={state.생월} >
                                    <option value="월">월</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>   
                                <input type="text" name="date" id="date" placeholder="일" required autoFocus onChange={onChangeDate} value={state.생일}/>
                            </div>
                            <div className="join-box">
                                <label for="gender">성별</label>
                                <select type="text" name="gender" id="gender" className="gender" onChange={onChangeGender} value={state.성별}>
                                    <option value="성별">성별</option>
                                    <option value="여자">여자</option>
                                    <option value="남자">남자</option>
                                    <option value="선택 안함">선택 안함</option>
                                </select>
                            </div>
                            <div className="join-box">
                                <label for="email">본인 확인 이메일 <span>(선택)</span> </label>
                                <input type="text" name="email" id="email" placeholder="선택입력" required autoFocus onChange={onChangeEmail} value={state.이메일}/>
                            </div>
                            <div className="join-box">
                                <label for="hp">휴대전화</label>
                                <input type="text" name="hp" id="hp" placeholder="전화번호 입력" required autoFocus onChange={onChangeHp} value={state.휴대전화}/>
                            </div>
                            <button type="submit">가입하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

SignUpComponent.defaultProps={
    naverForm:{
        아이디:'',
        비밀번호:'',
        이름:'',
        생년:'',
        생월:'월',
        생일:'',
        성별:'성별',
        이메일:'',
        휴대전화:''
    }
}