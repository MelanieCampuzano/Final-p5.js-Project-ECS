

class UpperTubes {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
    drawUpperTubes()
    {
      fill('#7c9488')
     rect(this.x,this.y,70,310,)//body of tube
     rect(this.x-11,this.y+315,90,20); // top of tube


   }
  checkCollision() {
    if(!(flappybird.x+50<this.x||flappybird.x> this.x+70 || flappybird.y>this.y+335)) {
      Fill(0, 0, 0)
      textSize(10);
      text("Game Over", 200, 100);
    }
  }

}
