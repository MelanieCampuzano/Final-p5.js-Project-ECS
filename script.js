let tubesArray = [];//array of tubes objects
let flappybird;
let framework;
let LowerTubes1;
let LowerTubes2;
let LowerTubes3;
let UpperTubes1;
let UpperTubes2;
let UpperTubes3;


function setup() {
  createCanvas(500, 700);
    background('#9ec8e8');

  flappybird = new FlappyBird( 1.5, 20, 380);
  framework = new FrameWork();
  LowerTubes1 = new LowerTubes(100, 445);
  LowerTubes2 = new LowerTubes(250, 465);
  LowerTubes3 = new LowerTubes(400, 485);
 UpperTubes1 = new UpperTubes(100, 0);
  UpperTubes2 = new UpperTubes(250, 30);
  UpperTubes3 = new UpperTubes(400, 60);
  

}

function draw(){
  background('#9ec8e8');
  framework.drawFrameWork();
  LowerTubes1.drawLowerTubes();
  LowerTubes2.drawLowerTubes();
  LowerTubes3.drawLowerTubes();
  UpperTubes1.drawUpperTubes();
  UpperTubes2.drawUpperTubes();
  UpperTubes3.drawUpperTubes();
  flappybird.drawFlappyBird();
  flappybird.moveRight();



    if(keyIsPressed)
    {
      if (keyCode === UP_ARROW) {
        flappybird.y = flappybird.y-1.25;
      }
      else if (keyCode === DOWN_ARROW) {
        flappybird.y = flappybird.y+1.25;
      }
      else if (keyCode && key == 'w') {
        flappybird.y = flappybird.y-1.25;
      }
      else if (keyCode && key == 's') {
        flappybird.y = flappybird.y+1.25;
      }
    }
  }