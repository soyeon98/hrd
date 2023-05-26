import React from 'react';
import './scss/quick_menu.scss';
import $ from 'jquery';
import deliveryInfo from './img/deliveryInfo.png'
import ico_arrow_up from'./img/ico_arrow_up.svg';
import ico_arrow_down from'./img/ico_arrow_down.svg';

export default function QuickMenuComponent ({sign,getViewProduct})  {

    const [state, setState] = React.useState({
        isFixed:false,
        isViewProduct:true
    });
    // 스크롤이벤트 동작 시 스크롤 탑값이 섹션1에 탑값에 도달하면 
    // fixed로 구현한다.
    React.useEffect(()=>{
        let sec1Top = $('#section1').offset().top+40;
        let isFixed =false;
        let quickMenu = $('#quickMenu');
        
        $(window).scroll(function(){
            if( $(window).scrollTop()>=sec1Top){
                isFixed=true;
                 quickMenu.css({marginTop:-quickMenu.height()/2})
            }
            else{
                isFixed =false;
                quickMenu.css({marginTop:0})
            }
            setState({
                ...state,
                isFixed:isFixed
            })
        });
    },[state.isFixed]);

    // localStorage getitem
    React.useEffect(()=>{
        // 최상위 컴포넌트의 최근 본 상품이 등록되면
        // 즉시 
    },[sign]);

    return (
        <div id='quickMenu' className={state.isFixed?`on`:''} >
            <ul>
                <li>
                    <a href="!#">
                        <img src={deliveryInfo} alt="" />
                    </a>
                </li>
                <li>
                    <span><a href="!#">등급별혜택</a></span>
                    <span><a href="!#">레시피</a></span>
                </li>
                <li className='view-product'>
                      {
                        state.isViewProduct && (
                        <div>
                            <span><a href="!#"><img src={ico_arrow_up} alt="" /></a></span>
                            <h3>최근 본상품</h3>
                            <div className="view-box">
                                <ul className='wrap-box'>
                                    {
                                        getViewProduct.map((item)=>{
                                            return(
                                                <li key={item.제품코드}>{item.이미지}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>    
                            <span><a href="!#"><img src={ico_arrow_up} alt="" /></a></span>                    
                        </div>
                        )
                    }
                </li>
            </ul>
        </div>
    );
};

