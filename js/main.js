
var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function show(currentSlide) {

  for (var i=0; i < slides.length; i++){
    slides[i].className = 'slide';
  }
  slides[currentSlide].className = 'slide visible';
}

function nextSlide() {
  if (currentSlide == 4) {
    currentSlide = 0;
    show(currentSlide);
    return currentSlide;
  } else{
    ++currentSlide;
    show(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide == 0) {
    currentSlide = slides.length - 1;
    show(currentSlide);
    return currentSlide;
  }else{
    --currentSlide;
    show(currentSlide);
  }
}

show(currentSlide);


var t = document.getElementById('test');
t.addEventListener('click', function(e){
  e.preventDefault();
  nextSlide();
});


// аккордеон для меню-----------------------------------------------------------

// var listMenu = document.getElementsByClassName("menu__item");
// for (var i = 0; i < listMenu.length; i++) {
//   listMenu[i].addEventListener("click", accordeon);
// };

// function accordeon() {
//     for (var i=0; i < 3; i++){
//       if(this.classList.contains('menu__item--active') ) {
//         continue}else{
//           listMenu[i].classList.remove("menu__item--active");
//         };
//     };
//     this.classList.toggle("menu__item--active");
//   };


  // баг ios 
var listMenu = document.getElementsByClassName("menu__item");
for (var i = 0; i < listMenu.length; i++) {
  listMenu[i].addEventListener("click", function(){
    for (var i=0; i < 3; i++){
      if(this.classList.contains('menu__item--active') ) {
        continue}else{
          listMenu[i].classList.remove("menu__item--active");
        };
    };
    this.classList.toggle("menu__item--active");
});
} ;
// аккордеон для команды ----------------------------------------------------

var listTeam = document.getElementsByClassName("team-description__item");
for (var i = 0; i < listTeam.length; i++) {
  listTeam[i].addEventListener("click", function() {
    for (var i=0; i < 4; i++){
      if(this.classList.contains('team-description__item--active') ) {
        continue}else{
          listTeam[i].classList.remove("team-description__item--active");
        };
    };
    this.classList.toggle("team-description__item--active");
  });
};

// всплывашка состав бургера ----------------------------------------------------

var iconBurg = document.getElementById('icon-burger');
var compBurg = document.getElementById('composition');
iconBurg.addEventListener("click", function(){
    compBurg.classList.toggle("composition--visible");
});

// гамбургер------------------------------------------------------------

var hamburger = document.getElementById('hamburger');
var sectMenu = document.getElementById('hamburger-menu');
var hamburgerOpen = document.getElementById('hamburger-open');
var html = document.querySelector('html');

hamburger.addEventListener("click", function(){
    sectMenu.style.top = 0;
    html.style.overflowY = 'hidden';
});
hamburgerOpen.addEventListener("click", function(){
    sectMenu.style.top = 100 + 'rem';
    html.style.overflowY = 'auto';
});
