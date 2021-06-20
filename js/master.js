function toggleMenu(){
    var menuToggle= document.querySelector('.toggle')
    var navigation = document.querySelector('.nav__links')
     menuToggle.classList.toggle('active')
     navigation.classList.toggle('active')
 }
// slider about us
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//send-email
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}


//
document.addEventListener('DOMContentLoaded', () => {
  //  little hack to detect if the user is on ie 11
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode
  // get all the links with an ID that starts with 'sectionLink'
  const listOfLinks = document.querySelectorAll("a[href^='#sectionLink")
  // loop over all the links
  listOfLinks.forEach(function (link) {
    // listen for a click
    link.addEventListener('click', () => {
      // toggle highlight on and off when we click a link
      listOfLinks.forEach((link) => {
        if (link.classList.contains('highlighted')) {
          link.classList.remove('highlighted')
        }
      })
      link.classList.add('highlighted')
      // get the element where to scroll
      let ref = link.href.split('#sectionLink')
      ref = '#section' + ref[1]
      // ie 11 does not support smooth scroll, so we will simply scroll
      if (isIE11) {
        window.scrollTo(0, document.querySelector(ref).offsetTop)
      } else {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          // top gets the distance from the top of the page of our target element
          top: document.querySelector(ref).offsetTop,
        })
      }
    })
  })
})