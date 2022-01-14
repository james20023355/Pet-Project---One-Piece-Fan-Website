//<!------------------ START OF PAGE 1 ------------------------!>

// Slideshow | Slideshow | Slideshow | Slideshow | Slideshow | Slideshow | Slideshow | Slideshow | Slideshow | Slideshow |
 var slideIndex = 0;
 showSlides();
 
 function showSlides(){
 var i;
 var slide = document.getElementsByClassName('slides');
 for(i = 0; i < slide.length; i++){
     slide[i].style.display='none';
 }
 
 slideIndex++;
 if (slideIndex > slide.length) {
     slideIndex = 1;}
 slide[slideIndex-1].style.display='block';
 setTimeout(showSlides, 10000);

 }


// HeaderFP | HeaderFP |  HeaderFP | HeaderFP |  HeaderFP | HeaderFP |  HeaderFP | HeaderFP |  HeaderFP | HeaderFP |
 // variables
 // Cursor
 const cursor = document.querySelector('.cursor'); // Custom Cursor
 const navUl = document.querySelector('nav ul'); // Variable for Animation Reset
 const navLi = document.querySelectorAll('nav a'); // Cursor hover event
 const header = document.querySelectorAll('h2, h3'); // Cursor hover event
 const logo = document.querySelector('.logo'); // Cursor hover event
 const downbutton = document.querySelector('.down-button'); // Cursor hover event and Animation Reset
 const upbutton = document.querySelector('.up-button'); // Cursor hover event and Animation Reset
 
 let fanmade = document.getElementById('fanMade'); // Variable for Animation Reset
 let wtextanim = document.getElementById('wtext'); // Variable for Animation Reset
 let h2anim = document.querySelector('h2'); // Variable for Animation Reset
 let h3anim = document.querySelector('h3'); // Variable for Animation Reset
 let slideshowanim = document.getElementById('slideShowContainer'); // Variable for Animation Reset
 let crewSelect = document.getElementById('strawSelect'); // Variable for Animation Reset
 let listSelect = document.getElementById('listSelect'); // Variable for Animation Reset
 let gallerySelect = document.getElementById('gallerySelect'); // Variable for Animation Reset

 const viewPage = document.getElementById("ViewPage");




// CUSTOM CURSOR | CUSTOM CURSOR | CUSTOM CURSOR | CUSTOM CURSOR | CUSTOM CURSOR | CUSTOM CURSOR | CUSTOM CURSOR | CUSTOM CURSOR |
 window.addEventListener('mousemove', function(e){
    var x  = e.pageX;
    var y =  e.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
 });

// DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON | DOWN BUTTON |
 downbutton.addEventListener('mouseover', () => {
    cursor.classList.add('down-button-hover');
});
    
downbutton.addEventListener('mouseleave', () => {
    cursor.classList.remove('down-button-hover');
});

 // reset animations when clicking down-button
downbutton.addEventListener('click', () => {

    // fp1 items
    crewSelect.classList.add('selectBtn-hover');
    listSelect.classList.add('selectBtn-hover');
    gallerySelect.classList.add('selectBtn-hover');

    // headerfp items
    logo.style.color = "white";
    logo.style.transition = "color 1s ease";
   
    
    h2anim.classList.remove('h2-anim');
    h3anim.classList.remove('h3-anim');
    navUl.classList.remove('nav-anim');
    fanmade.classList.remove('fm-anim');
    slideshowanim.classList.remove('slideshow-anim');

    // Automatically hide
    setTimeout(() => {
        logo.style.color = "#080808";
        logo.style.transition = "color 1s ease";
    }, 1000);
    
    logo.addEventListener('mouseover', ()=> {
        logo.style.color = "white";
        logo.style.transition = "color 1s ease";
        
        setTimeout(() => {
            logo.style.color = "#080808";
            logo.style.transition = "color 1s ease";
        }, 1000);
    });
});

 


// UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |  UP BUTTON |
upbutton.addEventListener('mouseover', () => {
    cursor.classList.add('up-button-hover');
});

upbutton.addEventListener('mouseleave', () => {
    cursor.classList.remove('up-button-hover');
});


