$(function() {
    $(document).ready(function () {
        Revealator.effects_padding = '-200';
        $('.header_button,.calls_request,.sixthscreen .person a,.thirdscreen .icon_block a').magnificPopup().click(function (e) {
            e.preventDefault();
            $('#to_call').show();
        });
        $('.checkbox_container a').magnificPopup().click(function (e) {
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

       if($(window).width()<=992){
           $('.portfolio .row').slick();
           $('.mob_slider').slick();
       }else{
           $('.icon_block, .header_button, .header:not("mfp-content"), .header2, p:not("portfolio"), .list li, h2,.case, .advantage, .person, .col-sm-4, h3, form').addClass('revealator-fade revealator-once');
           $('.case').hover(
               function () {
                   $(this).find('.case_img').addClass('hover');
                   $(this).find('.desc').fadeIn(500,function(){
                       $(this).stop();
                   });
               },function () {
                   $(this).find('.desc').fadeOut(function(){
                       $(this).stop();
                   });
                   $(this).find('.case_img').removeClass('hover');
               }
           );
       }
       if($(window).width()<=768)$('.advantages').slick();

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
                    console.log(data);
                }else{
                    $('.bid_message').show().find('.message').html('<b>Ваша заявка успешно отправлена</b>').css('color','green');
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
