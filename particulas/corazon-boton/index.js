const particleButton = document.querySelector(".particleButton");

function range(inicio, final = false) {
  const arr = [];

  if (!final) {
    final = inicio + 1;
    inicio = 1;
  }

  for (let i = inicio; i < final; i++) {
    arr.push(i);
  }
  return arr;
}
particleButton.addEventListener("click", crearParticulas);

function crearParticulas() {
  const todasParticulas = [];
  const magnitudes = 48;

  range(5).forEach(() => {
    const particula = document.createElement("div");
    particula.classList.add("particula");
    const x = _.random(-magnitudes, magnitudes);
    const y = _.random(-magnitudes, magnitudes);
    particula.style.transform = `translate(${x}px, ${y}px)`;
    // particula.style.setProperty("--fade-duration", FASE_DURACION + "ms");
    particleButton.appendChild(particula);
    todasParticulas.push(particula);
  });

  window.setTimeout(() => {
    todasParticulas.forEach((particula) => particula.remove());
  }, 2000);
}
