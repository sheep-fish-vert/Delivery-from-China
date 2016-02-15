
function mapInit(mapWrap){

    if($('#'+mapWrap).length != 0){

        function initialize() {
            var myLatlng = new google.maps.LatLng(cordX, cordY);
            var myOptions = {
                zoom: 16,
                center: myLatlng,
                disableDefaultUI: false, //без управляющих елементов
                zoomControl: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
                zoomControlOptions: {
                   position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
                }
            }
            var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

            var contentString = '<div class="marker-town">'+googleTown+'</div><div class="marker-street marker-text-main"><span class="marker-icon marker-street-icon"></span><span class="marker-text">'+googleStreet+'</span></div><div class="marker-text-main marker-skype"><span class="marker-icon marker-skype-icon"></span><span class="marker-text">'+googleSkype+'</span></div><div class="marker-text-main marker-mail"><span class="marker-icon marker-mail-icon"></span><span class="marker-text">'+googleMail+'</span></div><div class="marker-text-main marker-text"><span class="marker-icon marker-telefone-icon"></span><span class="marker-text">'+markerTelefone[0]+'</span></div><div class="marker-text-main marker-text"><span class="marker-icon marker-telefone-icon"></span><span class="marker-text">'+markerTelefone[1]+'</span></div><div class="marker-text-main marker-text"><span class="marker-icon marker-telefone-icon"></span><span class="marker-text">'+markerTelefone[2]+'</span></div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                pixelOffset: new google.maps.Size(-250,400)
            });

            var image = 'images/marker-icon.png';   // иконка картинкой

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP, // анимация при загрузке карты
                icon: image //  иконка картинкой

            });

            google.maps.event.addListener(infowindow, 'domready', function() {

               var iwOuter = $('.gm-style-iw');

               var iwBackground = iwOuter.prev();
               var closeButton = iwOuter.next();

               closeButton.addClass('custom-close');

               iwBackground.css({'display' : 'none'});

            });

            /*По клику открываеться инфоблок*/
            google.maps.event.addListener(marker, 'click', function() {

                infowindow.open(map,marker);

            });

        }

        initialize();

    }

}

$(document).ready(function(){

    mapInit('contact-map-main');

});

$(window).load(function(){

});

$(window).resize(function(){

});