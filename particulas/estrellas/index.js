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
  range(10).forEach(() => {
    const estrella = document.createElement("div");
    estrella.innerText = "⭐️";
    estrella.classList.add("star");

    estrellaContainer.appendChild(estrella);
  });
}

btn.addEventListener("click", crearEstrellas);
