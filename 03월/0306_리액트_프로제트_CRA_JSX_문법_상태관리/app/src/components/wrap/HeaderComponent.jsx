import React from 'react';
import imgDog from '../../imgs/photography-img30.jpg';

export default function HeaderComponent ({이름, cnt , onClickCount, modalOpenFn}) {

    const onClickCnt=(e)=>{
        e.preventDefault();
        // 자식컴퍼넌트의 버튼 클릭으로 상위컴포넌트 함수를 호출하여 카운트 실행
        onClickCount();
    }

    const style={
        header:{
            position:'relative',
            zIndex:1,
            padding:'130px 0',
            lineHeight:'300%',
            background:'#e0e0ff'
        },
        h1:{
            padding:'30px 0',
            fontSize:'60px',
            color:'#000'
        },
        h2:{
            fontSize:'30px',
            color:'#444'
        },
        button:{
            height:'50px',
            background:'#000',
            color:'#fff',
            cursor:'pointer',
            border:0,
            padding:'0 30px',
            fontSize:'20px',
            margin:'0 0 20px 0'
        }
    }

    //버튼클릭이벤트 모달창(상위컴포넌트) 열기
    const onClickModalOpen=(e)=>{
        e.preventDefault();
        modalOpenFn();
    }
    return (
        <header id="header" style={style.header}>
            <button onClick={onClickModalOpen} style={style.button}>OPEN</button>
            <hr style={{border:0,height:'3px',width:'100%',background:'#c00',margin:'50px 0'}}/>
            <h1 style={style.h1}>헤더컴포넌트</h1>   
            <h2 style={style.h2}>{이름}</h2>
            <h1 style={style.h1}>{cnt}</h1>
            <button style={style.button} onClick={onClickCnt}>자식컴포넌트 카운트</button>
            <div className="img-box">
                <img src={imgDog} alt="" />
            </div>
        </header>
    );
};
