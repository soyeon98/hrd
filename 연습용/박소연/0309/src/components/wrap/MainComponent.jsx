import React, { Component } from 'react';
import '../../scss/main.scss';

class MainComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            아이디:'',
            비밀번호:'',
            비번확인:'',
            이름:'',
            이메일:'',
            휴대폰번호:''
        }
    }

    onChangeInput1=(e)=>{
        this.setState({
            아이디:e.target.value
        })
    }
    onClickId=(e)=>{
        e.preventDefault();
        this.setState({
            아이디:''
        })
    }
    onChangeInput2=(e)=>{
        this.setState({
            비밀번호:e.target.value
        })
    }
    onChangeInput3=(e)=>{
        this.setState({
            비번확인:e.target.value
        })
    }
    onChangeInput4=(e)=>{
        this.setState({
            이름:e.target.value
        })
    }
    onChangeInput5=(e)=>{
        this.setState({
            이메일:e.target.value
        })
    }
    onChangeInput6=(e)=>{
        this.setState({
            휴대폰번호:e.target.value
        })
    }
    onClickDeleteAll=(e)=>{
        e.preventDefault();
        this.setState({
            아이디:'',
            비밀번호:'',
            비번확인:'',
            이름:'',
            이메일:'',
            휴대폰번호:''
        })
    }
    onClickSave=(e)=>{
        e.preventDefault();
        this.setState({
            아이디:'',
            비밀번호:'',
            비번확인:'',
            이름:'',
            이메일:'',
            휴대폰번호:''
        })
    }


    render() {
        return (
            <main id="main">
              <div id="toDo">
                <div className="container">
                    <div className="title"><h1>회원가입</h1></div>
                    <hr />
                    <form name='todo' id='todo' method='post' action="./todo.php">
                        <ul className="input-box">
                            <li>
                                <h2>아이디</h2>
                                <input 
                                type="text" 
                                name='id'
                                id='id' 
                                placeholder='아이디를 입력해주세요'
                                onChange={this.onChangeInput1}
                                value={this.state.아이디}
                                />
                                <div className="btn-box" >
                                    <button onClick={this.onClickId}>중복확인</button>
                                </div>
                            </li>
                            <li>
                            <h2>비밀번호</h2>
                                <input 
                                type="password" 
                                name='pw1'
                                id='pw1' 
                                placeholder='비밀번호를 입력해주세요'
                                onChange={this.onChangeInput2}
                                value={this.state.비밀번호}
                                />
                               <div className="btn-box">
                                  
                                </div>
                            </li>
                            <li>
                            <h2>비밀번호확인</h2>
                                <input 
                                type="password" 
                                name='pw2'
                                id='pw2' 
                                placeholder='비밀번호를 한번 더 입력해주세요'
                                onChange={this.onChangeInput3}
                                value={this.state.비번확인}
                                />  
                               <div className="btn-box">
                                   
                                </div>
                            </li>
                            <li>
                            <h2>이름</h2>
                                <input 
                                type="text" 
                                name='name'
                                id='name' 
                                placeholder='이름을 입력해주세요'
                                onChange={this.onChangeInput4}
                                value={this.state.이름}
                                />
                               <div className="btn-box">
                                  
                                </div>
                            </li>
                            <li>
                            <h2>이메일</h2>
                                <input 
                                type='email' 
                                name='email'
                                id='email' 
                                placeholder='이메일을 입력해주세요'
                                onChange={this.onChangeInput5}
                                value={this.state.이메일}
                                />
                               <div className="btn-box">
                                   
                                </div>
                            </li>
                            <li>
                            <h2>휴대폰</h2>
                                <input 
                                type="text" 
                                name='phone'
                                id='phone' 
                                placeholder='숫자만 입력해주세요'
                                onChange={this.onChangeInput6}
                                value={this.state.휴대폰번호}
                                />
                               <div className="btn-box">
                                    <button onClick={this.onClickDeleteAll}>SAVE All</button>
                                </div>
                            </li>
                        </ul>
                    </form>
                    <div id="save">
                        <div className="container">
                            <div className="save-box">
                                <h2>저장</h2>     
                                                         
                            </div>
                            <div className="save-btn">
                                <button onClick={this.onClickSave}>저장 버튼</button>
                            </div>                           
                        </div>
                    </div>
                </div>
              </div>
            </main>
        );
    }
}

export default MainComponent;