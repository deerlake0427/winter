// slide_04.js

(function($){
   console.log("slide_04.js를 불러왔어요.");

   const slideForm = $('.slide_03_form');
   const slideGuide = slideForm.children('ul');
   const slideLi = slideGuide.find('li');

   // li에 이름(class) 붙이기 (slide_03_con_0$)
   for (let i = 0; i <= slideLi.length; i++){
      let classname = 'slide_03_con_' + (i + 1);
      slideLi.eq(i).addClass(classname);
   };

   let cloneLi = slideLi.eq(-1).clone(true);

   cloneLi.prependTo(slideGuide);
   // slideGuide.prepend(slideLi.eq(-1)); 와 같음

//    # 주의점! ******************
   // 1. prepend, prependTo 의 역할을 정확하게 구분.
   /* : 감싸는 영역.prepend(담는 내용)
        담는 내용.prependTo(감싸는 영역)  */

   // 2. 마지막 영역을 복제(clone)한 후에 앞에 담을 것.

   // 3. css작업시 nth-child()를 이용하여 이미지/기능을 담으면...순서가 의도한 대로 안 나올 가능성이 있음.
   //    => 각각 class이름을 부여하여 이미지/기능을 처리해야한다.
   //    (복제 전에 이름을 부여!!!!!!!)

   // 4. 또한, 그 부모인 영역의 넓이는 기존 갯수 + 1 만큼의 크기값으로 재설정해야한다.
   

})(jQuery);