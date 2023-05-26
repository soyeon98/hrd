import React from 'react';

export default function Section1SlideComponent ({슬라이드,n})  {

    // React.useEffect(()=>{
    //     slide.map((item)=>{
    //         console.log(item.src);
    //     });
    // },[]);
    const slideWrap = React.useRef(); // 제이쿼리 돔 요소 선택자
    const [state,setState] = React.useState({
        cnt:0
    })
    React.useEffect(()=>{
        mainSlide();
    },[state.cnt])
    const mainSlide=()=>{
        slideWrap.current.style='transition:all 0.6s ease-in-out';
        slideWrap.current.style=`left:${-(100*state.cnt)}%`;
    }
    const onClickNext=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:state.cnt+1
        })
    }
    const onClickPrev=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:state.cnt+-1
        })
    }
    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul ref={slideWrap} className="slide-wrap">
                    {
                        슬라이드.map((item,idx)=>{
                            return(
                                <li className="slide" key={idx}><a href="!#"><img src={item.src} alt="" /></a></li>
                            )
                        })
                     
                    }
                   
                </ul>
            </div>
            
            <a href="!#" className='left-arrow-btn' onClick={onClickPrev}><img src="./images/intro/ico_arrow_gray.svg" alt="" /></a>
            <a href="!#" className='right-arrow-btn' onClick={onClickNext} ><img src="./images/intro/ico_arrow_gray.svg" alt="" /></a>
            <span className='page-count-box'>
                <em className='current-number'>{1}</em>
                <i>/</i>
                <em className='total-number'>{n}</em>
            </span>

        </div>
    );
};

