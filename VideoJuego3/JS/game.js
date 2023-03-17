const container = document.getElementById("container");
const balloons = document.getElementById("balloons");
const startBtn = document.getElementById("startBtn");

let score = 0;
let gameOver = false;

// Añade globos al contenedor
function addBalloons() {
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.addEventListener("click", function() {
      if (!gameOver) {
        this.style.backgroundColor = "white";
        this.style.pointerEvents = "none";
        score++;
        checkGameOver();
      }
    });
    balloons.appendChild(balloon);
  }
}

// Inicia el juego
function startGame() {
  addBalloons();
  startBtn.style.display = "none";
  setTimeout(function() {
    gameOver = true;
    alert("¡Tiempo acabado! Tu puntuación es: " + score);
  }, 30000);
}

// Comprueba si el juego ha terminado
function checkGameOver() {
  if (score === 30) {
    gameOver = true;
    alert("¡Felicidades! Has explotado todos los globos.");
  }
}

startBtn.addEventListener("click", startGame);
