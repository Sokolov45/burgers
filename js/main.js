
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


// работа с формой-----------------------------------------------------
var myForm = document.querySelector('#myForm');
var laodButton = document.querySelector('#loadButton');

laodButton.addEventListener('click', event => {
  event.preventDefault();
  if (validateForm(myForm)) {
   var formData = new FormData(myForm);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData); 
    console.log('запрос отправлен');
    xhr.addEventListener('load', () => {
      debugger
      if(xhr.response.status){
        console.log("всё ок");
      }else{
        console.log('что-то не так');
      }
    });
  }else{
    console.log('не прошёл валидацию');
  }
});
// валидация
function validateForm(form) {
  let valid = true;
  if (!form.elements.name.checkValidity()) {
    valid = false;
  }
  if (!form.elements.phone.checkValidity()) {
    valid = false;
  }
  if (!form.elements.comment.checkValidity()) {
    valid = false;
  }
  if (!form.elements.email.checkValidity()) {
    valid = false;
  }
  return valid;
};



// xhr.timeout = 10000; // таймаут указывается в миллисекундах, т.е. 10 секунд
  // xhr.onload = function() {
  //   alert(`Загружено: ${xhr.status} ${xhr.response}`);
  // };
  
  // xhr.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
  //   alert(`Ошибка соединения`);
  // };