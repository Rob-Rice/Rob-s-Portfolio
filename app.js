// =============== selectors =============== 
const arrow = document.querySelector('.down-arrow');
const goodbye = document.querySelector('.goodbye');
const date = document.querySelector('.date');
const currentScroll = window.pageYOffset;
let myIndex = 0;
let lastScroll = 0;

// =============== callbacks =============== 
carousel();

// =============== date at footer =============== 
date.innerHTML = new Date().getFullYear();

// =============== scroll events =============== 
window.addEventListener('scroll', () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll > 0) {
        arrow.style.opacity = 0;
        goodbye.classList.add('about');
    } else if (currentScroll === 0) {
        arrow.style.opacity = 1;
    } 

    
    lastScroll = currentScroll;
});

// =============== carousel =============== 
function carousel() {
    var i;
    var x = document.getElementsByClassName('slide');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 1300);    
  }