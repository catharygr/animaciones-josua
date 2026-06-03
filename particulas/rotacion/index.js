const slider = document.querySelector("#slider");
const bar = document.querySelector(".bar");

slider.addEventListener("input", (event) => {
  const value = event.target.value;
  bar.style.setProperty("--rotacion", value + "deg");
});
