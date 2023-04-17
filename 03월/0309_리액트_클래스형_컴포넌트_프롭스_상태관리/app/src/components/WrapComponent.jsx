import React, { Component } from 'react';
import female from '../imgs/wedding-img5.jpg';
import male from '../imgs/wedding-img6.jpg';
import '../scss/todo.scss';

class WrapComponent extends React.Component {

    //생성자 컨스트럭터
    constructor(props){
        super(props); // super를 시용하면 this 사용 가능
        this.state = {
            title:'클래스형 컴포넌트 타이틀',
            cnt:0,
            음식:this.props.좋아하는음식,
            회원:{
                아이디:'',
                비밀번호:'',
                이름:'',
                이메일:''
            },
            isGender:true,
            할일:' ', //입력상자 온체인지 이벤트
            todoList: [] // 버튼클릭해서 할일 내용 누적 저장(저장소)
        }
    }

    //todolist
    // 할일 입력상자 온체인지 이벤트 : 할일 입력
    onChangeTodoWrite=(e)=>{
        this.setState({

                    할일:e.target.value
            
        })
    }
    // 1.버튼 클릭 이벤트 : 배열에 데이터 추가 ...전개연산자 이용 추가
    // * 배열에 저장 목록은 새로고침하면 브라우저가 새로 랜더링되면서 모두 초기화
    // 2.추가된 배열에 목록을 브라우저 저장에서 저장한다 (영구저장됨.)
    // 3. local storage[setter,getter]
    onClickTodoListAdd=(e)=>{
        e.preventDefault();
        this.setState({
            todoList:[
                ...this.state.todoList,
                {
                    할일:this.state.할일 //입력상자에서 입력된 state.할일 내용 저장
                }
            ],
            할일:''
        })   
    }
    //스토리지 저장
    onClickTodoListAddStorage=(e)=>{

        e.preventDefault();
        const key='TODO';
        //localstorage에 저장하기 : 문자열로 저장된다 객체 저장하면 object로 나오므로 문자열로 변환 필요
        // localStorage.setItem(key,value)
        //문제점 : 새로 고치고 배열이 비어있는 상태 또는 입력된 1개의 데이터인 경우
        //스토리지에 저장하면 스토리지 데이터가 업데이트되면서 모두 삭제되고 빈데이터
        //또는 최근 입력된 한개 이상의 데이터만 저장된다.(덮어쓰기)
        // 스토리지 이전에 있는 데이터를 그대로 보관하고 배열에 있는 데이터는 추가로 저장한다.
        // 스토리지데이터를 가져오기하고 추가된 배열 데이터를 병합한다. 전개연산자 이용

        // 1.로컬스토리지 데이터 가져오기
        const getData=localStorage.getItem(key);
        //예외처리 빈 값 null-오류가 아니지만 잠정적으로 오류가 발생할 수 있는 이유가 됨
        let todo=[];
        if(getData!==null){
            todo=JSON.parse(getData);
        }

        // 2.로컬스토리지 데이터 추가 저장하기(세터)
        todo=[
            ...todo,
            {
                할일: this.state.할일
            }         
        ];
      
        localStorage.setItem(key,JSON.stringify(todo));

        this.setState({할일:''});


    }
    //회원정보
    onClickMember=(e)=>{
        e.preventDefault();
        this.setState({
            회원:{
                ...this.state.회원,
                아이디:'member123',
                비밀번호:'123member',
                이름:'멤버',
                이메일:'212member@naver.com'
            }
        })
    }

    //  const 사용 안함  render함수 밑에서는 사용
    // 1씩 증가하는 클릭 이벤트 함수 : 상태변경 세터함수 사용
    // 전개연산자 사용 안해도 됨
    onClickAdd =(e)=>{
        e.preventDefault();
        this.setState({
            cnt:this.state.cnt + 1
        })
    }

