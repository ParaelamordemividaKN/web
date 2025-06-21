// Estrellas fijas
for (let i = 0; i < 250; i++) {
  const star = document.createElement('div');
  star.className = 'stars';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (Math.random() * 2 + 1) + 's';
  document.body.appendChild(star);
}

// Estrellas fugaces
function crearEstrellaFugaz() {
  const estrella = document.createElement('div');
  estrella.classList.add('shooting-star');

  const topPos = Math.random() * window.innerHeight * 0.8;
  const leftPos = Math.random() * window.innerWidth * 0.5;

  estrella.style.top = `${topPos}px`;
  estrella.style.left = `${leftPos}px`;

  const duracion = Math.random() * 0.7 + 1.0;
  estrella.style.animationDuration = `${duracion}s`;

  document.body.appendChild(estrella);
  setTimeout(() => estrella.remove(), duracion * 1000 + 200);
}

function lanzarEstrellasFugaces() {
  setInterval(() => {
    const cantidad = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < cantidad; i++) {
      const delay = Math.random() * 800;
      setTimeout(() => {
        crearEstrellaFugaz();
      }, delay);
    }
  }, Math.random() * 2000 + 1000);
}

lanzarEstrellasFugaces();
