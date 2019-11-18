// join_check.js

(function($){
   // form 기능에서 사용하는 jQuery 메소드
   // Val(); -> value 값을 가져오는 기능.
   // hasClass('class이름') -> class이름의 유무 판단.
   // is(':checked') -> 속성의 기능의 상태(hover, focus, checked...등)를 확인하는 기능.
   // prop() -> 속성의 상황묘사
   // prop('checked',true) -> 속성의 상황묘사에서 역할 부여

   
   // ------------------------------------------------------
   // 전체 동의 클릭시, 전체가 체크되게 만들기
   const allCheck = $('#allCheck');
   const cbSel = $('.cb_sel');
   let ck;

   allCheck.on('click',function(e){                // allCheck 클릭
   //    // e.preventDefault();
   //    // console.log(e);
   //    // let thisCheck = $(this).is(':checked');
   //    // let thisC2 = $(this).prop('checked');
   //    // let checkAttr = $(this).is('checked');
      ck = allCheck.is(':checked');                // allCheck의 상태를 체크 = true.
      console.log(ck);                             // =true

      if (ck){
         cbSel.prop('checked',true);               //cbSel의 속성 (진짜 속성)
         cbSel.attr({'checked':true});             //cbSel에 checked 속성이 true (시각적)
         allCheck.prop('checked', true);
         allCheck.attr('checked', true);
      }else{
         cbSel.prop('checked',false);
         cbSel.attr('checked',false);
         allCheck.prop('checked', false);
         allCheck.attr('checked', false);
      }//if(ck)
   });


   // 약관 동의 개별 선택, 해제시 전체 동의 해제
   cbSel.on('click',function(){             
      for (let i = 0; i < cbSel.length; i++) {
         // cbSel을 점검할 때, allCheck부분은 포함되지 않도록 조건을 설정해야함
         ck = cbSel.eq(i).is(':checked'); // cbSel.eq(i)들의 checked 상태를 전부 점검
         console.log(ck);                 //

         if(ck == false){                 // cbSel.eq(i) 중 false를 만나게 되면,
            allCheck.prop('checked',false);  //allCheck에 속성 추가. 
            allCheck.attr('checked',false);  //
            break;   // for문의 반복을 끊는 기능. // 그 순간, 점검을 종료.
                     // (continue = 건너뛰기/ break = 멈추고 빠져나가기)
         }else{
            allCheck.prop('checked',true);
            allCheck.attr('checked',true);//
         };
      }// for

      // each사용
      // cbSel.each(function(data){
      //    ck = $(this).is(':checked');
      //    console.log(ck);
      //    if (ck == false) {
      //       allCheck.prop('checked', false);
      //       allCheck.attr('checked', false);
      //    }
      // })//위와 동일
   })//cbSel.on('click');

})(jQuery);