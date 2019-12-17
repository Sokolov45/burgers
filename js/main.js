// ==========================слайдер =======================================================

var slides = document.getElementsByClassName("slide");
var currentSlide = 0;
function show(currentSlide) {
  for (var i=0; i < slides.length; i++){
    slides[i].className = 'slide';
  }
  slides[currentSlide].className = 'slide visible';
};

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

var sectionMenu = document.querySelector('.menu');
var titleMenu = document.querySelector('.title--menu');
sectionMenu.addEventListener("click", function(e) {
  if (e.target === sectionMenu || e.target === titleMenu) {
  for (var i = 0; i < listMenu.length; i++) {
    listMenu[i].classList.remove("menu__item--active");
    };
  };
});


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

  var team = document.querySelector('.team');
  var teamList = document.querySelector('.team-description__list');
  var teamDescript = document.querySelector('.team-description');
  team.addEventListener("click", function(e) {
    if (e.target === team || e.target === teamDescript) {
      for (var i = 0; i < listTeam.length; i++) {
        listTeam[i].classList.remove("team-description__item--active");
          };
    };
  });

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


// форма
var myForm = document.querySelector('#myForm');
var laodButton = document.querySelector('#loadButton');
var overlayElement = document.querySelector(".overlay");
var orerlayMessage = document.querySelector('.overlay__content');
var closeElement = overlayElement.querySelector(".close");

closeElement.addEventListener("click", function(e) {
  e.preventDefault();
  overlayElement.style.display = "none";
});

// эта штука для того чтобы не закрывалось когда на контент кликаешь
overlayElement.addEventListener("click", function(e) {
  if (e.target === overlayElement) {
    closeElement.click();
  }
});

myForm.addEventListener('submit', event => {
  event.preventDefault();
  var formData = new FormData(myForm);
  // formData.append("name", myForm.elements.name.value);
  // formData.append("phone", myForm.elements.phone.value);
  // formData.append("comment", myForm.elements.comment.value);
  formData.append("to", 'mail@mail.com');
  
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
  xhr.send(formData); 
  
  xhr.addEventListener('load', () => {
    if(xhr.status){
      overlayElement.style.display = "flex";

      console.log(xhr.status);
      console.log(typeof xhr.response );
      orerlayMessage.innerHTML = xhr.response.message;
    }else{
      alert( xhr.status + ': ' + xhr.statusText )
    }
  });
  });


  // модалка у отзывов---------------------------------------------------------------------------
  var modalReviewBtn = document.querySelectorAll(".review__btn");
  var modalReviewDiv = document.querySelector(".reviews__modal");
  var modalReviewBtn480 = document.querySelectorAll(".review__btn-480");
  for (let i = 0; i < modalReviewBtn.length; i++) {
        
    modalReviewBtn[i].addEventListener("click", function(e) {
      e.preventDefault();
      modalReviewDiv.style.display = "flex";
      var closeReview = document.querySelector(".revies-close");
      closeReview.addEventListener("click", function(e) {
        e.preventDefault();
        modalReviewDiv.style.display = "none";
    });
    modalReviewDiv.addEventListener("click", function(e) {
        if (e.target === modalReviewDiv) {
          closeElement.click();
        }
      });
  });

  modalReviewBtn480[i].addEventListener("click", function(e) {
    e.preventDefault();
    modalReviewDiv.style.display = "flex";
    var closeReview = document.querySelector(".revies-close");
    closeReview.addEventListener("click", function(e) {
      e.preventDefault();
      modalReviewDiv.style.display = "none";
  });
  modalReviewDiv.addEventListener("click", function(e) {
      if (e.target === modalReviewDiv) {
        closeElement.click();
      }
    });
});

};
