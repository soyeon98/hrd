import React, { Component } from 'react';
import '../scss/style.scss';

class WrapComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            아이디:'',
            비밀번호:'',
            비밀번호확인:'',
            이름:'',
            이메일:'',
            휴대폰:'',
            가입정보:[],
            음식:['초밥','치킨','우동','라면','곱창'],
            좋아하는음식:[]
        }
    }
    onChangeUserId=(e)=>{
        this.setState({
            아이디:e.target.value
        })
    }
    onChangeUserPw=(e)=>{
        this.setState({
            비밀번호:e.target.value
        })
    }
    onChangeUserPwOk=(e)=>{
        this.setState({
            비밀번호확인:e.target.value
        })
    }
    onChangeName=(e)=>{
        this.setState({
            이름:e.target.value
        })
    }
    onChangeEmail=(e)=>{
        this.setState({
            이메일:e.target.value
        })
    }
    onChangeHp=(e)=>{
        this.setState({
            휴대폰:e.target.value
        })
    }

    onChangeCheckEvent=(e)=>{         
        if(e.target.checked===true){
            this.setState({
                좋아하는음식:[...this.state.좋아하는음식,e.target.value]
            })
        }
        else{ 
            this.setState({
                좋아하는음식: this.state.좋아하는음식.filter((item)=>item!==e.target.value)
            })
        }

        }
    //저장하기 클릭이벤트
    onClickSave=(e)=>{
        e.preventDefault();
        this.setState({
            가입정보:[
                ...this.state.가입정보, //새로운 데이터는 현재 데이터 아래에 추가해라
                {
                아이디:this.state.아이디,
                비밀번호:this.state.비밀번호,
                비밀번호확인:this.state.비밀번호확인,
                이름:this.state.이름,
                이메일:this.state.이메일,
                휴대폰:this.state.휴대폰,
                좋아하는음식:this.state.좋아하는음식,
                가입일자:`${new Date().getFullYear()}-${new Date().getMonth() + 1 }-${new Date().getDate()}`
            }
           
        ]
        });
        alert('저장되었습니다');


    }

    render() {
        return (
            <div id='wrap'>
              <div className="container">
                <div className="title">
                    <h1>회원가입</h1>
                    <h3><i>*</i>필수입력사항</h3>
                </div>
                <div className="content">
                    <form name='member_form'id='memberForm' method='post' action="./member_form.php">
                        <ul>
                            <li>
                                <div>
                                    <label htmlFor="userId">아이디<i>*</i></label>
                                    <input 
                                        type="text" name='user_id' id='userId' placeholder='아이디를 입력해주세요'
                                        onChange={this.onChangeUserId}      
                                        value={this.state.아이디}   //상태관리 변수 내용이 변경되면 입력상자 내용도 변경된다.                                  
                                     />
                                    <button>중복확인</button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="userPw">비밀번호<i>*</i></label>
                                    <input 
                                        type="password" name='user_pw' id='userPw' placeholder='비밀번호를 입력해주세요' 
                                        onChange={this.onChangeUserPw}      
                                        value={this.state.비밀번호} 
                                    />                          
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="userPwOk">비밀번호확인<i>*</i></label>
                                    <input 
                                        type="password" name='user_pw_ok' id='userPwOk' placeholder='비밀번호를 한번 더 입력해주세요' 
                                        onChange={this.onChangeUserPwOk}
                                        value={this.state.비밀번호확인}
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="name">이름<i>*</i></label>
                                    <input 
                                        type="text" name='name' id='name' placeholder='이름을 입력해주세요' 
                                        onChange={this.onChangeName}
                                        value={this.state.이름}
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="email">이메일<i>*</i></label>
                                    <input 
                                        type="text" name='email' id='email' placeholder='예: marketkurly@kurly.com' 
                                        onChange={this.onChangeEmail}
                                        value={this.state.이메일}
                                    />
                                    <button>중복확인</button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label htmlFor="hp">휴대폰<i>*</i></label>
                                    <input 
                                        type="text" name='hp' id='hp' placeholder='숫자만 입력해주세요' 
                                        onChange={this.onChangeHp}
                                        value={this.state.휴대폰}
                                    />
                                    <button>인증번호 받기</button>
                                </div>
                            </li>
                            <li className='food'>
                                {
                                    this.state.음식.map((item,idx)=>{
                                        return(
                                            <label key={idx} htmlFor={`chk${idx}`}>
                                                <input onChange={this.onChangeCheckEvent} type="checkbox" name={`chk${idx}`} id={`chk${idx}`}value={item} checked={this.state.좋아하는음식.includes(item)}/>
                                                    {item}
                                            </label>
                                        )
                                    })
                                }
                               
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={this.onClickSave}>저장</button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
        );
    }
}

export default WrapComponent;