// reset animations when clicking up-button
upbutton.addEventListener('click', () => {
     // fp1 items
    crewSelect.classList.remove('selectBtn-hover');
    listSelect.classList.remove('selectBtn-hover');
    gallerySelect.classList.remove('selectBtn-hover');

     // headerfp items
    logo.style.color = '#af9e70';
    logo.classList.add('logo-anim');
    h2anim.classList.add('h2-anim');
    h3anim.classList.add('h3-anim');
    navUl.classList.add('nav-anim');
    fanmade.classList.add('fm-anim');
    slideshowanim.classList.add('slideshow-anim');
});

// Navigation Bar Effects | Navigation Bar Effects | Navigation Bar Effects | Navigation Bar Effects | Navigation Bar Effects |
 navLi.forEach(link => {
    link.addEventListener('mouseover', () =>  {
        cursor.classList.add('nav-hover');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('nav-hover');
    });
 });


//  WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE | WEBTITLE |
 header.forEach(heading =>{
    heading.addEventListener('mouseover', () => { 
        cursor.classList.add('heading-hover');
     });
     heading.addEventListener('mouseleave', () => { 
        cursor.classList.remove('heading-hover');
     });

 });
 



 // LOGO |  LOGO | LOGO |  LOGO | LOGO |  LOGO | LOGO |  LOGO | LOGO |  LOGO | LOGO |  LOGO | LOGO |  LOGO | LOGO |  LOGO |
 
 logo.addEventListener('mouseover', ()=> {
    cursor.classList.add('lg-hover');
 });

 logo.addEventListener('mouseleave', () => {
    cursor.classList.remove('lg-hover');
 });





 // SELECT SECTION | SELECT SECTION | SELECT SECTION | SELECT SECTION | SELECT SECTION | SELECT SECTION |  SELECT SECTION | SELECT SECTION | SELECT SECTION | SELECT SECTION | SELECT SECTION | SELECT SECTION |

const crewBtn = document.getElementById('strawSelect');
const listBtn = document.getElementById('listSelect');
const galleryBtn = document.getElementById('gallerySelect');

const crewDisplay = document.getElementById('StrawHat');
const listDisplay = document.getElementById('Yonko');
const galleryDisplay = document.getElementById('Moments');
var gold = "#af9e70";
var darkergrey ="#0e0e0e";
// Variables for titles 
let crewtitleLoad = document.getElementById('strawh4');
let listtitleLoad = document.getElementById('listh4');
let gallerytitleLoad = document.getElementById('momentsh4');
// Variables for subtitles
let crewsubtitleLoad = document.getElementById('strawSubtitle');
let listsubtitleLoad = document.getElementById('listSubtitle');
let gallerysubtitleLoad = document.getElementById('momentsSubtitle');
// Variables for h5's
let crewh5Load = document.getElementById('strawh5');
let listh5Load = document.getElementById('listh5');
let galleryh5Load = document.getElementById('momentsh5');
// Variables for Paragraphs
let crewPLoad = document.getElementById('strawP');
let listPLoad = document.getElementById('yonkoP');
let galleryPLoad = document.getElementById('momentsP');
// Variables for Images
let crewimgLoad = document.getElementById('strawHatImgContainerFP');
let listimgLoad = document.getElementById('listImgContainerFP');
let galleryimgLoad = document.getElementById('galleryImgContainerFP');


upbutton.addEventListener('click', () => {
    crewDisplay.style.display = "none";
    listDisplay.style.display = "none";
    galleryDisplay.style.display = "none";
});


// The Crew | The Crew | The Crew | The Crew | The Crew | The Crew | The Crew | The Crew |  The Crew | The Crew | 
    
crewBtn.addEventListener('click', () => {
    // Display proper block;
    crewDisplay.style.display = "block";
    crewBtn.style.backgroundColor = gold;
    crewBtn.style.transition = "background-color 0.2s ease";

    // Get rid of Other Displays
    listDisplay.style.display ="none";
    galleryDisplay.style.display = "none";

    // Unhighlight colours 
    listBtn.style.background = darkergrey;
    galleryBtn.style.background = darkergrey;

    // Add animations
    crewPLoad.classList.add('slct-PLoad');
    crewh5Load.classList.add('slct-H5Load');
    crewimgLoad.classList.add('slct-imgLoad');
    crewtitleLoad.classList.add('slct-titleLoad');
    crewsubtitleLoad.classList.add('slct-subtitleLoad');

 });

  // Cursor Effect on The Crew Button

    crewSelect.addEventListener('mouseover', ()=> {
    cursor.classList.add('selectBtn-cursor');
    crewBtn.style.backgroundColor = gold;
    crewBtn.style.transition = "background-color 0.2s ease";

    listBtn.style.background = darkergrey;
    galleryBtn.style.background = darkergrey;
 });

    crewSelect.addEventListener('mouseleave', () => {
    cursor.classList.remove('selectBtn-cursor');
 });
 
