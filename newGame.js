
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
  // console.log(event);
  // console.log(keyCodeDown);
  // console.log(keyStrDown);

  if (keyStrDown == 'w') {
    // Move circle up
    if (player.yVelocity == 5){
      player.yVelocity -= 10;
    }
    else if (player.yVelocity == 0){
      player.yVelocity -= 5;
    }

  }
  if (keyStrDown == 'a') {
    // Move circle up
    if (player.xVelocity == 5){
      player.xVelocity -= 10;
    }
    else if (player.xVelocity == 0){
      player.xVelocity -= 5;
    }
  }
  if (keyStrDown == 's') {
    // Move circle up
    if (player.yVelocity == -5){
      player.yVelocity = 5;
    }
    else if (player.yVelocity == 0){
      player.yVelocity = 5;
      console.log("s down");
    }
  }
  if (keyStrDown == 'd') {
    // Move circle up
    if (player.xVelocity == -5){
      player.xVelocity += 10;
    }
    else if (player.xVelocity == 0){
      player.xVelocity += 5;
    }
  }
  //console.log(player.yVelocity);
  //console.log(player.xVelocity);
}

function myKeyUp (event) {
  /*
    Parameters: event object, which contains information about the event
      that triggered the event listener.
    Returns: None, but modifies global variables which track response to event.
    Purpose: Make the animation respond to keys being pressed.
  */
  // One of the attributes of the event object is 'which,' contains the key
  //   that was pressed to trigger the event listener.
  keyCodeUp = event.which;
  keyStrUp = event.key;
  // console.log(event);
  // console.log(keyCodeUp);
  // console.log(keyStrUp);

  if (keyStrUp == 'w') {
   player.yVelocity = 5;
  }

  if (keyStrUp == 's') {
    player.yVelocity = 0;
    console.log(player.yVelocity);

  }

  if (keyStrUp == 'a') {
    player.xVelocity = 5;
  }

  if (keyStrUp == 'd') {
    player.xVelocity = 0;
  }

  //console.log(player.yVelocity);
  //console.log(player.xVelocity);
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

  player.applyVelocity();

  // Draw the new frame
  context.clearRect(0, 0, canvas.width, canvas.height);
  line.draw();
  player.draw();
  coin1.draw();
  coin2.draw();
  coin3.draw();
  coin4.draw();
  coin5.draw();
  coin6.draw();
  coin7.draw();
  coin8.draw();
  coin9.draw();
  coin10.draw();


  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);
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

// Create instance of Line object
line = new Line(0, 0, 0, 0, context);
// console.log(line);

player = new Player(canvas.width/2, canvas.height/2, 30, context)
// console.log(player);

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
