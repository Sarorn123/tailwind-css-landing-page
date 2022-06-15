const navigation = document.getElementById("navigation");
const menu = document.getElementById("menu-icon");
const x = document.getElementById("x");
const overlay = document.getElementById("overlay");

menu.addEventListener("click" , () => {
    navigation.style.transform = "translateX(0)";
    overlay.style.display = "block";
    overlay.style.opacity = "0.5";
});

x.addEventListener("click" , () => {
    navigation.style.transform = "translateX(100%)";
    overlay.style.display = "none";
});

/// Reveal ///

window.addEventListener("scroll", reveal);

function reveal () {
    const reveals = document.querySelectorAll(".reveal");
    for(let i=0 ; i<reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;
        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

let counting = false;
const countSection  = document.getElementById("we-are-glint");
const elements  = document.querySelectorAll(".increase");


window.onscroll  = function(){
    if(window.scrollY >= countSection.offsetTop){
        if(!counting){
            elements.forEach((element) => startCount(element));
        }
        counting = true;
    }
}


function startCount(element){
    let goal = element.dataset.goal;
    let count = setInterval(() => {
        element.textContent++;
        if(element.textContent == goal){
            clearInterval(count);
        }
    }, 20);
}

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

