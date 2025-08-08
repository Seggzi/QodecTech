const textArray = [
    "Website Programmer",
    "Creative Developer",
    "UI/UX Enthusiast"
];

let typingText = document.getElementById("typingText");
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    currentText = textArray[textIndex];
    let displayText = currentText.substring(0, charIndex);
    typingText.textContent = displayText;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

const menuBtn = document.getElementById("menu-btn");
const navOverlay = document.getElementById("nav-overlay");
const body = document.body;

menuBtn.addEventListener("click", () => {
  body.classList.toggle("nav-open");
});