    //  1씩 감소하는 클릭 이벤트 함수 : 상태변경 세터함수 사용
    onClickSub =(e)=>{
        e.preventDefault();
        this.setState({
            cnt:this.state.cnt - 1
        })
    }
    //파라미터 변수 사용
    onClickParamAdd=(e,z)=>{
        e.preventDefault();
        alert(z);
         this.setState({
            cnt:this.state.cnt+1
         })
    }
    onClickParamSub=(e,z)=>{
        e.preventDefault();
        const {cnt} = this.state; //비구조화
        alert(z);
        this.setState({
            cnt:cnt-1
        })
    }


    render() {
        
        // 1씩 증가하는 클릭 이벤트 함수 : 상태변경 세터함수 사용
        // const onClickAdd =(e)=>{
        //     e.preventDefault();
        //     this.setState({
        //         cnt:this.state.cnt + 1
        //     })
        // }

        // 1씩 감소하는 클릭 이벤트 함수 : 상태변경 세터함수 사용
        // const onClickSub =(e)=>{
        //     e.preventDefault();
        //     this.setState({
        //         cnt:this.state.cnt - 1
        //     })
        // }

        return (
            <div id='wrap' style={{textAlign:'center',lineHeight:'200%'}}>
                <h1>{this.state.title}</h1>
                 <h2>{this.props.좋아하는음식}</h2>
                 <h1>{this.state.cnt}</h1>
                 <br />
                 <hr />
                 <h1><em>{this.state.회원.아이디}</em></h1>
                 <h1><em>{this.state.회원.비밀번호}</em></h1>
                 <h1><em>{this.state.회원.이름}</em></h1>
                 <h1><em>{this.state.회원.이메일}</em></h1>               
                 <hr />
                 <br /><br /><br />
                 {/* 컨스트럭터 함수 클릭 이벤트  반드시 this 사용*/}
                 <button onClick={this.onClickAdd}>증가</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button onClick={this.onClickSub}>감소</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 {/* 랜더함수 안에서 클릭 이벤트함수 
                 <button onClick={onClickAdd}>증가</button>
                 <button onClick={onClickSub}>감소</button> */}

                 <button onClick={this.onClickMember}>회원정보</button>
                 <br />
                 <hr />
                 <br /><br /><br />

                 {/* 클릭 이벤트와 매개변수 전달 구현 */}
                 <button onClick={(e)=>this.onClickParamAdd(e,'1씩증가')}>클릭이벤트 매개변수 전달 증가버튼</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button onClick={(e)=>this.onClickParamSub(e,'1씩감소')}>클릭이벤트 매개변수 전달 감소버튼</button>
                 <br />
                 <hr />
                 <br /><br /><br />
                 {/* 클릭 이벤트를 직접 구현 */}
                 <button onClick={()=>this.setState({cnt:this.state.cnt+1})}>직접 클릭 이벤트 증가버튼</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button onClick={()=>this.setState({cnt:this.state.cnt-1})}>직접 클릭 이벤트 감소버튼</button>

                 <div style={{width:'300px',margin:'50px auto'}}>
                    {
                        this.state.isGender ? <img src={female} alt="여성" style={{width:'100%'}}/>:<img src={male} alt="남성" style={{width:'100%'}}/>
                    }                    
                  </div>
                 <hr />
                 <button onClick={()=>this.setState({isGender:!this.state.isGender})}>GENDER</button>
                 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                 <hr />
                 <div id="todo">
                    <div className="container">
                        <div className="title"><h1>To Do List</h1></div>
                        <form  name='todo' id='todo' method='post' action="./todo.php">
                            <ul className='input-box'>
                                <li>
                                    <input 
                                    type="text" 
                                    name='todo_w' 
                                    id='todoW' 
                                    placeholder='할일을 입력하세요' 
                                    onChange={this.onChangeTodoWrite}
                                    value={this.state.할일}
                                    />
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={this.onClickTodoListAdd}>배열저장</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={this.onClickTodoListAddStorage}>로컬스토리지저장</button>
                            </div>
                        </form>
                    </div>
                 </div>

            </div>
        );
    }
}

export default WrapComponent;

WrapComponent.defaultProps= {
    좋아하는음식:['샤브샤브', '소고기', '양꼬치', '쌀국수', '초밥', '조개구이', '참치','마라탕','돈가스' ]
}