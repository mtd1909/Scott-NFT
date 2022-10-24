
function mousemove() {
  // Add event listener
  document.addEventListener('mousemove', parallax);
  const elem = document.querySelector('#parallax');
  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${70 - (_mouseX - _w) * 0.02}% ${70 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${30 - (_mouseX - _w) * 0.06}% ${30 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = x;
  }

} mousemove();

// slide collection
$('.wrap__collections1').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  dots: false,
  items: 5,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  autoplayHoverPause: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('.wrap__collections2').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  dots: false,
  rtl: true,
  items: 5,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  autoplayHoverPause: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

//blog
$('.wrap__blog').owlCarousel({
  loop: false,
  margin: 25,
  nav: true,
  dots: true,
  items: 3,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
  }
})

/* Change Color */
$('.setting').click(function() {
  $('.change__color').toggleClass('active')
})
$('.btn__orange').click(function() {
  $('.btn__orange').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('orange')
  $('body').removeClass('yellow indigo purple blue cyan red pink green teal')
})
$('.btn__yellow').click(function() {
  $('.btn__yellow').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('yellow')
  $('body').removeClass('orange indigo purple blue cyan red pink green teal')
})
$('.btn__indigo').click(function() {
  $('.btn__indigo').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('indigo')
  $('body').removeClass('orange yellow purple blue cyan red pink green teal')
})
$('.btn__purple').click(function() {
  $('.btn__purple').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('purple')
  $('body').removeClass('orange yellow indigo blue cyan red pink green teal')
})
$('.btn__blue').click(function() {
  $('.btn__blue').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('blue')
  $('body').removeClass('orange yellow indigo purple cyan red pink green teal')
})
$('.btn__cyan').click(function() {
  $('.btn__cyan').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('cyan')
  $('body').removeClass('orange yellow indigo purple blue red pink green teal')
})
$('.btn__red').click(function() {
  $('.btn__red').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('red')
  $('body').removeClass('orange yellow indigo purple blue cyan pink green teal')
})
$('.btn__pink').click(function() {
  $('.btn__pink').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('pink')
  $('body').removeClass('orange yellow indigo purple blue cyan red green teal')
})
$('.btn__green').click(function() {
  $('.btn__green').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('green')
  $('body').removeClass('orange yellow indigo purple blue cyan red pink teal')
})
$('.btn__teal').click(function() {
  $('.btn__teal').addClass('active')
  $('.switch').not(this).removeClass('active')
  $('body').addClass('teal')
  $('body').removeClass('orange yellow indigo purple blue cyan red pink green')
})



$('.item__content-color').click(function() {
  $(this).addClass('active')
  $('.btn__orange').not(this).removeClass('active')
  $('.item__content-color').not(this).removeClass('active')
})
$('.item__content-color.purple').click(function() {
  $('body').addClass('purple')
  $('body').removeClass('blue green yellow orange')
})
$('.item__content-color.blue').click(function() {
  $('body').addClass('blue')
  $('body').removeClass('purple green yellow orange')
})
$('.item__content-color.green').click(function() {
  $('body').addClass('green')
  $('body').removeClass('blue purple yellow orange')
})
$('.item__content-color.yellow').click(function() {
  $('body').addClass('yellow')
  $('body').removeClass('blue green purple orange')
})
$('.item__content-color.orange').click(function() {
  $('body').addClass('orange')
  $('body').removeClass('blue green yellow purple')
})

var coll = document.getElementsByClassName('faq__col');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    } 
  });
}

// Sticky header
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Vanilla Menu //
function functionScroll() {
  var section = document.querySelectorAll('.section'),
    sections = {},
    i = 0;
  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });
  let header = document.querySelector('.header');
  let height = header.offsetHeight;
  for (i in sections) {
    if (sections[i] <= window.pageYOffset + height) {
      const active = document.querySelector('.active');
      if (active) {
        active.classList.remove('active');
      }
      if (document.querySelector('a[href*=' + i + ']')) {
        document.querySelector('a[href*=' + i + ']').classList.add('active');
      }
    }
  }
}
window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);


$( '.menu__items-link' ).on( 'click', function(e){
  $( '.menu__items-link' ).removeClass( 'active' );
  $( this ).addClass( 'active' );
  var href = $(this).attr( 'href' );
  $( 'html, body' ).animate({
    scrollTop: $( href ).offset().top
  }, 1000 );
  e.preventDefault();
});

$( '.header__logo' ).on( 'click', function(e){
  var href = $(this).attr( 'href' );
  $( 'html, body' ).animate({
    scrollTop: $( href ).offset().top
  }, 1000 );
  e.preventDefault();
});



