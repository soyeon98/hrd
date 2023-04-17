(function popup(){//함수 안에서만 시용되는 변수 지역(local) 변수

    // window.open('팝업.html','창이름','너비=500, 높이=700,x축 좌표=0,y축 좌표=0');

    const winowName = 'popup_20230215';
    const winowName2 = 'popup_20230216';
    const popupWidth = 530; 
    const popupHeight = 570;
    const popupLeft = 0;
    const popupTop = 0;
    const popupLeft2 = 200;
    const popupTop2 = 200;

    window.open('./popup.html',winowName,`width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop}`);
    window.open('./popup2.html',winowName2,`width=${popupWidth},height=${popupHeight},left=${popupLeft2},top=${popupTop2}`);
}); // ()호출 안됨.
    // ()()호출 없이 즉시 실행되는 즉시실행함수.즉시표현함수식이라고도 함.


