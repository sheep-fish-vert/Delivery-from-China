$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};

function headeButer(){
    $('.menu-mobile').click(function(event) {
        if($(window).width()<1024-$.scrollbarWidth()){
            $(this).toggleClass('active');
            $('.menu-row>.mbox').stop().slideToggle();
        }
    });

    $(document).on('click touchstart',function (event){
        if($(window).width()<1024-$.scrollbarWidth()){
            var div = $('.menu-row>.mbox');
            if (!div.is(event.target) && div.has(event.target).length === 0 && !$('.menu-mobile').is(event.target) && $('.menu-mobile').has(event.target).length === 0)
                {
                    $('.menu-row>.mbox').slideUp();
                    $('.menu-mobile').removeClass('active');
                }
        }
    });

}
function scrollButer(){
    $(window).scroll(function(event) {
        if($(window).scrollTop()>$('header .right-menu-header').outerHeight()){
            $('.menu-row').addClass('top_pos');
        }else{
            $('.menu-row').removeClass('top_pos');
        }
    });
}

function scrollReveal(){
    window.sr = ScrollReveal();
    sr.reveal('.scrollanim');
    sr.reveal('.scrolltitle', {
        delay    : 500,
        afterReveal : function( domEl ){
            $(domEl).parent().addClass('showing');
        }
    });
}


function clientSlider(){
    $('.client-row').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
}
$(document).ready(function(){
    clientSlider();
    scrollReveal();
    headeButer();
    scrollButer();
});

$(window).load(function(){

});

$(window).resize(function(){
    scrollButer();
});