const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu (event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('#nav');
    nav.classList.toggle("active");
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// RESULTADO

function horario () {
  const resultado = document.querySelector('.apresentacao__horario__resultado')
  const data = new Date();
  const diaSemana = data.getDay();
  const horaDia = data.getHours();
  
  let diaSemanaTexto;
  
  console.log(diaSemana);
  
  //Segunda
  if (diaSemana === 1 && horaDia >= 7 && horaDia <= 17) {
    resultado.innerHTML = ''
    const p = document.createElement('p')
    p.classList.add('resultado-on')
    p.innerHTML = 'Loja Aberta • 07:00 às 18:00';
    resultado.appendChild(p)
  }
  
  //Terca
  else if ( diaSemana === 2 && horaDia >= 7 && horaDia <= 17) {
    resultado.innerHTML = ''
    const p = document.createElement('p')
    p.classList.add('resultado-on')
    p.innerHTML = 'Loja Aberta • 07:00 às 18:00';
    resultado.appendChild(p)
  }
  
  // Quarta 
  else if (diaSemana === 3 && horaDia >= 7 && horaDia <= 22) {
    resultado.innerHTML = ''
    const p = document.createElement('p')
    p.classList.add('resultado-on')
    p.innerHTML = 'Loja Aberta • 07:00 às 18:00';
    resultado.appendChild(p)
  }
  
  // Quinta
  else if (diaSemana === 4 && horaDia >=7 && horaDia <= 17) {
    const p = document.createElement('p')
    p.classList.add('resultado-on')
    p.innerHTML = 'Loja Aberta • 07:00 às 18:00';
    resultado.appendChild(p)
  }
  
  // Sexta
  else if (diaSemana === 5 && horaDia >= 7 && horaDia <= 17) {
    const p = document.createElement('p')
    p.classList.add('resultado-on')
    p.innerHTML = 'Loja Aberta • 07:00 às 18:00';
    resultado.appendChild(p)
  }

  // Sabado
  else if (diaSemana === 6 && horaDia >= 7 && horaDia <= 11) {
    const p = document.createElement('p')
    p.classList.add('resultado-on')
    p.innerHTML = 'Loja Aberta • 07:00 às 12:00';
    resultado.appendChild(p)
  }

  // Domingo

  else {
    const p = document.createElement('p')
    p.classList.add('resultado-off')
    p.innerHTML = 'Horario de funcionameto • 07:00 às 18:00'
    resultado.appendChild(p)
  }

}

horario()

// CARROSEL
const carrossel = document.querySelector('.carrossel');
const slides = carrossel.querySelectorAll('.slide');
const btnAnterior = document.querySelector('.carrossel-anterior');
const btnProximo = document.querySelector('.carrossel-proximo');
let slideAtual = 0;

function mostrarSlide() {
  slides.forEach((slide, index) => {
    if (index === slideAtual) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function slideAnterior() {
  slideAtual--;
  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }
  mostrarSlide();
}

function slideProximo() {
  slideAtual++;
  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }
  mostrarSlide();
}

mostrarSlide();

btnAnterior.addEventListener('click', slideAnterior);
btnProximo.addEventListener('click', slideProximo);

setInterval(slideProximo,6000);
