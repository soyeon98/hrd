import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import IntroMainComponent from './wrap/IntroMainComponent';
import Sub1Compnent from './wrap/Sub1Compnent';
import Sub2Compnent from './wrap/Sub2Compnent';
import Sub3Compnent from './wrap/Sub3Compnent';
import Sub4Compnent from './wrap/Sub4Compnent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';


export default function WrapComponent() {

    const[state,setState] =React.useState({
        minutes:2,
        seconds:59,
        setId:0,
        msg:'',
        isEnd:false,
        //헤더의 프롭스로 전달하기
        mapText:'',
        isMap:true
    });

    const timerCounterFn=()=>{
        let setId=0;
        let minutes=2;
        let seconds=59;
        let msg='';
        let isEnd=false;
        setId=setInterval(function(){
            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    clearInterval(setId);
                    seconds=0;
                    minutes=0;
                    msg='유효시간이 경과되었습니다.'; //모달창 메시지
                    isEnd=true; //모달창 true
                }
            }
            setState({
                ...state,
                seconds:seconds,
                minutes:minutes,
                setId:setId,
                msg:msg,
                isEnd:isEnd
            })
        },1000);
    }

    const mapAddressFn =(z)=>{
        setState({
            ...state,
            mapText:z,
            isMap:false
        })
    }

    return (
        <div id='wrap'>
                <TopModalComponent/>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <HeaderComponent mapText={state.mapText} isMap={state.isMap}/>}>
                            <Route index element={<IntroMainComponent/>}/>
                            <Route path='/메인페이지' element={<IntroMainComponent/>}/>
                            <Route path='/서브1페이지' element={<Sub1Compnent/>}/>
                            <Route path='/서브2페이지' element={<Sub2Compnent/>}/>
                            <Route path='/서브3페이지' element={<Sub3Compnent/>}/>
                            <Route path='/서브4페이지' element={<Sub4Compnent/>}/>
                            <Route path='/회원가입페이지' element={<SignUpComponent timer={state} timerCounterFn={timerCounterFn} mapAddressFn={mapAddressFn} />}/>
                        </Route>
                    </Routes>                       
                </BrowserRouter>

                <FooterComponent/>                
        </div>
    );
};