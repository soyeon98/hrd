// 제이쿼리
// AJAX => JSON 데이터 처리 구현
(($)=>{
    
    $('.library-csv').on({
        click(e){
            e.preventDefault();

            $.ajax({
                url:'./data/library.csv',
                type:'GET',
                dataType:'TEXT',
                success(res){
                    console.log(res);
                    // 1. 줄단위로 분리하고
                    //    줄 끝을 검색 \r\n  
                    // 2. 칸단위로 분리한다
                    // 필드 (칸)별 분리작업
                    // 공백을 기준으로
                    // console.log(res.split('\r\n'));
                    let arr =[];
                    const result=res.split('\r\n');
                    $.each(result,function(i,item){
                       
                        arr[i]=[];
                        arr[i][0] =item.split(',')[0]; 
                        arr[i][1] =item.split(',')[1];
                        arr[i][2] =item.split(',')[2];
                        arr[i][3] =item.split(',')[3];
                        arr[i][4] =item.split(',')[4];
                        arr[i][5] =item.split(',')[5];
                        arr[i][6] =item.split(',')[6];
                        arr[i][7] =item.split(',')[7];
                        arr[i][8] =item.split(',')[8];
                        arr[i][9] =item.split(',')[9];
                        arr[i][10] =item.split(',')[10];
                        arr[i][11] =item.split(',')[11];

                    });
             

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