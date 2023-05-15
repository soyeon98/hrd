// 제이쿼리
// AJAX => JSON 데이터 처리 구현
(($)=>{
    
    $('.library-json').on({
        click(e){
            e.preventDefault();

            $.ajax({
                url:'./data/library.json',
                type:'GET',
                dataType:'JSON',
                success(res){
          
                    
                    let lib=[]; 
                    res.도서현황.map(function(item,i){
                        lib[i]=[];
                        lib[i][0]=item.도서관명; 
                        lib[i][1]=item.총류; 
                        lib[i][2]=item.철학; 
                        lib[i][3]=item.종교; 
                        lib[i][4]=item.사회과학; 
                        lib[i][5]=item.순수과학; 
                        lib[i][6]=item.기술과학; 
                        lib[i][7]=item.예술; 
                        lib[i][8]=item.언어; 
                        lib[i][9]=item.문학; 
                        lib[i][10]=item.역사; 
                        lib[i][11]=item.데이터기준일; 

                     
                    });
                    $('.tbody-json').empty();
                    for(let i=0;i<lib.length;i++){
                        $('.tbody-json').append('<tr>');
                        for(let j=0;j<lib[i].length;j++){
                            $('.tbody-json').append(`<td>${lib[i][j]}</td>`);
                        }   
                        $('.tbody-json').append('</tr>');
                    }
                        
                 
                },
                error(err){
                    console.log(`AJAX실패 ${err}`);
                }
            });
        }
    })
})(jQuery);