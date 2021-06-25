// fullPage JS settings

new fullpage("#fullpage", {
  autoScrolling: true,
  menu: 'menu',
  navigation: true,
  anchors: ['inicio', 'libros', 'fotos', 'video'],
  navigationTooltips: ['inicio', 'libro 1', 'libro 2', 'video', 'fotos'],
  showActiveTooltip: false,
  scrollingSpeed: 700,
  //controlArrows: false,
  //slidesNavigation: true,
  //verticalCentered: true, //Alineación vertical contenidos de cada sección
});

//Full menu clip-path
const menu = document.getElementById("btn-open-menu");
menu.addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("active");
});


// Title animation


document.addEventListener('DOMContentLoaded', () => {
  function animateSgv(id, delay, delayIncrement) {
    const logo = document.getElementById(id);
    const logoPaths = document.querySelectorAll(`#${id} path`);
    delay = delay;
    for (let i = 0; i < logoPaths.length; i++) {
      //console.log(logoPaths[i].getTotalLength());
      logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
      logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
      logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
      delay += delayIncrement;
      console.log(delay)
    }
    logo.style.animation = `fill 1s ease forwards ${delay}s`;
  }
  // Set the id of SVG, delay time in seconds to start animation and delay between each animation
  animateSgv('logo', 0, 0.085)
}, false);



// ScrollReveal settings

ScrollReveal().reveal('.header-text', {
  delay: 1500
});