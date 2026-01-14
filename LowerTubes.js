

class LowerTubes {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
    drawLowerTubes()
    {
      fill('#7c9488')
     rect(this.x,this.y,70,330,)//body of tube
     rect(this.x-11,this.y-20,90,20); // top of tube //#1 bottom tube 

      
   }
    checkCollision() {
      if(!(flappybird.x+50<this.x||flappybird.x> this.x+70 || flappybird.y+50<this.y)) {
        Fill(0, 0, 0)
        textSize(10);
        text("Game Over", 200, 100);
      }
    }

}