
$(document).ready(() => {
    $('#yonkoList').slideToggle('fast', 'linear');
    $('#admiralList').slideToggle('fast', 'linear');
    $('#blwWarlordList').slideToggle('fast', 'linear');
    $('#warlordList').slideToggle('fast', 'linear');
var cursor = $('.cursor');

$(window).load = tempCursorHide();

function tempCursorHide() {
    $("#listBody").css({
        'overflow-y': 'hidden',
    });
    setTimeout(() => {
        $("#listBody").css({
            'overflow-y': 'visible',
        });
    }, 2000);
}

  $(window).mousemove((e) => {
      var x =  e.pageX;
      var y = e.pageY;
    cursor.css({
        'top': y + 'px',
        'left': x + 'px'
    });
  });
    
    $('.listLogo').mouseover(() => {
       cursor.addClass('lg-hover');
    });
    $('.listLogo').mouseleave(() => {
       cursor.removeClass('lg-hover');
    });

   
        $('#crewNav').mouseover(() => {
            cursor.addClass('nav-hover');
        });
        $('#crewNav').mouseleave(() => {
            cursor.removeClass('nav-hover');
        });

        $('#listNav').mouseover(() => {
            cursor.addClass('nav-hover');
        });
        $('#listNav').mouseleave(() => {
            cursor.removeClass('nav-hover');
        });

        $('#galleryNav').mouseover(() => {
            cursor.addClass('nav-hover');
        });
        $('#galleryNav').mouseleave(() => {
            cursor.removeClass('nav-hover');
        });
  
// List Toggles

        var vshape = $('.vShape');
        var subShape = $('.subtractShape');
        

        vshape.mouseover(() => {
            cursor.addClass('subVShape-cursor');
        });
        vshape.mouseleave(() => {
            cursor.removeClass('subVShape-cursor');
        });

        subShape.mouseover(() => {
            cursor.addClass('subVShape-cursor');
        });
        subShape.mouseleave(() => {
            cursor.removeClass('subVShape-cursor');
        });

        $('#yonkoToggle').click(() => {
            $('#yonkoList').slideToggle('fast', 'linear');
            $('#yonkoToggle').toggleClass('vShape');
            $('#yonkoToggle').toggleClass('subtractShape');
            $('#yonkoListTitle').toggleClass('listTitle-click');
        });

        $('#admiralToggle').click(() => {
            $('#admiralList').slideToggle('fast', 'linear');
            $('#admiralToggle').toggleClass('vShape');
            $('#admiralToggle').toggleClass('subtractShape');
            $('#admiralListBtn').toggleClass('listBtn-margintop');
            $('#admiralListBtn').toggleClass('listBtn-marginchange');
            $('#admiralListTitle').toggleClass('listTitle-click');
        });
        
        $('#warlordToggle').click(() => {
            $('#warlordList').slideToggle('fast', 'linear');
            $('#warlordToggle').toggleClass('vShape');
            $('#warlordToggle').toggleClass('subtractShape');
            $('#warlordListBtn').toggleClass('listBtn-margintop');
            $('#warlordListBtn').toggleClass('listBtn-marginchange');
            $('#warlordListTitle').toggleClass('listTitle-click');
        });

        $('#blwWarlordToggle').click(() => {
            $('#blwWarlordList').slideToggle('fast', 'linear');
            $('#blwWarlordToggle').toggleClass('vShape');
            $('#blwWarlordToggle').toggleClass('subtractShape');
            $('#blwWarlordListBtn').toggleClass('listBtn-margintop');
            $('#blwWarlordListBtn').toggleClass('listBtn-marginchange');
            $('#blwWarlordListTitle').toggleClass('listTitle-click');
        });

        $('.yonkoListItem').mouseover(() => {
            $('.yonkoListItem:hover').addClass('listItem-hover');
            $('.yonkoListItem:hover').removeClass('listItem-toNormal');
            cursor.addClass('listItem-cursor');
        });
        $('.yonkoListItem').mouseleave(() => {
            $('.yonkoListItem').removeClass('listItem-hover');
            $('.yonkoListItem').addClass('listItem-toNormal');
            cursor.removeClass('listItem-cursor');
        });
        

        $('.listItem').mouseover(()=> {
            $('.listItem:hover').addClass('listItem-hover');
            $('.listItem:hover').removeClass('listItem-toNormal');
            cursor.addClass('listItem-cursor');
        });

        $('.listItem').mouseleave(()=> {
            $('.listItem').removeClass('listItem-hover');
            $('.listItem').addClass('listItem-toNormal');
            cursor.removeClass('listItem-cursor');
        });

        $('.glide__slides').click(()=> {
            cursor.toggleClass('listItem-drag');
            setTimeout(() => {
                cursor.toggleClass('listItem-drag');
            },200);
            
        });

        $('.carousel').mouseover(() => {
            cursor.addClass('carousel-cursor');
        });
        $('.carousel').mouseleave(() => {
            cursor.removeClass('carousel-cursor');
        });

        
        $('.listBtn').mouseover(() => {
            cursor.addClass('carousel-cursor');
        });
        $('.listBtn').mouseleave(() => {
            cursor.removeClass('carousel-cursor');
        });

        $('.glidearrow').mouseover(() => {
            cursor.addClass('arrow-cursor');
        });
        
        $('.glidearrow').mouseleave(() => {
            cursor.removeClass('arrow-cursor');
        });
    });

