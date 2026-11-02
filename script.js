const body = document.body;
const btnTheme = document.getElementById("btn-theme");
const btnHamburger = document.querySelector(".fa-bars");

const applyTheme = (theme) => {
  body.classList.remove("light", "dark");
  body.classList.add(theme);
  btnTheme.classList.remove("fa-moon", "fa-sun");
  btnTheme.classList.add(theme === "dark" ? "fa-sun" : "fa-moon");
};

// Dark is the default unless the visitor has chosen light
applyTheme(localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark");

const isDark = () => body.classList.contains("dark");

const toggleTheme = () => {
  const theme = isDark() ? "light" : "dark";
  applyTheme(theme);
  localStorage.setItem("portfolio-theme", theme);
};

btnTheme.addEventListener("click", toggleTheme);

const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

btnHamburger.addEventListener("click", displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

document.addEventListener("scroll", scrollUp);

// Typing effect script
const textElement = document.getElementById("dynamic-text");
const phrases = [
  "software engineer.",
  "backend developer.",
  "problem solver.",
];
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (typing) {
    if (charIndex < currentPhrase.length) {
      textElement.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 2000); // To pause after typing is completed
    }
  } else {
    if (charIndex > 0) {
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length; // To move to the next phrase
      setTimeout(typeEffect, 500); // Pause before starting the next phrase
    }
  }
}

// Start the typing effect
typeEffect();

document.querySelectorAll(".timeline__item").forEach((item) => {
  item.addEventListener("click", () => {
    const description = item.querySelector(".timeline__description");
    description.classList.toggle("hidden"); // Toggle the hidden class
  });
});

function openTab(tabId, btn) {
  const allTabs = document.querySelectorAll('.tab-content');
  const allButtons = document.querySelectorAll('.tab-button');

  // Hide all tab contents
  allTabs.forEach(tab => tab.classList.remove('active'));

  // Deactivate all buttons
  allButtons.forEach(button => button.classList.remove('active'));

  // Show selected tab
  document.getElementById(tabId).classList.add('active');

  // Activate selected button
  btn.classList.add('active');
}
