import React, {useEffect,useState} from 'react';
import ModalComponent from './sign_up/ModalComponent';
import '../../scss/signup.scss';

export default function SignUpComponent ({timerClear,setId,minutes,seconds,isTimerFn,timerMsg}) {
    const [state,setState] = useState({
        isModal:false,
        modalMsg:'',
        hpOkNumber:0,
        아이디:'',
        비밀번호:'',
        이름:'',
        휴대폰번호:'',
        휴대폰인증번호:'',
        isUserHp:true,
        isUserHpOk:true,
        isTimer:false
    });

    
    // 1-1. 아이디 입력상자
    const onChangeUserId=(e)=>{
        setState({
            ...state,
            아이디:e.target.value
        });
    }
    // 1-2. 비번 입력상자
    const onChangeUserPw=(e)=>{
        setState({
            ...state,
            비밀번호:e.target.value
        });
    }
    // 1-3. 이름 입력상자
    const onChangeUserName=(e)=>{
        setState({
            ...state,
            이름:e.target.value
        });
    }
    // 1-4. 휴대폰번호 입력상자
    const onChangeUserHp=(e)=>{
        let isUserHp=true;
        if(e.target.value.length>=10){
            isUserHp=false;
        }
        else{
            isUserHp=true;
        }
        setState({
            ...state,
            휴대폰번호:e.target.value,
            isUserHp:isUserHp
        });
    }
    // 1-5. 휴대폰인증번호 입력상자
    const onChangeUserHpOk=(e)=>{ 
        let isUserHpOk = true;
        if(e.target.value.length===6){
            isUserHpOk = false;
        }
        else{
            isUserHpOk = true;
        }
        setState({
            ...state,
            휴대폰인증번호:e.target.value,
            isUserHpOk:isUserHpOk
        });
    }
        // 모달창열기 클릭이벤트
    const onClickHpOkNumber =(e)=> {
        e.preventDefault();
        let hpOkNumber = 0;

        // 6자리의 랜덤한 번호를 만들자(random 함수 0~9)
        hpOkNumber = Math.floor(Math.random()*900000+100000);
        
        setState({
            ...state,
            isModal:true,
            modalMsg:`휴대폰 인증번호가 전송되었습니다.${hpOkNumber}`,//문자형
            hpOkNumber:hpOkNumber, //숫자형
            isTimer:true
        });

    }
    // 모달창닫기 클릭이벤트 => 모달창에서 확인버튼 클릭하면 호출되어서 실행하는 이벤트
    const ModalClose=()=>{
        setState({
            ...state,
            isModal:false
        });
    }

    // 인증번호 비교
    const onClickOkIf=(e)=>{
        e.preventDefault();
        let modalMsg='';
        //상태관리 인증번호와 휴대폰 인증번호 입력상자에 입력된 인증번호를 비교
        if(state.hpOkNumber===Number(state.휴대폰인증번호)){
   
            modalMsg='인증되었습니다.';
            timerClear();
            setState({
                ...state,
                isTimer:false
            })
        }
        else{
            
            modalMsg='인증번호가 틀렸습니다.';
        }
        setState({
            ...state,
            isModal:true,
            modalMsg:modalMsg
        });
    }

    return (
        <div id='signUp'>
            <div className="title"><h2>-- 회원가입폼 --</h2></div>
            <div className="content">
                <form name='sign_up' id='signUp' method='post' action='./sign_up.php'>
                    <ul>
                        <li>
                            <div>
                                <input onChange={onChangeUserId} type="text" name='user_id' id='userId' placeholder='아이디를 입력하시오.' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserPw} type="password" name='user_pw' id='userPw' placeholder='비밀번호를 입력하시오.' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserName} type="text" name='user_name' id='userName' placeholder='이름을 입력하시오.' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserHp}type="text" name='user_hp' id='userHp' placeholder='휴대폰 번호를 입력하시오.' />
                                <button
                                    onClick={onClickHpOkNumber} 
                                    type='button' 
                                    disabled={state.isUserHp} /* false이면 버튼 사용 가능 */
                                    className={state.isUserHp===false?'on':''} /* 삼항연산자  */
                                    >인증번호 받기
                                </button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserHpOk}type="text" name='user_idOk' id='userIdOk' placeholder='휴대폰 인증번호를 입력하시오.' />
                                <button 
                                    onClick={onClickOkIf} 
                                    type='button' 
                                    disabled={state.isUserHpOk}
                                    className={state.isUserHpOk===false?'on':''}
                                    >인증번호 확인
                                </button>
                                <span>{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}</span>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>

            {
                state.isModal && <ModalComponent isTimer={state.isTimer} isTimerFn={isTimerFn} ModalClose={ModalClose} modalMsg={state.modalMsg}/>
                }
        </div>
    );
};

