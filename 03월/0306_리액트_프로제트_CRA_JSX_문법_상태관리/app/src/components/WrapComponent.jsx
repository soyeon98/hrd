import React from 'react';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import ModalComponent from './wrap/ModalComponent.jsx';
import '../css/style_wrap.css'; //SRC 내에 CSS스타일 가져오기
import '../scss/style.scss';


export default function WrapComponent({wrapProps,cnt})  {

    //  상태관리 변수 대명사 : state
    //  상태관리 변수 수정(설정 세터 setter) : setState
    const [state, setState] = React.useState({wrapProps});//리액트 상태관리 훅

    // h1 클릭이벤트 => 타이틀 수정
    // 1.jsx 태그요소에서 onClick={실행할 이벤트 함수 생성}
    // 2.함수 등록하기 화살표 함수식으로 등록
    // 3.클릭 이벤트 새로고침기능 제거
    // 4.타이틀 수정

    const onClickTitleUpdate = (e)=>{
        e.preventDefault();
        setState({
            ...state,
            타이틀:'상태관리 타이틀 변수(속성 프로퍼티) 내용 setState() 함수를 이용 변경하였습니다.'
        });
    }

    // 카운트 클릭이벤트 : 부모(상위) 컴포넌트의 함수를 자식이 호출하여 실행하면 다양한 응용 가능
    const onClickCount =()=>{
        setState({
            ...state,
            cnt:state.cnt+1
        });
    }



    // h2 클릭이벤트 => 이름 변경
    const onClickName =(e)=>{
        e.preventDefault();
        setState({
            ...state,
            이름:'김유신'
        });

    }



    //모달 닫기 함수 => 자식 컴포넌트 모달 창으로 프롭스로 내려보냄
    const modalcloseFn=()=>{
        setState({
            ...state,
            isModal: false
        })
    }

    //모달 열기 함수 => 자식 컴포넌트인 헤더컴포넌트에게 프롭스로 내려보냄
    const modalOpenFn=()=>{
        setState({
            ...state,
            isModal: true
        })
    }

    return (
        <div id='wrap'>
          
            <h1 style={style.h1} onClick={onClickTitleUpdate}>{state.타이틀}</h1>
            <h2 style={style.h2} onClick={onClickName}>{state.이름}</h2>
            
            <HeaderComponent modalOpenFn={modalOpenFn} 이름={state.이름} cnt={cnt} onClickCount={onClickCount}/> 
            
            {/* 모달창 ModalComponent*/}
            {
                state.isModal && <ModalComponent modalcloseFn={modalcloseFn}/>
            }
            
        </div>
    );
};

WrapComponent.defaultProps ={
    wrapProps:{
        타이틀:'랩퍼 컴포넌트입니다.',
        이름:'이순신',
        아이디:'dltnstls123',
        비밀번호:'123dltnstls',
        isModal:false // 모달창 초기값  false이면 숨기기(hide) / true이면 모달창 보이기(show)
        }
    }


// 랩퍼 컴포넌트 속성 스타일
const style = {
    h1:{
        lineHeight:'200%',
        padding:'20px',
        fontSize:'100px',
        color:'#29C'
    },
    h2:{
        lineHeight:'200%',
        padding:'10px',
        fontSize:'100px',
        color:'#c29'
    }

}
