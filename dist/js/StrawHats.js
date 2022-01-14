$(document).ready(() => {
    var cursor = $('.cursor');
    var crewNav = $('#crewNav');
    var listNav = $('#listNav');
    var galleryNav = $('#galleryNav');
    var logo = $('.strawLogo');
    var navUl = $('nav ul');

    $(window).mousemove((e) => {
        var x = e.pageX;
        var y = e.pageY;
        cursor.css({
            'left': x + "px",
            'top': y + "px",
        });
    });

    crewNav.mouseover(() => {
        cursor.addClass('nav-hover');
     });
     crewNav.mouseleave(() => {
        cursor.removeClass('nav-hover');
     });
  
     listNav.mouseover(() => {
        cursor.addClass('nav-hover');
     });
     listNav.mouseleave(() => {
        cursor.removeClass('nav-hover');
     });
  
     galleryNav.mouseover(() => {
        cursor.addClass('nav-hover');
     });
     galleryNav.mouseleave(() => {
        cursor.removeClass('nav-hover');
     });

     $('.listLogo').mouseover(() => {
        cursor.addClass('lg-hover');
     });
     $('.listLogo').mouseleave(() => {
        cursor.removeClass('lg-hover');
     });

     $('#up-buttonSH').mouseover(() => {
        cursor.addClass('up-button-hover');
     });
     $('#up-buttonSH').mouseleave(() => {
        cursor.removeClass('up-button-hover');
     });

     $('#up-buttonSH').click(() => {
        logo.css({
            'color':'white',
        });
        navUl.addClass('strawNav-anim');
        setTimeout(() => {
            $('#SHLuffyDisplay').css({'display' :'none'});
            $('#SHZoroDisplay').css({'display' :'none'});
            $('#SHNamiDisplay').css({'display' :'none'});
            $('#SHSanjiDisplay').css({'display' :'none'});
            $('#SHUsoppDisplay').css({'display' :'none'});
            $('#SHChopperDisplay').css({'display' :'none'});
            $('#SHRobinDisplay').css({'display' :'none'});
            $('#SHFrankyDisplay').css({'display' :'none'});
            $('#SHBrookDisplay').css({'display' :'none'});
            $('#SHJinbeDisplay').css({'display' :'none'});  
        }, 500);
     });

     logo.mouseover(() => {
        cursor.addClass('lg-hover');
     });
     logo.mouseleave(() => {
        cursor.removeClass('lg-hover');
     });
     
    $('#SHLuffy').mouseover(() => {
        $('#SHLuffy').css({ 
            'opacity': '1',
        });
    });
    $('#SHLuffy').mouseleave(() => {
        $('#SHLuffy').css({ 
            'opacity': '0.5',
        });
    });

    $('#SHLuffy').click(() => {
        $('#luffyImg').addClass('loadStraw-anim');
        $('#luffyTitle').addClass('loadStrawtext-anim'); 
        $('#luffyh2').addClass('loadStrawtext-anim');
        $('#luffyp').addClass('loadStrawtext-anim');
        $('#SHLuffyDisplay').css({'display': 'block',});
    });


    $('#SHZoro').mouseover(() => {
        $('#SHZoro').css({ 
            'opacity': '1',
        });
    });
    $('#SHZoro').mouseleave(() => {
        $('#SHZoro').css({ 
            'opacity': '0.5',
        });
    });

    $('#SHZoro').click(() => {
        $('#zoroImg').addClass('loadStraw-anim');
        $('#zoroTitle').addClass('loadStrawtext-anim'); 
        $('#zoroh2').addClass('loadStrawtext-anim');
        $('#zorop').addClass('loadStrawtext-anim');
        $('#SHZoroDisplay').css({'display': 'block',});
    });

    $('#SHNami').mouseover(() => {
        $('#SHNami').css({ 
            'opacity': '1',
        });
    });
    $('#SHNami').mouseleave(() => {
        $('#SHNami').css({ 
            'opacity': '0.5',
        });
    });
    $('#SHNami').click(() => {
        $('#namiImg').addClass('loadStraw-anim');
        $('#namiTitle').addClass('loadStrawtext-anim'); 
        $('#namih2').addClass('loadStrawtext-anim');
        $('#namip').addClass('loadStrawtext-anim');
        $('#SHNamiDisplay').css({'display': 'block',});
    });


    $('#SHUsopp').mouseover(() => {
        $('#SHUsopp').css({ 
            'opacity': '1',
        });
    });
    $('#SHUsopp').mouseleave(() => {
        $('#SHUsopp').css({ 
            'opacity': '0.5',
        });
    });
    $('#SHUsopp').click(() => {
        $('#usoppImg').addClass('loadStraw-anim');
        $('#usoppTitle').addClass('loadStrawtext-anim'); 
        $('#usopph2').addClass('loadStrawtext-anim');
        $('#usoppp').addClass('loadStrawtext-anim');
        $('#SHUsoppDisplay').css({'display': 'block',});
    });



    $('#SHSanji').mouseover(() => {
        $('#SHSanji').css({ 
            'opacity': '1',
        });
    });


    $('#SHSanji').mouseleave(() => {
        $('#SHSanji').css({ 
            'opacity': '0.5',
        });
    });

    $('#SHSanji').click(() => {
        $('#sanjiImg').addClass('loadStraw-anim');
        $('#sanjiTitle').addClass('loadStrawtext-anim'); 
        $('#sanjih2').addClass('loadStrawtext-anim');
        $('#sanjip').addClass('loadStrawtext-anim');
        $('#SHSanjiDisplay').css({'display': 'block',});
    });


    $('#SHChopper').mouseover(() => {
        $('#SHChopper').css({ 
            'opacity': '1',
        });
    });

    $('#SHChopper').mouseleave(() => {
        $('#SHChopper').css({ 
            'opacity': '0.5',
        });
    });
    $('#SHChopper').click(() => {
        $('#chopperImg').addClass('loadStraw-anim');
        $('#chopperTitle').addClass('loadStrawtext-anim'); 
        $('#chopperh2').addClass('loadStrawtext-anim');
        $('#chopperp').addClass('loadStrawtext-anim');
        $('#SHChopperDisplay').css({'display': 'block',});
    });

    $('#SHRobin').mouseover(() => {
        $('#SHRobin').css({ 
            'opacity': '1',
        });
    });
    $('#SHRobin').mouseleave(() => {
        $('#SHRobin').css({ 
            'opacity': '0.5',
        });
    });
    $('#SHRobin').click(() => {
        $('#robinImg').addClass('loadStraw-anim');
        $('#robinTitle').addClass('loadStrawtext-anim'); 
        $('#robinh2').addClass('loadStrawtext-anim');
        $('#robinp').addClass('loadStrawtext-anim');
        $('#SHRobinDisplay').css({'display': 'block',});
    });

    $('#SHFranky').mouseover(() => {
        $('#SHFranky').css({ 
            'opacity': '1',
        });
    });
    $('#SHFranky').mouseleave(() => {
        $('#SHFranky').css({ 
            'opacity': '0.5',
        });
    });
    $('#SHFranky').click(() => {
        $('#frankyImg').addClass('loadStraw-anim');
        $('#frankyTitle').addClass('loadStrawtext-anim'); 
        $('#frankyh2').addClass('loadStrawtext-anim');
        $('#frankyp').addClass('loadStrawtext-anim');
        $('#SHFrankyDisplay').css({'display': 'block',});
    });

    $('#SHBrook').mouseover(() => {
        $('#SHBrook').css({ 
            'opacity': '1',
        });
    });
    $('#SHBrook').mouseleave(() => {
        $('#SHBrook').css({ 
            'opacity': '0.5',
        });
    });
    $('#SHBrook').click(() => {
        $('#brookImg').addClass('loadStraw-anim');
        $('#brookTitle').addClass('loadStrawtext-anim'); 
        $('#brookh2').addClass('loadStrawtext-anim');
        $('#brookp').addClass('loadStrawtext-anim');
        $('#SHBrookDisplay').css({'display': 'block',});
    });

    $('#SHJinbe').mouseover(() => {
        $('#SHJinbe').css({ 
            'opacity': '1',
        });
    });
    $('#SHJinbe').mouseleave(() => {
        $('#SHJinbe').css({ 
            'opacity': '0.5',
        });
    });
    $('#SHJinbe').click(() => {
        $('#jinbeImg').addClass('loadStraw-anim');
        $('#jinbeTitle').addClass('loadStrawtext-anim'); 
        $('#jinbeh2').addClass('loadStrawtext-anim');
        $('#jinbep').addClass('loadStrawtext-anim');
        $('#SHJinbeDisplay').css({'display': 'block',});
    });

    $('.strawHatDivs').mouseover(() => {
        cursor.addClass('shPirates-hover');
    });
    $('.strawHatDivs').mouseleave(() => {
        cursor.removeClass('shPirates-hover');
    });
});
