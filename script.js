// =========================
// DARK MODE
// =========================

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = "☀️";
    }else{
        darkBtn.innerHTML = "🌙";
    }
});


// =========================
// TYPING EFFECT
// =========================

const textArray = [
    "Flutter Developer",
    "PHP Developer",
    "MySQL Developer",
    "UI/UX Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {

    const typingElement =
        document.getElementById("typing");

    if(charIndex < textArray[textIndex].length){

        typingElement.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(deleteEffect,1500);

    }
}

function deleteEffect(){

    const typingElement =
        document.getElementById("typing");

    if(charIndex > 0){

        typingElement.textContent =
        textArray[textIndex].substring(
        0,
        charIndex - 1
        );

        charIndex--;

        setTimeout(deleteEffect,50);

    }else{

        textIndex++;

        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();


// =========================
// PARTICLES JS
// =========================

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#00abf0"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3
        },
        move: {
            enable: true,
            speed: 2
        },
        line_linked: {
            enable: true,
            color: "#00abf0"
        }
    }
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    const nav =
    document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background =
        "rgba(0,0,0,0.8)";

    }else{

        nav.style.background =
        "rgba(0,0,0,0.2)";
    }
});