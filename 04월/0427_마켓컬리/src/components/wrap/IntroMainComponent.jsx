import React from 'react';
import $ from 'jquery';

export default function IntroMainComponent ()  {


    // 판매가격, 정가 콤마형식
    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp =/(^\d+)(\d{3})/g;
        
        while(regExp.test(value)){
            return value.replace(regExp, '$1,$2');
        }
    }

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
        let n = $slide.length-2;
        let setId=0;
        
        // 1. 메인슬라이드 함수
        function mainSlide(){
                console.log(cnt);
            $slideWrap.stop().animate({left:`${-100*cnt}%`},600,function(){
                if(cnt>=n){
                    cnt=0;
                }
                if(cnt<0){
                    cnt=n-1; // 23-1 (0-22)
                 
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
    
                $currentNumber.html(cnt+1>=24?1:(cnt+1===0? n : cnt+1));
                $totalNumber.html(n);
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
    },[]);


    return (
        <main id='main' className='sub-page intro'>


            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title hide">
                            <h2>마켓컬리 메인 슬라이드</h2>
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide22"><a href="!#"><img src="./images/intro/intro_main_slide23.jpg" alt="" /></a></li>
                                        <li className="slide slide0" ><a href="!#"><img src="./images/intro/intro_main_slide01.jpg" alt="" /></a></li>
                                        <li className="slide slide1" ><a href="!#"><img src="./images/intro/intro_main_slide02.jpg" alt="" /></a></li>
                                        <li className="slide slide2" ><a href="!#"><img src="./images/intro/intro_main_slide03.jpg" alt="" /></a></li>
                                        <li className="slide slide3" ><a href="!#"><img src="./images/intro/intro_main_slide04.jpg" alt="" /></a></li>
                                        <li className="slide slide4" ><a href="!#"><img src="./images/intro/intro_main_slide05.jpg" alt="" /></a></li>
                                        <li className="slide slide5" ><a href="!#"><img src="./images/intro/intro_main_slide06.jpg" alt="" /></a></li>
                                        <li className="slide slide6" ><a href="!#"><img src="./images/intro/intro_main_slide07.jpg" alt="" /></a></li>
                                        <li className="slide slide7" ><a href="!#"><img src="./images/intro/intro_main_slide08.jpg" alt="" /></a></li>
                                        <li className="slide slide8" ><a href="!#"><img src="./images/intro/intro_main_slide09.jpg" alt="" /></a></li>
                                        <li className="slide slide9" ><a href="!#"><img src="./images/intro/intro_main_slide10.jpg" alt="" /></a></li>
                                        <li className="slide slide10"><a href="!#"><img src="./images/intro/intro_main_slide11.jpg" alt="" /></a></li>
                                        <li className="slide slide11"><a href="!#"><img src="./images/intro/intro_main_slide12.jpg" alt="" /></a></li>
                                        <li className="slide slide12"><a href="!#"><img src="./images/intro/intro_main_slide13.jpg" alt="" /></a></li>
                                        <li className="slide slide13"><a href="!#"><img src="./images/intro/intro_main_slide14.jpg" alt="" /></a></li>
                                        <li className="slide slide14"><a href="!#"><img src="./images/intro/intro_main_slide15.jpg" alt="" /></a></li>
                                        <li className="slide slide15"><a href="!#"><img src="./images/intro/intro_main_slide16.jpg" alt="" /></a></li>
                                        <li className="slide slide16"><a href="!#"><img src="./images/intro/intro_main_slide17.jpg" alt="" /></a></li>
                                        <li className="slide slide17"><a href="!#"><img src="./images/intro/intro_main_slide18.jpg" alt="" /></a></li>
                                        <li className="slide slide18"><a href="!#"><img src="./images/intro/intro_main_slide19.jpg" alt="" /></a></li>
                                        <li className="slide slide19"><a href="!#"><img src="./images/intro/intro_main_slide20.jpg" alt="" /></a></li>
                                        <li className="slide slide20"><a href="!#"><img src="./images/intro/intro_main_slide21.jpg" alt="" /></a></li>
                                        <li className="slide slide21"><a href="!#"><img src="./images/intro/intro_main_slide22.jpg" alt="" /></a></li>
                                        <li className="slide slide22"><a href="!#"><img src="./images/intro/intro_main_slide23.jpg" alt="" /></a></li>
                                        <li className="slide slide0" ><a href="!#"><img src="./images/intro/intro_main_slide01.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                
                                <a href="!#" className='left-arrow-btn'><img src="./images/intro/ico_arrow_gray.svg" alt="" /></a>
                                <a href="!#" className='right-arrow-btn'><img src="./images/intro/ico_arrow_gray.svg" alt="" /></a>
                                <span className='page-count-box'>
                                    <em className='current-number'>{1}</em>
                                    <i>/</i>
                                    <em className='total-number'>{23}</em>
                                </span>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="sectionTopBanner">
                <div className="container">
                    <div className="gap">
                        <div className="title hide"><h2>섹션탑베너</h2></div>
                        <div className="content">
                            <a href="!#"><img src="./images/intro/e1493ecc-2aa4-4f48-aaa9-41ad2093dec7.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>


            <section id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>이 상품 어때요?</h2>
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                    <li className="slide slide12">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide13">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>                                            
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide14">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide15">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide16">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide17">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li><strong>[최현석의 쵸이닷] </strong><em>새우 토마토 파스타</em></li>
                                                <li>7,565원</li>
                                                <li>후기</li>
                                            </ul>
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide18">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide19">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide0">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/1b70b786-0d51-4c24-b025-61c13f1e56a7.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1)))}원</span></li>
                                                <li>{0 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>      
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/26159af7-fb1b-4a2c-b435-f99fd93074f8.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide2">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/1634631825670l0.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide3">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/e1b740c0-b77f-4910-b151-0d51c7afa34b.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide4">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide5">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide6">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide7">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide8">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide9">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide10">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide11">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide12">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide13">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide14">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide15">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide16">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide17">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide18">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide19">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide0">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/1634631825670l0.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/26159af7-fb1b-4a2c-b435-f99fd93074f8.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide2">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide3">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/e1b740c0-b77f-4910-b151-0d51c7afa34b.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide4">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide5">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide6">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide7">
                                            <div className="col-gap">
                                                <a href="!#">
                                                <div className="img-box">
                                            <img src= {`./images/intro/0b0534ce-b628-48f3-a1c6-5a90282650ff.jpg`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tex-box">
                                            <ul>
                                                <li>{}</li>
                                                <li><strong>[풀무원]</strong><em>육즙 듬뿍 만두 (렌지용)</em></li>
                                                <li>{}</li>
                                                <li><span className='rate-price'>{0.14===0? '':`${Math.round(0.14*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(3500*(1-0.14)))}원</span></li>
                                                <li>{0.14 === 0 ? '':<s> {commaPrice(3500)}원 </s>}</li>
                                                <li>후기</li>
                                            </ul>  
                                        </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="!#" className='left-arrow-btn'><img src="./images/intro/ico_lt_wht.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./images/intro/ico_lt_wht.svg" alt="" /></a>
            </section>
            <section id="section3">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section4">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section5">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section6">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section7">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section8">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section9">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section10">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

