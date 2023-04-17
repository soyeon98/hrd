import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import '../scss/style.scss';

export default  function WrapComponent (props) {

    const[state,setState]=React.useState(props);

    React.useEffect(()=>{
        // console.log(state.과일);
        // console.log(state.자동차);
        // console.log(state.성적);
    });

    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent 성적={state.성적}/>
            <FooterComponent/>
        </div>
    );
};

WrapComponent.defaultProps={
    과일:[
        '백도','수박','사과','멜론','앵두'
    ],
    자동차:[
        '아우디','포르쉐','벤츠','제네시스','람보르기니'
    ],
    성적:[
        {번호:1,이름:'박소연',국어:100,영어:88,수학:96},
        {번호:2,이름:'이아현',국어:87,영어:78,수학:74},
        {번호:3,이름:'박미연',국어:99,영어:80,수학:84},
        {번호:4,이름:'이수현',국어:100,영어:100,수학:100},
        {번호:5,이름:'한수진',국어:98,영어:87,수학:92}
    ]
}




