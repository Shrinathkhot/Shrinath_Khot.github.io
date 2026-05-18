// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.display = "none";

  }, 1200);

});

// TYPING EFFECT

const textArray = [
  "Data Analyst",
  "Power BI Developer",
  "Machine Learning Enthusiast",
  "AI Explorer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === textArray.length){
    count = 0;
  }

  currentText = textArray[count];

  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if(letter.length === currentText.length){

    count++;
    index = 0;

    setTimeout(type, 1500);

  }else{

    setTimeout(type, 90);

  }

})();

// NAVBAR SCROLL

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }else{

    navbar.classList.remove("scrolled");

  }

});

// THEME TOGGLE

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  const icon = toggleBtn.querySelector("i");

  if(document.body.classList.contains("light-mode")){

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  }else{

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

  }

});

// PREMIUM CURSOR

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {

  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;

});

function animateRing(){

  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;

  ring.style.left = `${ringX}px`;
  ring.style.top = `${ringY}px`;

  requestAnimationFrame(animateRing);

}

animateRing();

// HOVER EFFECT

const hoverItems = document.querySelectorAll(
  "a, button, .project-card, .skill-card, .stat-card"
);

hoverItems.forEach(item => {

  item.addEventListener("mouseenter", () => {

    ring.classList.add("cursor-hover");

  });

  item.addEventListener("mouseleave", () => {

    ring.classList.remove("cursor-hover");

  });

});