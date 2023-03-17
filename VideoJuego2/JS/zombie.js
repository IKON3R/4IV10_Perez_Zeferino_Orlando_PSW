// Inicializar canvas y contexto
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

// Variables del juego
let playerX = canvas.width / 2;
let playerY = canvas.height - 50;
let playerSize = 50;
let zombieSize = 50;
let zombieSpeed = 0.5;
let zombieSpawnTime = 60;
let zombies = [];
let bullets = [];
let score = 0;
let gameover = false;
let bulletsCount = 30; // Cantidad inicial de balas
let reloading = false; // Indicador de si se está recargando
let reloadTime = 50; // Tiempo de recarga en frames
let reloadCounter = 0; // Contador para llevar el tiempo de recarga

// Eventos de teclado
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(event) {
	if (event.keyCode === 37) {
		leftPressed = true;
	} else if (event.keyCode === 39) {
		rightPressed = true;
	} else if (event.keyCode === 32) {
		spacePressed = true;
	} else if (event.keyCode === 82 && !reloading) { // Tecla "R" para recargar
		reloading = true;
		reloadCounter = 0;
	}
}

function keyUpHandler(event) {
	if (event.keyCode === 37) {
		leftPressed = false;
	} else if (event.keyCode === 39) {
		rightPressed = false;
	} else if (event.keyCode === 32) {
		spacePressed = false;
	}
}

// Dibujar jugador
function drawPlayer() {
	ctx.beginPath();
	ctx.rect(playerX, playerY, playerSize, playerSize);
	ctx.fillStyle = '#00ff00';
	ctx.fill();
	ctx.closePath();
}

// Dibujar zombies
function drawZombies() {
	for (let i = 0; i < zombies.length; i++) {
		ctx.beginPath();
		ctx.rect(zombies[i].x, zombies[i].y, zombieSize, zombieSize);
		ctx.fillStyle = '#ff0000';
		ctx.fill();
		ctx.closePath();
	}
}

// Dibujar balas
function drawBullets() {
	for (let i = 0; i < bullets.length; i++) {
		ctx.beginPath();
		ctx.rect(bullets[i].x, bullets[i].y, 5, 1);
		ctx.fillStyle = '#ffff00';
		ctx.fill();
		ctx.closePath();
	}
}

// Generar zombies
function spawnZombies() {
	if (zombieSpawnTime === 0) {
		let zombieX = Math.random() * (canvas.width - zombieSize);
		let zombieY = 0 - zombieSize;
		zombies.push({ x: zombieX, y: zombieY });
		zombieSpawnTime = 60;
	} else {
		zombieSpawnTime--;
	}
}

// Mover jugador
function movePlayer() {
	if (leftPressed && playerX > 0) {
		playerX -= 5;
	}
	if (rightPressed && playerX < canvas.width - playerSize) {
		playerX += 5;
	}
}

// Mover zombies
function moveZombies() {
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].y += zombieSpeed;
    }
}
    
    // Mover balas
    function moveBullets() {
        for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -= 10;
            if (bullets[i].y < 0) {
            bullets.splice(i, 1);
            }
        }
    }
    
    // Colisión de balas con zombies
    function bulletZombieCollision() {
        for (let i = 0; i < bullets.length; i++) {
            for (let j = 0; j < zombies.length; j++) {
                if (bullets[i].x < zombies[j].x + zombieSize && bullets[i].x + 5 > zombies[j].x && bullets[i].y < zombies[j].y + zombieSize && bullets[i].y + 10 > zombies[j].y) {
                bullets.splice(i, 1);
                zombies.splice(j, 1);
                score++;
                break;
                }
            }
        }
    }
    
    // Colisión de jugador con zombies
    function playerZombieCollision() {
        for (let i = 0; i < zombies.length; i++) {
            if (playerX < zombies[i].x + zombieSize && playerX + playerSize > zombies[i].x && playerY < zombies[i].y + zombieSize && playerY + playerSize > zombies[i].y) {
            gameover = true;
            break;
            }
        }
    }
    
    // Dibujar puntuación
    function drawScore() {
    ctx.font = '24px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(`Score: ${score}`, 10, 30);
    }
    
    // Dibujar pantalla de Game Over
    function drawGameOver() {
    ctx.font = '48px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
    }
    
    // Función de actualización de juego
    function update() {
        if (!gameover) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPlayer();
	    movePlayer();

	    spawnZombies();
	    drawZombies();
	    moveZombies();
		
		if (spacePressed && bulletsCount > 0) { // Verificar si el jugador tiene balas restantes
			bullets.push({ x: playerX + playerSize / 2, y: playerY });
			bulletsCount--;
		}

		drawBullets();
    	moveBullets();
    	bulletZombieCollision();

    	playerZombieCollision();
    	drawScore();

		if (reloading) {
			reloadCounter++;
			if (reloadCounter >= reloadTime) {
				bulletsCount = 30;
				reloading = false;
			}
			else{
				if(reloading = true){

				}
				else{
					if (spacePressed) {
						bullets.push({ x: playerX + playerSize / 2, y: playerY });
					}
				}
			}
		}
		// Dibujar cantidad de balas restantes
		ctx.font = '24px Arial';
		ctx.fillStyle = '#000';
		ctx.fillText(`Bullets: ${bulletsCount}`, 10, 60);

	    
	    drawBullets();
	    moveBullets();
	    bulletZombieCollision();

	    playerZombieCollision();
	    drawScore();

		

	    
        } 
        else{
	    drawGameOver();
        }
		requestAnimationFrame(update);
    }   

// Iniciar el juego
update();