const estrellaContainer = document.querySelector(".estrella-container");
const btn = document.querySelector(".btn");

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

function crearEstrellas() {
  const guardar = [];
  range(10).forEach(() => {
    const top = Math.floor(Math.random() * 101);
    const left = Math.floor(Math.random() * 101);
    const estrella = document.createElement("div");
    estrella.innerText = "⭐️";
    estrella.classList.add("star");
    estrella.style.top = top + "%";
    estrella.style.left = left + "%";
    // Este código de abajo es para que no haya desvordamiento y no tener que usar overflow
    estrella.style.transform = `translate(${-left}%, ${top * -1}%)`;
    estrellaContainer.appendChild(estrella);
    guardar.push(estrella);
  });
  setTimeout(() => {
    guardar.forEach((star) => {
      star.remove();
    });
  }, 2000);
}

btn.addEventListener("click", crearEstrellas);
