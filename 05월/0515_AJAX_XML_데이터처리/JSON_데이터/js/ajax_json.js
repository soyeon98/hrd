// 제이쿼리
// AJAX => JSON 데이터 처리 구현
(($)=>{
    
    $('.member-hp-btn').on({
        click(e){
            e.preventDefault();

            $.ajax({
                url:'./data/member.json',
                type:'GET',
                dataType:'JSON',
                success(res){
                    // console.log('AJAX 성공!');
                    // console.log(res);
                    // 연락처 테이블에 바인딩하기
                    let txt='';
                    $('.tbody-json1').empty();// 내용지우기
                    $.each(res.연락처,function(idx,item){
                        txt += `<tr data-key=${item.번호}>`
                        txt += `    <td>${item.번호}</td>`
                        txt += `    <td>${item.이름}</td>`
                        txt += `    <td>${item.휴대폰}</td>`
                        txt += `</tr>`
                    });
                    $('.tbody-json1').append(txt);
                },
                error(err){
                    console.log(`AJAX 실패 ${err}`);
                }
            })
        }
    });

    //성적표
    $('.member-grade-btn').on({
        click(e){
            e.preventDefault();

            $.ajax({
                url:'./data/member.json',
                type:'GET',
                dataType:'JSON',
                success(res){
                    console.log('AJAX 성공!');
                    console.log(res);
                    $('.tbody1').empty();// 내용지우기

                    // 1.원시데이터 가져오기
                    // 2. 2차원배열에 저장
                    // 3. 총점 평균 계산처리
                    // 4. 석차
                    // 5. 정렬 석차 오름 차순
                    // 6. 출력바인딩
                    let student=[]; 
                    res.성적표.map(function(item,idx){
                        student[idx]=[];
                        student[idx][0]=item.번호; //번호
                        student[idx][1]=item.이름; //이름
                        student[idx][2]=item.국어; //국어
                        student[idx][3]=item.영어; //영어
                        student[idx][4]=item.수학; //수학
                        student[idx][5]= student[idx][2]+ student[idx][3]+ student[idx][4]; //총점
                        student[idx][6]=Math.round(student[idx][5]/3); // 평균
                     
                    });
                        
                    // 2.석차///////////////
                    let suk=1;
                    for(let i=0;i<student.length;i++){
                        suk=1;
                        for(let j=0;j<student.length;j++){
                            if(student[i][6]<student[j][6]){
                                suk++;
                            }
                        }
                        student[i][7] =suk;
                    }
                    // 3. 정렬알고리즘 구현  
                        let imsi="";
                        for(let i=0;i<student.length-1;i++){
                            for(let j=i+1;j<student.length;j++){
                                if(student[i][7]>student[j][7]){
                                     for(let k=0;k<student[i].length;k++){
                                        imsi = student[i][k];
                                        student[i][k] = student[j][k];
                                        student[j][k] = imsi;
                                    }
                               }
         
                                
                            }

                        }
                    // 4. 행열(2차원 배열) 
                    for(let i=0; i<student.length;i++){
                        $('.tbody-json2').append(`<tr data-key="${student[i][0]}">`);
                        for(let j=0; j<student[i].length;j++){
                            $('.tbody-json2').append(`<td>${student[i][j]}</td>`);
                        }
                        $('.tbody-json2').append(`</tr>`);
                    }
                   
                },
                error(err){
                    console.log(`AJAX실패 ${err}`);
                }
            });
        }
    })
})(jQuery);