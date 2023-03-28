lightbox.option({
    'resizeDuration': 600,
    'wrapAround': true,
    'showImageNumberLabel':false
  })

  $(function(){
    $('#more-btn>a').on('click',function(){
        $('.box:nth-of-type(n+9)').slideToggle(200);

        let txt = $(this).text();
        if(txt ==='もっとみる'){
            $(this).text('とじる');
        }else{
            $(this).text('もっとみる');
        }

        return false;
    });

  });