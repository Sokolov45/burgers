var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

// function showSlide(currentSlide) {
//     if (currentSlide > slides.length) {
//         currentSlide = 0;
//       }if else (currentSlide < 0) {
//           currentSlide = slides.length
//         }
//           slides[currentSlide].className = 'visible';
//           for (var i=0; i<=slides.length; i++){
//               slides[i].className = 'slide';
//             }
//         }
        
        function nextSlide() {
          // showSlides(currentSlide += 1);
          if (currentSlide > slides.length) {
            currentSlide == 0;
          }
// alert(slides.length);
          
          slides[currentSlide].className = 'slide';
          ++currentSlide;
          slides[currentSlide].className = 'slide visible';
          if (currentSlide == 4) {
            slides[currentSlide].className = 'slide';
            currentSlide = 0;
            slides[currentSlide].className = 'slide visible'
                       
          }
// alert(slides
          return currentSlide;
  
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function previosSlide() {
//   showSlides(currentSlide -= 1);  
// }


// element.removeEventListener(event, handler[, options]);