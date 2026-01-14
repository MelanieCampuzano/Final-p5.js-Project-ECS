

class FlappyBird
  {

    constructor(s, xStart, yStart) {
    this.x = xStart;
    this.y = yStart;
    this.speed = s;
    }

  drawFlappyBird() 
  {
    fill("#F2E707")
    ellipse(this.x, this.y, 50, 50); // body
    fill('#FFFFFF')
    ellipse(this.x+10, this.y-5, 20, 20); // eye ball
    fill('#000000')
    ellipse(this.x+15, this.y-5, 9, 9); // pupil
    fill('#F07422')
    rect(this.x+13, this.y+5, 15, 4); // top lip
    fill('#F07422')
    rect(this.x+12, this.y+9, 15, 4); // bottom lip
    fill('#F2E707')
    triangle(this.x-12, this.y-10, this.x-12, this.y+10, this.x-35, this.y); // wing


    // christmas hat
    fill(255, 0, 0);
    triangle(this.x-18.5, this.y-20, this.x+18.5, this.y-20, this.x, this.y-50); // hat
    fill(255);
    ellipse(this.x, this.y-53, 10,10); // pom-pom
    fill('#FFFFFF')
    rect(this.x-19.5, this.y-20, 39, 5); // buckle

  }

    moveRight()
    {
      this.x = this.x+this.speed;
    }


  }
