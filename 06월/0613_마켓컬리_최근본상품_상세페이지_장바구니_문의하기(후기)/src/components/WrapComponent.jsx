import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// 고정페이지
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainIntroComponent from './wrap/MainIntroComponent';
// 서브페이지
import Sub1Compnent from './wrap/main_sub/Sub1Compnent';
import Sub2Compnent from './wrap/main_sub/Sub2Compnent';
import Sub3Compnent from './wrap/main_sub/Sub3Compnent';
import Sub4Compnent from './wrap/main_sub/Sub4Compnent';
import SignUpComponent from './wrap/main_sub/SignUpComponent';
// 최근 본 상품 상세페이지 컴포넌트
import ProductComponent from './wrap/ProductComponent';
// 장바구니
import CartComponent from './wrap/CartComponent';

// 고정페이지
import FooterComponent from './wrap/FooterComponent';
import ConfirmModal from './wrap/ConfirmModal';
import GoTopComponent from './wrap/GoTopComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';



export default function WrapComponent() {

    // 마켓컬리 주소 통합 상태관리
    const [addr,setAddr] = React.useState({
        주소1:'',
        주소2:'',
        isAddr:false
    });
    // 새로고침 시 자동 실행
    const addressAuto=async()=>{
        if(sessionStorage.getItem('SYADDRESS')!==null){
            const 주소1 = JSON.parse(sessionStorage.getItem('SYADDRESS')).주소1;
            const 주소2 = JSON.parse(sessionStorage.getItem('SYADDRESS')).주소2;
            setAddr({
                주소1:주소1,
                주소2:주소2,
                isAddr:true
            })
        }
        return ''; 
    }
    // 로딩 시 실행
    React.useEffect(()=>{
        addressAuto();
    },[])

    // 헤더영역, 장바구니, 회원가입 폼 배송지 등록 및 변경
    const openPopupDaumPostApi=async()=>{
        const popupFile='/public/popup.html';
        const popupName='_popupAddressApi';
        const popupWidth=530;
        const popupHeight=570;
        const popupTop= (window.innerHeight-popupHeight)/2;  
        const popupLeft= (window.innerWidth-popupWidth)/2;
        // 자식 팝업창
        const childWindow = window.open(popupFile,popupName,`width=${popupWidth},height=${popupHeight},top=${popupTop},left=${popupLeft}`);

        // 자식창이 닫히면
        childWindow.window.onbeforeunload = async()=>{
            addressAuto();
        }

    }

    // 장바구니 수량 카운트 상태 변수
    const [cartCount,setCartCount] = React.useState(0);

    // 징비구니 수량 카운트 상태 변수를 전달하는 함수
    const cartCountNumber=(num)=>{
        setCartCount(num);
    }

    //네비게이션
    const [isIntro,setIsIntro] =React.useState(true);
    // 헤더영역에서 라우터 링크 이용 값을 변경한다
    const setIntroFn=(z)=>{
        setIsIntro(z)
    }

    const [product,setProduct]=React.useState({
        key:'SY_VIEW_PRODUCT',
        sign:false,
        getViewProduct:[]
    });
    // 비구조화 구조분할할당
    const  {getViewProduct,key,sign} =product;

    const setViewProduct=(value)=>{
        let arr=[];
        if(localStorage.getItem(key)!==null){
            arr = JSON.parse(localStorage.getItem(key));
            arr = [value, ...arr]
            localStorage.setItem(key, JSON.stringify(arr) ); 
            setProduct({
                ...product,
                sign: !sign,
                getViewProduct: arr
            });  
        }
        else{
            arr = [...arr,value];
            localStorage.setItem(key,JSON.stringify(arr));
            setProduct({
                ...product,
                sign: !sign,
                getViewProduct: arr
            });
        }

    }


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
    
    //// 모달 상태관리 //////////////////////////////////////////
    const [modal,setModal] =React.useState({
        confirmMsg:'모달창에 자식창에서 보내온 메시지 내용',
        isConfirmModal:false
    });
    // 1. 모달창 닫기 이벤트 => 모달창에 있는 버튼 클릭이벤트 메서드 만들기
    const confirmModalClose =(e)=>{
        setModal({
            ...modal,
            isConfirmModal:false
        })
    }
    // 2. 모달창 열기 이벤트 => 모든 자식 컴포넌트에서 모달 열기와 메시지 전달하기
    const confirmModalOpen =(msg)=>{
        setModal({
            ...modal,
            isConfirmModal:true,
            confirmMsg:msg
        })
    }


    //// 1. 탑모달 //////////////////////////////////
    const [topModal,setTopModal] = React.useState({
        key:'SY_KURLY_TOPMODAL',
        isTopModal:true
    });
    // 2. 탑모달 닫기 함수 => 쿠키설정
    const topModalClose=(value,expires)=>{
        setTopModal({
            ...topModal,
            isTopModal:false
        })
        setCookieMethod(value,expires);
    }

    // 4. 쿠키 설정/저장 : 탑모달 닫기 클릭 시 쿠키 설정.저장
    const setCookieMethod=(value,expires)=>{
        let toDay = new Date();
        toDay.setDate(toDay.getDate()+expires);
        document.cookie = `${topModal.key}=${value};path=/;expires=${toDay.toUTCString()};`;
    }
    // 5. 쿠키 가져오기 : 설정된 쿠키가 없으면 탑모달 열림 있으면(찾았다면 found) 닫힘
    const getCookieMethod=()=>{
        // console.log(document.cookie);
        if(document.cookie==='')return; // 예외처리
        const result = document.cookie.split(';');
        let cookie =[];
        result.map((item,idx)=>{
            cookie[idx]={
                key: item.split('=')[0].trim(), //trim() 공백제거
                value: item.split('=')[1].trim()
            }
        });
        // console.log(cookie);
        // 찾기 key : 'SY_KURLY_TOPMODAL'
        cookie.map((item)=>{
           
            if(item.key===topModal.key && item.value==='yes'){
                setTopModal({
                    ...topModal,
                    isTopModal:false
                })
            }
 
        })
    }

    React.useEffect(()=>{
        getCookieMethod();
    },[topModal.isTopModal]);


    return (
        <div id='wrap'>
            {
                 topModal.isTopModal&&<TopModalComponent topModalClose={topModalClose} />
            }
              
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={ <HeaderComponent  openPopupDaumPostApi={openPopupDaumPostApi} addr={addr} setIntroFn={setIntroFn} isConfirmModal={state.isConfirmModal} cartCount={cartCount}/>}>
                            <Route index element={<MainIntroComponent  setViewProduct={setViewProduct}/>}/>
                            <Route path='/main' element={<MainIntroComponent setViewProduct={setViewProduct}/> } />
                            <Route path='/sub1' element={<Sub1Compnent setViewProduct={setViewProduct}/>}/>
                            <Route path='/sub2' element={<Sub2Compnent setViewProduct={setViewProduct}/>}/>
                            <Route path='/sub3' element={<Sub3Compnent setViewProduct={setViewProduct}/>}/>
                            <Route path='/sub4' element={<Sub4Compnent setViewProduct={setViewProduct}/>}/>
                            <Route path='/signup' element={<SignUpComponent openPopupDaumPostApi={openPopupDaumPostApi} addr={addr} timer={state} timerCounterFn={timerCounterFn} mapAddressFn={mapAddressFn} confirmModalOpen={confirmModalOpen}/>}/>
                            <Route path='/product' element={<ProductComponent key={key} cartCountNumber={cartCountNumber}/>}/>
                            <Route path='/cart' element={<CartComponent openPopupDaumPostApi={openPopupDaumPostApi} addr={addr} confirmModalOpen={confirmModalOpen}/> }/>
                        </Route>
                    </Routes>                       
                </BrowserRouter>

                <FooterComponent/>      
         
                {
                    modal.isConfirmModal&&<ConfirmModal confirmMsg={modal.confirmMsg} confirmModalClose={confirmModalClose}/>       
                }   
                <GoTopComponent/>
                <QuickMenuComponent product={product} isIntro={isIntro}/>
        </div>
    );
};