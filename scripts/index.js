const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

//efeito revelar
window.sr = ScrollReveal({reset: true});
sr.reveal('.header_h1',{duration: 3000 })

sr.reveal('.secondary-title',{duration: 3000 })

sr.reveal('.btn-primary',{
  rotate:{ x: 100, y: 100, z: 0},
  duration:1000,
})

sr.reveal('.icons',{
  rotate:{ x: 100, y: 100, z: 0},
  duration:3000,
})