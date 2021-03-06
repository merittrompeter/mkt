$(document).ready(function(){
    console.log('Running');

    var scroll = function(where){
        $('html, body').animate({
            scrollTop: where.offset().top
        }, 500);
    };

    $('.tlt').textillate({
        selector: '.texts',
        loop: true,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true
    });

    $('#about').on('click', function(){
        $('.about').removeClass('hide').addClass('show');
        $('.work').removeClass('show').addClass('hide');
        $('.resume').removeClass('show').addClass('hide');
        $('#up').show()
        scroll($("#buffer"));
        $('#up').removeClass('hide');
    });

    $('#portfolio').on('click', function(){
        $('.work').removeClass('hide').addClass('show');
        $('.about').removeClass('show').addClass('hide');
        $('.resume').removeClass('show').addClass('hide');
        scroll($("#buffer"));
        $('#up').removeClass('hide');
    });

    $('#resume').on('click', function(){
    });

    $('#home').on('click', function(){
        location.reload();
    });

    $('#up').on('click', function(){
        $('.work').removeClass('show').addClass('hide');
        $('.about').removeClass('show').addClass('hide');
        $('#up').addClass('hide');
    });


// Large Icons
    $('#sudokucircle').on('click', function(){
        scroll($("#sudokutext"));
    });
    $('#quickcircle').on('click', function(){
        scroll($("#quicktext"));
    });
    $('#myhivecircle').on('click', function(){
        scroll($("#hivetext"));
    });
    $('#mesacircle').on('click', function(){
        scroll($("#mesatext"));
    });
    $('#chasecircle').on('click', function(){
        scroll($("#chasetext"));
    });

    $('.up').on('click', function(){
        scroll($("#buffer"));
    });

// Small Icons
    $('.s-sudokucircle').on('click', function(){
        scroll($("#sudokutext"));
    });
    $('.s-quickcircle').on('click', function(){
        scroll($("#quicktext"));
    });
    $('.s-myhivecircle').on('click', function(){
        scroll($("#hivetext"));
    });
    $('.s-mesacircle').on('click', function(){
        scroll($("#mesatext"));
    });
    $('.s-chasecircle').on('click', function(){
        scroll($("#chasetext"));
    });

    $('.up').on('click', function(){
        scroll($("#buffer"));
    });

});