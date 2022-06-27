const topLeft = document.querySelector(".top-left");
const topRight = document.querySelector(".top-right");
const bottomLeft = document.querySelector(".bottom-left");
const bottomRight = document.querySelector(".bottom-right");
const container = document.querySelector(".container");

const startBtn = document.getElementById("startBtn");
gameSequence = [];

function randomColor() {
  randomBtn = Math.floor(Math.random() * 4) + 1;
  gameSequence.push(randomBtn);

  return gameSequence;
}

function flashColor(arr) {
  for (i = 0; i < gameSequence.length; i++) {
    if (gameSequence[i] == 1) {
      topLeft.classList.add("top-left-active");
      setTimeout(() => {
        topLeft.classList.remove("top-left-active");
      }, 1000);
    } else if (gameSequence[i] == 2) {
      topRight.classList.add("top-right-active");
      setTimeout(() => {
        topRight.classList.remove("top-right-active");
      }, 1000);
    } else if (gameSequence[i] == 3) {
      bottomLeft.classList.add("bottom-left-active");
      setTimeout(() => {
        bottomLeft.classList.remove("bottom-left-active");
      }, 1000);
    } else {
      bottomRight.classList.add("bottom-right-active");
      setTimeout(() => {
        bottomRight.classList.remove("bottom-right-active");
      }, 1000);
    }
  }
}

startBtn.addEventListener("click", function () {
  randomColor();
  gameSequence.forEach(flashColor(gameSequence));

  console.log(gameSequence);
});
