const hamburger = document.querySelector(".hamburger");
const lineTop = document.querySelector(".line-top");
const lineCenter = document.querySelector(".line-center");
const lineBottom = document.querySelector(".line-bottom");
const menu = document.querySelector(".menu");
const copyright = document.querySelector(".copyright");

// Toggle menu with hamburger menu.

const toggleMenu = () => {
  lineTop.classList.toggle("line1");
  lineCenter.classList.toggle("line2");
  lineBottom.classList.toggle("line3");
  !menu.classList.contains("show-menu")
    ? menu.classList.add("show-menu")
    : menu.classList.remove("show-menu");
};

// Close menu when clicking outside the menu, and removing the X from the hamburger.

document.addEventListener("click", function (e) {
  if (e.target.closest(".menu" && ".navbar")) {
    return;
  } else {
    menu.classList.remove("show-menu");
    lineTop.classList.remove("line1");
    lineCenter.classList.remove("line2");
    lineBottom.classList.remove("line3");
  }
});

// Dynamic date for copyright

const year = new Date().getFullYear();
copyright.innerHTML = `&copy ${year} web-utvikling.no`;

// Suggestions for further development below:

// Connect to an open weather Api for the latest weather reports. Display temperature and snow crystals depending on the weather.

// Connect to TikTok Api and fetch data

// Generate html from data, and display videos on the website somewhere.
