// main.js

(function($){
   // #wrap
   const body = $('body');    //body
   const wrap = $("#wrap");   //#wrap
   wrap.append('<section id="viewBox"></section>'); // #viewBox 생성
   const viewBox = $('#viewBox');
   
   // script 내용 간편작성함수 생성
   const JsLink = (temp) => {
      return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
      // return은 공식적으론 써야하지만 안 써도 되긴 함.
   };

   viewBox.load('./temp/slide_01.html',() => {
                                 // function(){}와 동일한 형태
      JsLink('slide_01');
   });


})(jQuery);