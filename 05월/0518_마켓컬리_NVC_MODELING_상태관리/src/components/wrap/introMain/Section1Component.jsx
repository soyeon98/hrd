import React from 'react';
import $ from 'jquery';
import './scss/section1.scss';
import Section1SlideComponent from './Section1SlideComponent';
import axios from 'axios';

export default function Section1Component () {

    const [state,setState] = React.useState({
        슬라이드:[],
        n:0
    });


    // 슬라이드 데이터 가져오기
    React.useEffect(()=>{
            // axios
            axios({
                url:'./data/intro_page/section1.json',
                method:'get'
            })
            .then((res)=>{
                // console.log(res.data);
                if(res.status===200){
                    setState({
                        ...state,
                        슬라이드:res.data.slide,
                        n:res.data.slide.length-2
                    })
                }
            })
            .catch((err)=>{
                console.log("AXIOS 실패"+err);
            })
    },[]);

        // 섹션1컴포넌트 메인 슬라이드
        React.useEffect(()=>{

            const $slideContainer =$('#section1 .slide-container');
            const $slideWrap = $('#section1 .slide-wrap');
            const $slide = $('#section1 .slide');
            const $slidea = $('#section1 .slide a');
            const $leftArrowBtn = $('#section1 .left-arrow-btn');
            const $rightArrowBtn = $('#section1 .right-arrow-btn');
            const $currentNumber = $('#section1 .current-number');
            const $totalNumber = $('#section1 .total-number');
    
            let cnt=0;
            let n1 = state.n;
            let setId=0;

            $slideWrap.css({width:`${100*(n1+2)}%`});
            
            // 1. 메인슬라이드 함수
            function mainSlide(){
    
                $slideWrap.stop().animate({left:`${-100*cnt}%`},600,function(){
                    if(cnt>=n1){
                        cnt=0;
                    }
                    if(cnt<0){
                        cnt=n1-1; // 23-1 (0-22)
                     
                    }
                    $slideWrap.stop().animate({left:`${-100*cnt}%`},0);
                });
                slidePageEvent();
            }
            // 2-1. 다음카운트 함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            // 2-2. 다음카운트 함수
            function prevCount(){
                cnt--;
                mainSlide();
            }
            // 3. 자동타이머 함수
            function autoTimer(){
                clearInterval(setId);
                setId = setInterval(nextCount,3000);
                // // 타이머 setId 변수 모든 값들은 브라우져 저장소에서 관리한다.
                // // 저장소 key =""
                // const key = 'SETID_SEC1_SLIDE_KEY'; 
                // sessionStorage.setItem(key,setId); //브라우져를 끌때마다 데이터 없어짐
            }
                autoTimer();
                // 4. 
                $slideContainer.on({
                    mouseenter(){
                        clearInterval(setId);
                        $leftArrowBtn.stop().fadeIn(1000);
                        $rightArrowBtn.stop().fadeIn(1000);
                    },
                    mouseleave(){
                       
                        $leftArrowBtn.stop().fadeOut(1000);
                        $rightArrowBtn.stop().fadeOut(1000);
                        autoTimer();
                    }
                });
    
                 // 5. 슬라이드 페이지 번호
                 function slidePageEvent(){
        
                    $currentNumber.html(cnt+1>=24?1:(cnt+1===0? n1 : cnt+1));
                    $totalNumber.html(n1);
                 } 
                 //6-1. 다음 화살버튼 클릭 이벤트
                 $rightArrowBtn.on({
                    click(e){
                        e.preventDefault();
                        nextCount();
                    }
                 })
                 //6-2. 이전 화살버튼 클릭 이벤트
                 $leftArrowBtn.on({
                    click(e){
                        e.preventDefault();
                        prevCount();
                    }
                 })
    
                 $slidea.on({
                    click(e){
                        e.preventDefault();
                    }
                 })
        },[state.n]);

    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        <h2>마켓컬리 메인 슬라이드</h2>
                    </div>
                    <div className="content">

                        <Section1SlideComponent 슬라이드={state.슬라이드} n={state.n}/>

                    </div>
                </div>
            </div>
        </section>
    );
};

