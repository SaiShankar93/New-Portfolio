//function for auto collapsing the nabar
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

/*
window.addEventListener('load', function() {
    var animatedElements = document.getElementsByClassName('animated-content-top');
    for (var i = 0; i < animatedElements.length; i++) {
      animatedElements[i].classList.add('animate');
    }
  });

window.addEventListener('load', function() {
    var animatedElements = document.getElementsByClassName('animated-content-left');
    for (var i = 0; i < animatedElements.length; i++) {
      animatedElements[i].classList.add('animate');
    }
  });

window.addEventListener('load', function() {
    var animatedElements = document.getElementsByClassName('animated-content-right');
    for (var i = 0; i < animatedElements.length; i++) {
      animatedElements[i].classList.add('animate');
    }
  });
    */
