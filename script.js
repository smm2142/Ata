const box = document.getElementById("box");
const cards = document.getElementById("cards");
const instruction = document.getElementById("instruction");

box.addEventListener("click", () => {
  box.style.transform = "scale(0.9) rotate(10deg)";
  setTimeout(() => {
    box.style.display = "none";
    instruction.style.display = "none";
    cards.style.display = "flex";
  }, 500);
});
