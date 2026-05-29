const todosLosEmojis = document.querySelectorAll(".emoji");
const emojiWrapper = document.querySelector(".emojiWrapper");
const emojis = [
  "💨",
  "👀",
  "❤️",
  "💕",
  "🍄",
  "🍇",
  "🥵",
  "🍄",
  "🏖️",
  "🚴🏼‍♀️",
  "⛵️",
];

_.range(10).forEach((num) => {
  const div = document.createElement("div");
  div.classList.add("emoji");
  div.innerHTML = `${emojis[num]}`;
  div.style.animation = `lluvias ${_.random(2000, 4000)}ms infinite linear`;
  div.style.animationDelay = `${_.random(2000)}ms`;
  emojiWrapper.appendChild(div);
});
