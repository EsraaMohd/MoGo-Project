$(document).ready(function(){
    $(".btn").click(function(){ 
        $('.redBtn').addClass('.visible');
      
    });
    $(".btn").click(function(){ 
       $('.redBtn').removeClass('.visible');
    });


     $('.person').mouseenter(function(){ 
        $('.share').addClass('appear');
    });
     $('.person').mouseleave(function(){ 
       $('.share').removeClass('appear');
    });

 
      $('.person1').mouseenter(function(){ 
        $('.share1').addClass('appear');
      
    });
     $('.person1').mouseleave(function(){ 
       $('.share1').removeClass('appear');
    });
 
      $('.person2').mouseenter(function(){ 
        $('.share2').addClass('appear');
    });
     $('.person2').mouseleave(function(){ 
       $('.share2').removeClass('appear');
    });

    $('.picture').mouseenter(function(){ 
        $('.bgColor').addClass('visible');
    });
    $('.picture').mouseleave(function(){ 
       $('.bgColor').removeClass('visible');
    });

    $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
    });
    });
});