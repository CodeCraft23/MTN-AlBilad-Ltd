//Search Bar Reveal
const searchBtn = document.querySelector('#search-btn');
const headerSearch = document.querySelector('#header-search');
const downloadReport = document.getElementById('annual-report');

searchBtn.addEventListener('click', () => {
  headerSearch.classList.toggle('active');
});

//Hamburger Menu
const navMobile = document.querySelector('.header-navbar-mobile');
const hamburgerBtn = document.querySelector('#hamburger-btn');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('fa-times');
  navMobile.classList.toggle('active');
});


