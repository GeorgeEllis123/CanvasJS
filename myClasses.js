class Coin {
  constructor(x, y, r) {
    this.center = [x, y];
    this.radius = r;
    this.collected = "false";
  }

  get x() {return this.center[0];}
  set x(newX) {this.center[0] = newX;}
  get y() {return this.center[1];}
  set y(newY) {this.center[1] = newY;}
  get state() {return this.collected;}
  set state(newState) {return this.collected;}

  checkCollision(playerCenter, playerRadius) {
    // Checks if the coin gets collected
    var centerDistance = Math.sqrt(Math.pow((playerCenter[0]-this.center[0]), 2) + Math.pow((playerCenter[1]-this.center[1]), 2));
    var totalRadius = playerRadius + this.radius;
    if (totalRadius >= centerDistance) {
      this.collected = "true";
    }
  }

  draw() {
    if (this.collected == "false"){
      context.fillStyle = "yellow";
      context.beginPath();
      context.arc(this.center[0], this.center[1], this.radius, 0, 2*Math.PI);
      context.fill();
    }
  }
}

class Player {
  constructor(x, y, r) {
    this.center = [x, y];
    this.radius = r;
    this.vel = [0,0]
    this.velConstant = 5
  }

  // Getters and setters for points
  get x() {return this.center[0];}
  set x(newX) {this.center[0] = newX;}
  get y() {return this.center[1];}
  set y(newY) {this.center[1] = newY;}

  // Getters and setters for velocities
  get xVelocity() {return this.vel[0];}
  set xVelocity(change) {this.vel[0] = change;}
  get yVelocity() {return this.vel[1];}
  set yVelocity(change) {this.vel[1] = change;}

  applyVelocity() {
    // Add velocity to position in each coordinate
    this.center[0] += this.vel[0];
    this.center[1] += this.vel[1];
  }

  checkCircleLineCollision(line, context) {
    // Checks if the player collides with the circle
    // Checks if the edge points of the line are inside the circle
    var centerToPT1 = Math.sqrt(Math.pow((line.pt1[0]-this.center[0]), 2) + Math.pow((line.pt1[1]-this.center[1]), 2));
    if (centerToPT1 <= this.radius) {
      return "true";
    }
    var centerToPT2 = Math.sqrt(Math.pow((line.pt2[0]-this.center[0]), 2) + Math.pow((line.pt2[1]-this.center[1]), 2));
    if (centerToPT2 <= this.radius) {
      return "true";
    }
    // Checks if the rest of the line segment is inside the circle
    var slope = ((line.pt1[1]-line.pt2[1]) / (line.pt1[0]-line.pt2[0]))
    var perpendicularSlope = (-1 / slope);
    var xOnLine = (((line.pt1[0]*slope) - line.pt1[1] - (this.center[0]*perpendicularSlope) + this.center[1]) / (slope-perpendicularSlope));
    var yOnLine = (slope*(xOnLine - line.pt1[0]) + line.pt1[1]);

    if (line.pt2[0] - line.pt1[0] >= 0) {
      if ((line.pt1[0] <= xOnLine) && (xOnLine <= line.pt2[0])) {
        var dist = Math.sqrt(Math.pow((xOnLine-this.center[0]), 2) + Math.pow((yOnLine-this.center[1]), 2));
        if (dist <= this.radius) {
          return "true";
        }
      }
    }
    if (line.pt1[0] - line.pt2[0] >= 0) {
      if ((line.pt1[0] >= xOnLine) && (xOnLine >= line.pt2[0])) {
        var dist = Math.sqrt(Math.pow((xOnLine-this.center[0]), 2) + Math.pow((yOnLine-this.center[1]), 2));
        if (dist <= this.radius) {
          return "true";
        }
      }
    }
    return "false";
  }

  draw() {
    context.fillStyle = "blue";
    context.beginPath();
    context.arc(this.center[0], this.center[1], this.radius, 0, 2*Math.PI);
    context.fill();
  }
}


class Line {
  constructor(x1, y1, x2, y2) {
    this.pt1 = [x1, y1];
    this.pt2 = [x2, y2];
    this.vel1 = [Math.random() * 10 - 2, Math.random() * 10 - 2];
    this.vel2 = [Math.random() * 10 - 2, Math.random() * 10 - 2];
    this.color = "#ff0000";
    this.width = 3;
    this.cap = 'round';
  }

  ///////////////// Lots of getters and setters
  get x1() {
    return this.pt1[0];
  }

  set x1(newX1) {
    this.pt1[0] = newX1;
  }

  get y1() {return this.pt1[0];}
  set y1(newY1) {this.pt1[0] = newX1;}

  get x2() {return this.pt1[0];}
  set x2(newX2) {this.pt1[0] = newX1;}

  get y2() {return this.pt1[0];}
  set y2(newY2) {this.pt1[0] = newX1;}

  ////////////////// Custom methods

  applyVelocity() {
    // Add velocity to position in each coordinate
    this.pt1[0] += this.vel1[0];
    this.pt1[1] += this.vel1[1];
    this.pt2[0] += this.vel2[0];
    this.pt2[1] += this.vel2[1];
  }

  bounceCheck() {
    // Check if any point is over any edge.  If it is over the edge, then
    //   set it to be at the edge, reverse direction, and slightly modify
    //   the velocity by a little.
    if (this.pt1[0] > canvas.width) {
      this.pt1[0] = canvas.width;
      this.vel1[0] += Math.random() - 0.5;
      if (this.vel1[0] > 0) {this.vel1[0] *= -1;}
    }
    if (this.pt1[0] < 0) {
      this.pt1[0] = 0;
      this.vel1[0] += Math.random() - 0.5;
      if (this.vel1[0] < 0) {this.vel1[0] *= -1;}
    }
    if (this.pt2[0] > canvas.width) {
      this.pt2[0] = canvas.width;
      this.vel2[0] += Math.random() - 0.5;
      if (this.vel2[0] > 0) {this.vel2[0] *= -1;}
    }
    if (this.pt2[0] < 0) {
      this.pt2[0] = 0;
      this.vel2[0] += Math.random() - 0.5;
      if (this.vel2[0] < 0) {this.vel2[0] *= -1;}
    }
    if (this.pt1[1] > canvas.height) {
      this.pt1[1] = canvas.height;
      this.vel1[1] += Math.random() - 0.5;
      if (this.vel1[1] > 0) {this.vel1[1] *= -1;}
    }
    if (this.pt1[1] < 0) {
      this.pt1[1] = 0;
      this.vel1[1] += Math.random() - 0.5;
      if (this.vel1[1] < 0) {this.vel1[1] *= -1;}
    }
    if (this.pt2[1] > canvas.height) {
      this.pt2[1] = canvas.height;
      this.vel2[1] += Math.random() - 0.5;
      if (this.vel2[1] > 0) {this.vel2[1] *= -1;}
    }
    if (this.pt2[1] < 0) {
      this.pt2[1] = 0;
      this.vel2[1] += Math.random() - 0.5;
      if (this.vel2[1] < 0) {this.vel2[1] *= -1;}
    }
  }

  draw() {
    context.strokeStyle = this.color;
    context.lineWidth = this.width;
    context.lineCap = this.cap;
    context.beginPath();
    context.moveTo(this.pt1[0], this.pt1[1]);
    context.lineTo(this.pt2[0], this.pt2[1]);
    context.stroke();
  }
}

function setUpContext() {
  canvas = document.getElementById("mainCanvas");
  // I found that - 20 worked well for me, YMMV
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 20;
  canvas.style.border = "1px solid black";

  // Set up the context for the animation
  context = canvas.getContext("2d");
  return context;
}
