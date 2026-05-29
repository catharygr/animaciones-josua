const todosLosEmojis = document.querySelectorAll(".emoji");
console.log(todosLosEmojis);

todosLosEmojis.forEach((emoji) => {
  emoji.style.animation = `lluvias ${_.random(2000, 4000)}ms infinite`;
  emoji.style.animationDelay = `${_.random(2000)}ms`;
});
