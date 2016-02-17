var afterText ;

$(document).ready(function(){
    $('#slider .convert-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.fancybox').click(function() {
        var items = $(this).closest('.item').clone();
        $('#call-tovar>.tovar-block').append(items);
        afterText = $(this).closest('.item').find('.after-text').html();
        $('.contact-form-title>h5').html('Заказать ' + afterText);
    });
    
    $('.slide-to').click(function(){
        var terew = $(this).attr('data-slide') - 1;
        $('.slick-dots>li').eq( terew ).click();
    })

});

$(window).load(function(){
    $('.selectable-trip').styler();

    $('.add-file-config').click(function(){
        $('input[type="file"]').click();
    });

    $('.contact-form-item-file[type="file"]').change(function(){
       var file = $(this)[0].files[0].name;
       var tag = $('<div class="name_of_file"></div>');
       tag.text(file+'*');
       $('.contact-form-item-file[type="file"]').parent().append(tag);
    });
});

$(window).resize(function(){

});