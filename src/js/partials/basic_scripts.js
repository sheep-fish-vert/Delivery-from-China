jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

var scroller=jQuery.browser.webkit ? "body": "html";

/* scrollUp */
function scrollUp(block,targetBlock) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scroller).animate({scrollTop:target},800);
        return false;

        e.preventDefault();
    });
}

function oneHeightItems(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight'));
}

/*scroll animation*/
function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}

/*GO TO href*/
function goTo(){
    $('.main-menu a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-65;
        $('body,html').animate({scrollTop:target},500,function(){
            if($(window).width()<1024){
                $('.menu-row>.mbox').slideUp();
                $('.menu-mobile').removeClass('active');
            }
        });
    });
}

function goTo2(){
    $('.block2-wrap a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-65;
        $('body,html').animate({scrollTop:target},500,function(){ });
    });
}

function goTo3(){
    $('.special-wrap a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top;
        $('body,html').animate({scrollTop:target},500,function(){ });
    });
}
function goTo4(){
    $('.top-img-block a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top;
        $('body,html').animate({scrollTop:target},500,function(){ });
    });
}


// cut text script

function cutText(){
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function(){
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if(text.length > value && value > 0){
            var newText = text.substring(0,value) + filler;
            $(this).text(newText);
        }
    });
};

/* DOCUMENT READY  */
$(document).ready(function() {
    //oneHeightItems();
    scrollUp('.go_to_convert_zayavka','.convert-zayavka');
    $('.footer_placeholder').height($('.footer').outerHeight());

    goTo();
    goTo2();
    goTo3();
    goTo4();
    //animationBlock($('.setion-animate'));
});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').outerHeight());
});