
$(document).ready(()=> {
   var cursor = $('.cursor');
   $(window).mousemove((e) => {
      var x =  e.pageX;
      var y = e.pageY;
    cursor.css({
        'top': y + 'px',
        'left': x + 'px'
    });
   });

   var crewNav = $('#crewNav');
   var listNav = $('#listNav');
   var galleryNav = $('#galleryNav');

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

 
   $('.glide__slide').mouseover(() => {
      $('.galleryItem:hover').addClass('galleryItem-hover');
      $('.galleryItem').removeClass('galleryItem-toNormal');
      cursor.addClass('galleryItem-cursor');
  });

  $('.glide__slide').mouseleave(() => {
   $('.galleryItem').removeClass('galleryItem-hover');
   $('.galleryItem').addClass('galleryItem-toNormal');
   cursor.removeClass('galleryItem-cursor');
});

   var title = $('.galleryslctTitle');
   var arc = $('.galleryslctArc'); 
   var vid_desc = $('.galleryslctText'); 
   var vid_video = $('#gallery_video');

  vid_video.mouseover(() => {
      cursor.css({
         'opacity': '0',
      });
   });

   vid_video.mouseleave(() => {
      cursor.css({
         'opacity': '1',
      });
   });
   $('.g0').click(() => {
      title.empty();
      arc.empty();
      vid_desc.empty();
      title.append("Thank you owner zeff");
      arc.append("Baratie");
      vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
      vid_video.attr('src', 'https://youtube.com/embed/wDTaOF5NfHc');
      $('#playpauseBtn').css({
         'opacity': '1',
      });
   });

   $('.g1').click(() => {
      title.empty();
      arc.empty();
      vid_desc.empty();
      title.append("The Walk to Arlong Park");
      arc.append("Arlong Park");
      vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
      vid_video.attr('src', 'https://youtube.com/embed/kKSEudBf2-M');
      $('#playpauseBtn').css({
         'opacity': '1',
      });
   });

   $('.g2').click(() => {
      title.empty();
      arc.empty();
      vid_desc.empty();
      title.append("Arlong is Defeated");
      arc.append("Arlong Park");
      vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
      vid_video.attr('src', 'https://youtube.com/embed/bWfkpxbLNDI');
      $('#playpauseBtn').css({
         'opacity': '1',
      });
   });

   $('.g3').click(() => {
      title.empty();
      arc.empty();
      vid_desc.empty();
      title.append(" When do people Die?");
      arc.append("Drum Island");
      vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
      vid_video.attr('src', 'https://youtube.com/embed/qqlwhoDH5ac');
      $('#playpauseBtn').css({
         'opacity': '1',
      });
   });
      

      $('.g4').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("The Cherry Blossom");
         arc.append("Drum Island");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://youtube.com/embed/sHop6asiT1c');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('.g5').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("Crocodile's Defeat");
         arc.append("Alabasta");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://youtube.com/embed/gKZRqe0Iyww');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('.g6').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("We will always be friends");
         arc.append("Alabasta");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://youtube.com/embed/xr3JNCIQdEQ');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('.g7').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("I want to live!");
         arc.append("Enies lobby");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://www.youtube.com/embed/TsP0ByjyU6A');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('.g8').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("goodbye merry");
         arc.append("Enies Lobby");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://www.youtube.com/embed/RQJBHbdA-ug');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });


      $('.g9').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("Bink's Brew");
         arc.append("Thriller Bark");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://youtube.com/embed/ClnlNUOwRAg');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('.g10').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("Family is another story");
         arc.append("Marineford");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://youtube.com/embed/X29uLO9JbtU');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('.g11').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("Ace's Death");
         arc.append("Marineford");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://www.youtube.com/embed/4Jq3cLhgGdY');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('.g12').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("Jinbe gives blood");
         arc.append("Fishman Island");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://youtube.com/embed/cgDQgFlMxbw');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('.g13').click(() => {
         title.empty();
         arc.empty();
         vid_desc.empty();
         title.append("Usopp vs Luffy");
         arc.append("Enies Lobby");
         vid_desc.append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales libero a felis facilisis pretium a a erat. Praesent consectetur dui eu neque imperdiet, vel commodo odio faucibus. Phasellus a nisl molestie mauris cursus sollicitudin. Donec elementum porta vulputate. Praesent magna sem, maximus sit amet consectetur a, sagittis vitae eros. Aliquam erat volutpat. Cras feugiat libero et auctor ullamcorper. Sed at blandit tellus, sed pulvinar nunc. Phasellus bibendum auctor consectetur. Donec molestie, magna non ultrices fermentum, arcu metus lacinia ligula, vitae luctus quam metus ut velit.");
         vid_video.attr('src', 'https://youtube.com/embed/noTXSLgJH9c');
         $('#playpauseBtn').css({
            'opacity': '1',
         });
      });

      $('#galleryDown').mouseover(() =>{
         cursor.addClass('down-button-hover');
      });
      $('#galleryDown').mouseleave(() =>{
         cursor.removeClass('down-button-hover');
      });
      $('#galleryDown').click(() =>{
        $('#navWrapper').css({
           'display': 'none',
        });
      });

      $('#galleryUp').mouseover(() =>{
         cursor.addClass('up-button-hover');
      });
      $('#galleryUp').mouseleave(() =>{
         cursor.removeClass('up-button-hover');
      });
      $('#galleryUp').click(() =>{
        $('#navWrapper').css({
           'display': 'block',
        });
      });

      $('#selectUp').mouseover(() =>{
         cursor.addClass('up-button-hover');
      });
      $('#selectUp').mouseleave(() =>{
         cursor.removeClass('up-button-hover');
      });

   });
   