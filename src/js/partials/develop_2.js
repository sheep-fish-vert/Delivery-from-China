$(document).ready(function(){
    $('#slider .convert-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1
    });

});

$(window).load(function(){
    $('.selectable-trip').styler();

    $('.add-file-config').click(function(){
        $('input[type="file"]').click();
    })
});

$(window).resize(function(){

});