function fixVelocity () {
  /*
    Parameters: none
    Returns: None, but modifies the global varaiable for the player velocity.
    Purpose: To make sure the player doesn't leave the screen.
  */
  // checks to see if the player would leave the window and adjust accordingly
  if ((player.center[1]+player.yVelocity) < 0) {
    player.yVelocity = 0;
  }
  if ((player.center[1]+player.yVelocity) > canvas.height){
    player.yVelocity = 0;
  }
  if ((player.center[0]+player.xVelocity) < 0) {
    player.xVelocity = 0;
  }
  if ((player.center[0]+player.xVelocity) > canvas.width){
    player.xVelocity = 0;
  }
}

function myKeyDown (event) {
  /*
    Parameters: event object, which contains information about the event
      that triggered the event listener.
    Returns: None, but modifies global variables which track response to event.
    Purpose: Make the animation respond to keys being pressed.
  */
  // One of the attributes of the event object is 'which,' contains the key
  //   that was pressed to trigger the event listener.
  keyCodeDown = event.which;
  keyStrDown = event.key;

  if (keyStrDown == 'w') {
    player.yVelocity = -5;
  }
  if (keyStrDown == 'a') {
    player.xVelocity = -5;
  }
  if (keyStrDown == 's') {
    player.yVelocity = 5;
  }
  if (keyStrDown == 'd') {
    player.xVelocity = 5;
  }
}

function myKeyUp (event) {
  /*
    Parameters: event object, which contains information about the event
      that triggered the event listener.
    Returns: None, but modifies global variables which track response to event.
    Purpose: Make the animation respond to keys being pressed.
  */
  keyCodeUp = event.which;
  keyStrUp = event.key;

  if (keyStrUp == 'w') {
    player.yVelocity = 0;
  }
  if (keyStrUp == 'a') {
    player.xVelocity = 0;
  }
  if (keyStrUp == 's') {
    player.yVelocity = 0;
  }
  if (keyStrUp == 'd') {
    player.xVelocity = 0;
  }
}



function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{
  // Set up the frame
  line.applyVelocity();
  line.bounceCheck();

  fixVelocity();
  player.applyVelocity();
  var collision = player.checkCircleLineCollision(line, context);

  // Draw the new frame
  context.clearRect(0, 0, canvas.width, canvas.height);
  line.draw();
  player.draw();

  totalCollected = 0; // Resets the amount of total collected coins

  // Draws all the coins
  coin1.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin1.collected == "true") {totalCollected += 1;}
  else {coin1.draw();}

  coin2.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin2.collected == "true") {totalCollected += 1;}
  else {coin2.draw();}

  coin3.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin3.collected == "true") {totalCollected += 1;}
  else {coin3.draw();}

  coin4.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin4.collected == "true") {totalCollected += 1;}
  else {coin4.draw();}

  coin5.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin5.collected == "true") {totalCollected += 1;}
  else {coin5.draw();}

  coin6.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin6.collected == "true") {totalCollected += 1;}
  else {coin6.draw();}

  coin7.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin7.collected == "true") {totalCollected += 1;}
  else {coin7.draw();}

  coin8.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin8.collected == "true") {totalCollected += 1;}
  else {coin8.draw();}

  coin9.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin9.collected == "true") {totalCollected += 1;}
  else {coin9.draw();}

  coin10.checkCollision([player.center[0], player.center[1]], player.radius);
  if (coin10.collected == "true") {totalCollected += 1;}
  else {coin10.draw();}
  context.fillStyle = "black";
  context.fillText("Coins Collected " + totalCollected + "/10", canvas.width-110, 50);

  // Checks if the game is over and displays text accordingly
  if (totalCollected < 10 && collision == "false") {
    // Loop the game to the next frame.
    window.requestAnimationFrame(drawAll);
  }
  else if (totalCollected == 10) {
    context.font = "75px Comic Sans MS";
    context.textAlign = "center";
    context.fillText("VICTORY", canvas.width/2, canvas.height/2);
    context.font = "25px Comic Sans MS";
    context.textAlign = "center";
    context.fillText("Refresh Page to Play Again", canvas.width/2, canvas.height/2 + 50);
  }
  else {
    context.font = "75px Comic Sans MS";
    context.textAlign = "center";
    context.fillText("GAME OVER", canvas.width/2, canvas.height/2);
    context.font = "25px Comic Sans MS";
    context.textAlign = "center";
    context.fillText("Refresh Page to Play Again", canvas.width/2, canvas.height/2 + 50);
  }
}


// Set up the canvas and context objects
context = setUpContext();

document.addEventListener("keydown", myKeyDown);
document.addEventListener("keyup", myKeyUp);

// Coins
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin1 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin2 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin3 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin4 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin5 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin6 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin7 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin8 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin9 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
coin10 = new Coin (randX, randY, 10);
randX = (Math.random() * canvas.width);
randY = (Math.random() * canvas.height);
var totalCollected = 0;

// Text
context.font = "20px Comic Sans MS";
context.textAlign = "center";

// Create instance of Line object
line = new Line(0, 0, 0, 0, context);

player = new Player(canvas.width/2, canvas.height/2, 30, context)

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
