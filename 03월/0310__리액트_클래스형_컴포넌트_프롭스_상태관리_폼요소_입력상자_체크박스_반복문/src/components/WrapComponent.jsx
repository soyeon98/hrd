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
            //체크박스 반복문 사용할 기초 데이터 배열
            과일:['딸기','사과','포도','수박','자몽'],
            좋아하는과일:[], /*체크된 과일 저징하는 배열 */
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
    /////checkbox event/////////////////////////////////////////
    // 1. 체크박스 온체인지 이벤트
    // 2. 상태관리 변수(속성) chk1 => value 저장 true or false
    // 3. 조건문 
    // 4. 5개의 과일 중 체크된 항목을 저장할 배열 사용
    onChangeCheckEvent=(e)=>{ 
        
        if(e.target.checked===true){
            this.setState({
                좋아하는과일:[...this.state.좋아하는과일,e.target.value]
            })
        }
        else{ //false 딸기를 제외한 배열로 재구성하는 필터메서드
            this.setState({
                좋아하는과일: this.state.좋아하는과일.filter((item)=>item!==e.target.value)
            })
        }

        }

        onChangeCheckEvent6=(e)=>{
            if(e.target.checked===true){
                this.setState({
                    chk6:true,
                    좋아하는음식:[...this.state.좋아하는음식,e.target.value]
                })                
            }
            else{
                this.setState({
                    chk6:false,
                    좋아하는음식:this.state.좋아하는음식.filter((item)=>item!==e.target.value)
                })
            }
        }
        onChangeCheckEvent7=(e)=>{
            if(e.target.checked===true){
                this.setState({
                    chk7:true,
                    좋아하는음식:[...this.state.좋아하는음식,e.target.value]
                })
            }
            else{
                this.setState({
                    chk7:false,
                    좋아하는음식:this.state.좋아하는음식.filter((item)=>item!==e.target.value)
                })
            }
        }
        onChangeCheckEvent8=(e)=>{
            if(e.target.checked===true){
                this.setState({
                    chk8:true,
                    좋아하는음식:[...this.state.좋아하는음식,e.target.value]
                })
            }
            else{
                this.setState({
                    chk8:false,
                    좋아하는음식:this.state.좋아하는음식.filter((item)=>item!==e.target.value)
                })
            }
        }   
        onChangeCheckEvent9=(e)=>{
            if(e.target.checked===true){
                this.setState({
                    chk9:true,
                    좋아하는음식:[...this.state.좋아하는음식,e.target.value]
                })
            }
            else{
                this.setState({
                    chk9:false,
                    좋아하는음식:this.state.좋아하는음식.filter((item)=>item!==e.target.value)
                })
            }
        }   
        onChangeCheckEvent10=(e)=>{
            if(e.target.checked===true){
                this.setState({
                    chk10:true,
                    좋아하는음식:[...this.state.좋아하는음식,e.target.value]
                })
            }
            else{
                this.setState({
                    chk10:false,
                    좋아하는음식:this.state.좋아하는음식.filter((item)=>item!==e.target.value)
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
                좋아하는과일:this.state.좋아하는과일,
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
                            <li className='fruit'>
                                { //semi colone 사용하지 않는다
                                    this.state.과일.map((item,idx)=>{
                                        return(
    
                                            <label key={idx+1} htmlFor={`chk${1+idx}`}>
                                                <input onChange={this.onChangeCheckEvent} type="checkbox" name={`chk${1+idx}`} id={`chk${1+idx}`} value={item} checked={this.state.좋아하는과일.includes(item)}/>
                                                {item}
                                            </label>
                                        
                                        )
                                    })
                                    
                                }
                            </li>
                            <li className='food'>
                                <label htmlFor="chk6"><input onChange={this.onChangeCheckEvent6} type="checkbox" name='chk6' id='chk6' value='초밥' checked={this.state.chk6}/>초밥</label>
                                <label htmlFor="chk7"><input onChange={this.onChangeCheckEvent7} type="checkbox" name='chk7' id='chk7' value='치킨' checked={this.state.chk7}/>치킨</label>
                                <label htmlFor="chk8"><input onChange={this.onChangeCheckEvent8} type="checkbox" name='chk8' id='chk8' value='우동' checked={this.state.chk8}/>우동</label>
                                <label htmlFor="chk9"><input onChange={this.onChangeCheckEvent9} type="checkbox" name='chk9' id='chk9' value='라면' checked={this.state.chk9}/>라면</label>
                                <label htmlFor="chk10"><input onChange={this.onChangeCheckEvent10} type="checkbox"name='chk510' id='chk10' value='곱창' checked={this.state.chk10}/>곱창</label>
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