$(document).ready(function(){

    //nav side menu thing
    $('.sidenav').sidenav();

//navbar scroll

$('.nav-item').on('click',function (e) {
    $('html, body').stop().animate({
        'scrollTop': $($(this).attr('scroll')).offset().top-64
    }, 900, 'swing', function () {});
});



console.log("whuwuhf")










})