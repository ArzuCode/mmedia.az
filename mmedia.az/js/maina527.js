$('document').ready(function() {

    // projects carousel 
    var owl = $('.projects-carousel');
    owl.children().each( function( index ) {
        $(this).attr('data-position', index); 
    });

    $('.projects-carousel').owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navSpeed: 300,
        smartSpeed: 300,
        dots: false,
        navContainer: '.custom-navs',
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            768: {
                items: 1.5,
                margin: 20,
            },
            1000: {
                items: 2.5, 
                margin: 50,
            },
        },
    });

    // stop autoplay and start
    $('.owl-nav').on('click', function () {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    });

    $('.custom-navs').on('click', function () {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    });

    // next and prev items click
    $(document).on('click', '.owl-item>div', function() {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
        owl.trigger('to.owl.carousel', [$(this).data('position'), 300] );
    });
});


// when click change lang
document.getElementsByClassName('change-lang')[0].addEventListener("click", function myFunction() {
    let langList = document.querySelector('.change-lang-wrap .lang-list');
    let compStyles = window.getComputedStyle(langList).getPropertyValue('right');
    document.getElementsByClassName('change-lang')[0].classList.toggle('active');
    if (compStyles === "0px") {
        langList.style.opacity = "1";
        langList.style.right = "117px";
    } else {
        langList.style.opacity = "0";
        langList.style.right = "0px";
    }
});





// change dark or light mood
let darkMode = localStorage.getItem('darkMode');
let toggleSwitch = document.querySelector('.change-mood');

if(darkMode === null){
    localStorage.setItem('darkMode',false)
}

let dark = ()=>{
    if(darkMode==="true"){
        document.querySelector('body').classList.add('dark');
        toggleSwitch.classList.add('dark-mood');
    }
}

dark();

toggleSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode==="false"){
        localStorage.setItem('darkMode',true);
        toggleSwitch.classList.remove('dark-mood');
        document.querySelector('body').classList.add('dark');
    }else{
        localStorage.setItem('darkMode',false);
        document.querySelector('body').classList.remove('dark');
        toggleSwitch.classList.add('dark-mood');
    }
});


// fixed header
window.onscroll = function() {stickyHeader()};
let header = document.getElementsByTagName('header')[0];
function stickyHeader() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}


// active page 
$('.myMenu .nav-link').each(function () {
   var location = window.location.href; 
   var link = this.href; 
    if(location == link) {              
      $(this).parent().addClass('active');  
    }
});

$('footer .footer-list a').each(function () {
   var location = window.location.href; 
   var link = this.href; 
    if(location == link) {              
      $(this).parent().addClass('active');  
    }
});


// fancybox
$('.highslide').fancybox({
    loop : true
});

$('.highslide').attr('data-fancybox','gallery');
    

// hamburger menu 
$('.menu-wrapper').click(function(e) {
    e.stopPropagation();
    $('header #myMenu').show();
    $('header #myMenu .navbar-nav').animate({left: '0'}, 300, 'linear');
    $('body').css('overflow-y', 'hidden');
});

$('header .close-menu').click(function(e) {
    e.stopPropagation();
    $('body').css('overflow-y', 'visible');
    $('header #myMenu .navbar-nav').animate({left: '-100%'}, 300, 'linear');
    setTimeout(function() {
        $('header #myMenu').hide();
    }, 200);
});

$('header #myMenu .navbar-nav').click(function(e) {
    e.stopPropagation();
});


// when click outside
$('body').click(function() {
    $('body').css('overflow-y', 'visible');
    $('header #myMenu .navbar-nav').animate({left: '-100%'}, 300, 'linear');
    setTimeout(function() {
        $('header #myMenu').hide();
    }, 200);
});   
    
    
// Scroll düyməsini seçirik
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Səhifə scroll edildikdə düyməni göstər
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) { 
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Düyməyə klik edildikdə səhifəni yuxarı qaytar
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    