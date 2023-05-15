// 제이쿼리
// AJAX => JSON 데이터 처리 구현
(($)=>{
    
    $('.member-grade-btn-csv').on({
        click(e){
            e.preventDefault();

            $.ajax({
                url:'./data/member.csv',
                type:'GET',
                dataType:'CSV',
                success(res){
                    // console.log(res);
                    // 1. 줄단위로 분리하고
                    //    줄 끝을 검색 \r\n  
                    // 2. 칸단위로 분리한다
                    // 필드 (칸)별 분리작업
                    // 공백을 기준으로
                    // console.log(res.split('\r\n'));
                    let arr =[];
                    const result=res.split('\r\n');
                    $.each(result,function(i,item){
                        // console.log(idx,Number(item.split(' ')[0]),String(item.split(' ')[1]),Number(item.split(' ')[2]),(Number)(item.split(' ')[3]),(Number)(item.split(' ')[4])); // 공백을 기준으로 칸을 분리
                        arr[i]=[];
                        arr[i][0] =Number(item.split(' ')[0]); // 학번 
                        arr[i][1] =String(item.split(' ')[1]); // 이름
                        arr[i][2] =Number(item.split(' ')[2]); // 국어
                        arr[i][3] =Number(item.split(' ')[3]); // 영어
                        arr[i][4] =Number(item.split(' ')[4]); // 수학
                        arr[i][5] =arr[i][2]+arr[i][3]+arr[i][4]; // 총점
                        arr[i][6] =Math.round(arr[i][5]/3); // 평균
                    });
                  console.log(arr);
                  // 석차 => 동등 석차 구현
                    let suk=1;
                    for(let i=0;i<arr.length;i++){
                        suk=1;
                        for(let j=0;j<arr.length;j++){
                            if(arr[i][6]>arr[j][6]){
                                suk++;
                            }
                        }
                        arr[i][7]=suk;

                    }
                  // 정렬 평균점수의 오름차순 알고리즘 구현
                    let imsi='';
                    for(let i=0;i<arr.length-1;i++){
                        for(let j=i+1;j<arr.length;j++){
                            if(arr[i][7]>arr[j][7]){
                                for(let k=0;k<arr[i].length;k++){
                                    imsi=arr[i][k];
                                    arr[i][k]=arr[j][k];
                                    arr[j][k]=imsi;
                                }
                            }
                        }

                    }
                  // 출력 바인딩
                    $('.tbody-csv').empty();
                    for(let i=0; i<arr.length;i++){
                        $('.tbody-csv').append(`<tr data-key="${arr[i][0]}">`);
                        for(let j=0; j<arr[i].length;j++){
                            $('.tbody-csv').append(`<td>${arr[i][j]}</td>`);
                        }
                        $('.tbody-csv').append(`</tr>`);
                    }
                },
                error(err){
                    console.log(`AJAX 실패 ${err}`);
                }
            })
        }
    });

})(jQuery);