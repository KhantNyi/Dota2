// ==== SHOW MENU ====
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ==== REMOVE MENU MOBILE ==== 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // link click and show menu disappear 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ==== CHANGE NAVBAR HEADER BACKGROUND ==== 
function scrollHeader() {
    const header = document.getElementById('header')
    // after scrolling 50 vh, scroll-header class is added to the header tag 
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ==== SWIPER JS FOR CHOOSE  
var swiper = new Swiper(".choose__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
});

// MIXITUP JS 
let mixerFeatured = mixitup('.roles__content', {
  selectors: {
      target: '.roles__card'
  },
  animation: {
    duration: 300
  }
});

// Link active featured
const linkFeatured = document.querySelectorAll('.roles__item')

function activeFeatured() {
  linkFeatured.forEach (l => l.classList.remove('active-roles'))
  this.classList.add('active-roles')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))

// SCROLL UP 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  //after scroll exceeds 350 vh, show-scroll class is added to a tag
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.remove.classList('show-scroll')
} 
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

          scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
          ?
          document.querySelector('.nav__menu a[href *=' + sectionId + ']').classList.add('active-link')
          :
          document.querySelector('.nav__menu a[href *=' + sectionId + ']').classList.remove('active-link')
  })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal('.home__title, .choose__container, .features__img, .roles__filters')

sr.reveal('.home__title')
sr.reveal('.home__subtitle', {delay: 500})
sr.reveal('.home__subtext', {delay: 600})
sr.reveal('.home__img', {delay: 800})
sr.reveal('.home__stat-data', {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal('.home__button', {delay: 1000, origin: 'bottom'})

sr.reveal('.heroes__group, .play__data', {origin: 'left'})
sr.reveal('.heroes__data, .play__img', {origin: 'right'})

sr.reveal('.features__card, .jugg', {interval: 200})

sr.reveal('.roles__card, .logos__content, .footer__content', {interval: 100})

// DARK MODE 
const themeToggler = document.querySelector('.themeToggler')

themeToggler.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode-colors')
  themeToggler.querySelector('span').classList.toggle('active')
})