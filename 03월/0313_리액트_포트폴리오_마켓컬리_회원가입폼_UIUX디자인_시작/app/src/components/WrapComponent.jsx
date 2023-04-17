import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpCompnent from './wrap/SignUpCompnent';
import FooterComponent from './wrap/FooterComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SubPage1Component from './wrap/SubPage1Component';
import SubPage2Component from './wrap/SubPage2Component';

export default function WrapComponent () {
    return (
        <div id='wrap'>
            <BrowserRouter>               
                <TopModalComponent/>{/* 고정페이지 */}
                
                <Routes>
                    <Route path='/' element={<HeaderComponent/>}>   {/* 네비게이션 항상 고정되는 페이지   메인버튼 클릭 시 페이지 이동 */}                      
                    <Route index element={ <SignUpCompnent/>}/> {/* 페이지들(컴포넌트들) */}                       
                    <Route path='/회원가입' element={ <SignUpCompnent/>}/> 페이지들(컴포넌트들)                       
                    <Route path='/로그인' element={ <SubPage1Component/>}/> {/* 페이지들(컴포넌트들) */}                       
                    <Route path='/고객센터' element={ <SubPage2Component/>}/> {/* 페이지들(컴포넌트들) */}                                           
                    </Route>
                </Routes>
               
                <FooterComponent/>{/* 고정페이지 */}
            </BrowserRouter>
        </div>
    );
};