// Cursor Effect on Image
crewimgLoad.addEventListener('mouseover', () => {
    cursor.classList.add('slct-imgHover');
    viewPage.style.display = "block";
});

crewimgLoad.addEventListener('mouseleave', () => {
    cursor.classList.remove('slct-imgHover');
    viewPage.style.display = "none";
});



 // The List | The List | The List | The List | The List | The List | The List | The List | The List | The List |
 listBtn.addEventListener('click', () => {
    listDisplay.style.display ="block";
    listBtn.style.backgroundColor = gold;
    listBtn.style.transition = "background-color 0.2s ease";
    // Get rid of Other Displays
    crewDisplay.style.display ="none";
    galleryDisplay.style.display = "none";
    

     // Unhighlight colours 
     crewBtn.style.background = darkergrey;
     galleryBtn.style.background = darkergrey;

     // Add Animations 
     listPLoad.classList.add('slct-PLoad');
     listh5Load.classList.add('slct-H5Load');
     listimgLoad.classList.add('slct-imgLoad');
     listtitleLoad.classList.add('slct-titleLoad');
     listsubtitleLoad.classList.add('slct-subtitleLoad');
 });


 
  // Cursor Effect on The List Button
listSelect.addEventListener('mouseover', ()=> {
    cursor.classList.add('selectBtn-cursor');
    listBtn.style.backgroundColor = gold;
    listBtn.style.transition = "background-color 0.2s ease";

    crewBtn.style.background = darkergrey;
    galleryBtn.style.background = darkergrey;
 });

 listSelect.addEventListener('mouseleave', ()=> {
    cursor.classList.remove('selectBtn-cursor');
 });


 // Cursor Effect on Image
 listimgLoad.addEventListener('mouseover', () => {
    cursor.classList.add('slct-imgHover');
    viewPage.style.display = "block";
});

listimgLoad.addEventListener('mouseleave', () => {
    cursor.classList.remove('slct-imgHover');
    viewPage.style.display = "none";
});




 // Gallery | Gallery | Gallery | Gallery | Gallery | Gallery | Gallery | Gallery | Gallery | Gallery | Gallery | Gallery |
 galleryBtn.addEventListener('click', () => {
    galleryDisplay.style.display = "block";
    galleryBtn.style.backgroundColor = gold;
    galleryBtn.style.transition = "background-color 0.2s ease";

    // Get rid of Other Displays
    crewDisplay.style.display ="none";
    listDisplay.style.display = "none";

     // Unhighlight colours 
     crewBtn.style.background = darkergrey;
     listBtn.style.background = darkergrey;

     // Add Animations 
     galleryPLoad.classList.add('slct-PLoad');
     galleryh5Load.classList.add('slct-H5Load');
     galleryimgLoad.classList.add('slct-imgLoad');
     gallerytitleLoad.classList.add('slct-titleLoad');
     gallerysubtitleLoad.classList.add('slct-subtitleLoad');
 });

 // Cursor Effect on Gallery Button
gallerySelect.addEventListener('mouseover', ()=> {
    cursor.classList.add('selectBtn-cursor');
    galleryBtn.style.backgroundColor = gold;
    galleryBtn.style.transition = "background-color 0.2s ease";
    crewBtn.style.background = darkergrey;
    listBtn.style.background = darkergrey;
 });

 gallerySelect.addEventListener('mouseleave', ()=> {
    cursor.classList.remove('selectBtn-cursor');
 });


 // Cursor Effect on Image
 galleryimgLoad.addEventListener('mouseover', () => {
    cursor.classList.add('slct-imgHover');
    viewPage.style.display = "block";
});

galleryimgLoad.addEventListener('mouseleave', () => {
    cursor.classList.remove('slct-imgHover');
    viewPage.style.display = "none";
});







//<!------------------ END OF PAGE 1 ------------------------!>