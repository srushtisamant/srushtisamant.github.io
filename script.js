const body = document.body;
const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

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
  "student.",
  "developer.",
  "problem solver.",
  "coder.",
  "creative thinker.",
  "geek.",
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


function toggleDescription(cardElement) {
  cardElement.classList.toggle('expanded');
}

