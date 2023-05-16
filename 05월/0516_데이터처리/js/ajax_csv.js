// 제이쿼리
// AJAX => JSON 데이터 처리 구현
(($)=>{
    
    $('.resort-csv').on({
        click(e){
            e.preventDefault();

            $.ajax({
                url:'./data/resort.csv',
                type:'GET',
                dataType:'text',
                success(res){
                    console.log(res);

                    let arr =[];
                    const result=res.split('\r\n');
                    $.each(result,function(i,item){
                       
                        arr[i]=[];
                        arr[i][0] =item.split(',')[0]; 
                        arr[i][1] =item.split(',')[1];
                        arr[i][2] =item.split(',')[5];
                        arr[i][3] =item.split(',')[8];
                        arr[i][4] =item.split(',')[10];
                        arr[i][5] =item.split(',')[18];
                        arr[i][6] =item.split(',')[20];
                        arr[i][7] =item.split(',')[49];

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

    $('.resort-res').on({
        click(e){
            e.preventDefault();
            $.ajax({
                url:'./data/resort.csv',
                type:'get',
                dataType:'text',
                success(res){
              
                  let a =[];
                  let b =[];
                  let cnt1=0;
                  let cnt2=0;
                  let cnt3=0;
                  let cnt4=0;
                  const result=res.split('\r\n');
                  $.each(result,function(i,item){   

                    a[i]=[];
                    a[i][0] =item.split(',')[8];
                    console.log(a[i][0]);
                    
                    
                    
                });
                for(let i=0;i<a.length;i++){
                   
                    if(a[i][0] === "휴업"){
                        cnt1++;
                    }
                    if(a[i][0] === "폐업"){
                        cnt2++;
                    }
                    if(a[i][0] === "영업/정상"){
                        cnt3++;
                    }
                    if(a[i][0] === "취소/말소/만료/정지/중지"){
                        cnt4++;
                    }
                }
                console.log(cnt1);
                console.log(cnt2);
                console.log(cnt3);
                console.log(cnt4);
                  for(let i=0; i<4; i++){
                    b[i] = [];
                  }
                  b[0][0]="휴업";
                  b[1][0]="폐업";
                  b[2][0]="영업/정상";
                  b[3][0]="취소/말소/만료/정지/중지";
                  b[0][1]=cnt1;
                  b[1][1]=cnt2;
                  b[2][1]=cnt3;
                  b[3][1]=cnt4;
          
                
                  $('.tbody-csv-res').empty();
                  for(let i=0; i<b.length; i++){
                    $('.tbody-csv-res').append("<tr>");
                    for(let j=0; j<b[i].length; j++){
                        $('.tbody-csv-res').append(`<td>${b[i][j]}</td>`);
                    }
                    $('.tbody-csv-res').append("</tr>");
                  }

                },
                error(err){

                }
            })
        }
    })

})(jQuery);