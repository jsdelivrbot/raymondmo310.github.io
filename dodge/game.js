var player;
var enemy;
var isGameOver;

function setup() {
    isGameOver = false
    createCanvas(500,500);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/2, 0, 10, 30)
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
    
    if (enemy.overlap(player)) {
        isGameOver = true;
    }
    
    background(20,75,105);
    
    if (keyDown(DOWN_ARROW) && player.position.y > height-500) {
        player.position.y = player.position.y + 1;
    }
    
    if (keyDown(UP_ARROW) && player.position.y > height-500) {
        player.position.y = player.position.y - 1;
    }
    
    if (keyDown(RIGHT_ARROW) && player.position.x < width-25) {
        player.position.x = player.position.x + 5;
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > 25) {
        player.position.x = player.position.x - 5;
    }
        enemy.position.y = enemy.position.y + 7;
        
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(5, width-5);
        }
    
    drawSprites();
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2)
    text("Click anywhere to try again", width/2, 3*height/4)
    
}
}

function mouseClicked() {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-25;
    enemy.position.x = width/2
    enemy.position.y = 0
}