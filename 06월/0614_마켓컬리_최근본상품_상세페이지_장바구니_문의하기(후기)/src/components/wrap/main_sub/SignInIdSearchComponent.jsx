import React from 'react';
import '../scss/sign_in_id_search.scss';

export default function SignInIdSearchComponent () {

    const [isTab,setIsTab] = React.useState(false);
    const [isBtn,setIsBtn] = React.useState(false);
    const [userName,setUserName] = React.useState('');
    const [userHp,setUserHp] = React.useState('');

    const onChangeUserName=(e)=>{
        setUserName(e.target.value);
    }
    const onChangeUserHp=(e)=>{
        setUserHp(e.target.value);
    }

    return (
        <div id='signInIdSearch'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>아이디 찾기</h2>
                    </div>
                    <div className="content">
                        <form action="">
                            <ul>
                                <li>
                                    <button className={isTab?'':'on'}>휴대폰 인증</button>
                                    <button  className={isTab?'on':''}>이메일 인증</button>
                                </li>
                                <li><label htmlFor="userName">이름</label></li>
                                <li><input type="text" name='user_name' id='userName' placeholder='이름을 입력해 주세요' onChange={onChangeUserName} value={userName}/></li>
                                <li><label htmlFor="userHp">휴대폰 번호</label></li>
                                <li><input type="text" name='user_hp' id='userHp' placeholder='휴대폰번호를 입력해 주세요' onChange={onChangeUserHp} value={userHp}/></li>
                                <li></li>
                                <li><button className={isBtn?'on':''}>인증번호 받기</button></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};


