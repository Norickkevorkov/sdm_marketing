$(function() {
    $(document).mouseup(function (e) {
        var container = $('[class^=\"content__case__\"]');
        if (container.has(e.target).length === 0){
            container.hide();
            $('body').removeClass('body_hidden');
        }
    });
    $(document).ready(function () {
        $('.show_case').click(function(e){
            e.preventDefault();
            $('.content__case__'+$(this).attr('data-case')).fadeIn();
            $('body').addClass('body_hidden');
        });
        // $('button.play').click(function (e) {
        //     e.preventDefault();
        //     $(this).parent().hide();
        //     $('iframe.video').attr('src','https://player.vimeo.com/video/237902470?autoplay=1&color=ff0179&title=0&byline=0&portrait=0');
        //     $('iframe.video').show();
        //     $('iframe.video .controls-wrapper').hide();
        // });
        $('[class^="content__case__"] > div > button').click(function(){
            $('[class^="content__case__"]').fadeOut();
            $('body').removeClass('body_hidden');
        });


        $('[class^="content__case__"] .navigation > button[data-case]').click(function(){
            $('[class^="content__case__"]').fadeOut();
            $('.content__case__'+$(this).attr('data-case')).fadeIn();
        });
        Revealator.effects_padding = '-200';
        $('.header_button,.calls_request,.sixthscreen .person a,.thirdscreen .icon_block a, .content_case button.to_call').magnificPopup().click(function (e) {
            e.preventDefault();
            $('#to_call').show();
        });
        $('.checkbox_container a, footer .phone_block a:nth-of-type(4)').magnificPopup().click(function (e) {
            e.preventDefault();
            $('#fz').show();
        });
       $('.tabs li a').click(function (e) {
           e.preventDefault();
           $('figure.cycle').removeClass().addClass('cycle clicked-'+$(this).html());
           $('.tabs li').removeClass('active');
           $(this).parent().addClass('active');
           var activeTab = $(this).attr('href');
           $('.tab_container .tab').removeClass('active');
           $(activeTab).addClass('active');
       });
       $('.portfolio .row').slick({
           infinite: true,
           slidesToShow: 3,
           slidesToScroll: 1,
           responsive: [
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                   }
               }
               ]
       });
       if($(window).width()<=974){
           $('.mob_slider').slick();
       }else{
           $('.icon_block, .header_button, #wrapper:not(.firstscreen) .header:not("mfp-content"), .header2, p:not("portfolio"), .list li, h2,.case, .advantage, .person, .col-sm-4, h3, form').addClass('revealator-fade revealator-once');
           $('.firstscreen').find('*').removeClass('revealator-fade revealator-once');

       }
       if($(window).width()<=750)$('.advantages').slick();

    });
    // Inputmask на поле телефон
    $('input[type="tel"]').inputmask("+7(999)9999999");
    //Отправка форм через Ajax-запрос
    $('form input[type="submit"],button[type="submit"]').click(function (e) {
        e.preventDefault();
        var msg = $(this).parent('form').serialize();
        $.ajax({
            type: 'POST',
            url: '/form.php',
            data: msg,
            success: function(data){
                if(data=='true'){
                    $('.bid_message').show().find('.message').html('<b>Указанные Вами данные некорректны.</b>').css('color','red');
                    setTimeout(function () {

                        $('.bid_message').hide();
                    }, 3000);
                }else{
                    $('.bid_message').show().find('.message').html('<b>Ваша заявка успешно отправлена</b>').css('color','green');
                    yaCounter45907758.reachGoal('FORM');
                    fbq('track', 'Lead');
                    setTimeout(function () {

                        $('.bid_message').hide();
                    }, 3000);
                }
            },
            error: function (error) {
                console.log(error.responseText);
            }
        });
    });

});
