

class FrameWork
{
  constructor() {
    
  }

  drawFrameWork() 
  {

   noStroke();
    fill('#76ad68');//green
    rect(1, 530, 550, 100);

    fill('#e0dc51');
    circle(80, 100, 120);//yellow

    noStroke();
    fill('#edeae8');//white
    rect(1, 440, 500, 90);


    noStroke();
    fill('#edeae8'); // Set fill color to white
    arc(100, 500, 200, 200, PI, TWO_PI, PIE); // Draw a white half circle

    noStroke();
    fill('#edeae8'); // Set fill color to white
    arc(200, 500, 200, 200, PI, TWO_PI, PIE); // Draw a white half circle

    noStroke();
    fill('#edeae8'); // Set fill color to white
    arc(300, 500, 200, 200, PI, TWO_PI, PIE); // Draw a white half circle

    noStroke();
    fill('#edeae8'); // Set fill color to white
    arc(400, 500, 200, 200, PI, TWO_PI, PIE); // Draw a white half circle

    noStroke();
    fill('#edeae8'); // Set fill color to white
    arc(500, 500, 200, 200, PI, TWO_PI, PIE); // Draw a white half circle

    noStroke();
    fill('#edeae8'); // Set fill color to white
    arc(20, 495, 200, 200, PI, TWO_PI, PIE); // Draw a white half circle


      for (let i = -20; i < 30; i++) {
        let x = 60 + i * 40; // Calculate x position for each half circle
        let y = 530; // Set y position for the row of half circles
        fill('#76ad68'); // Set fill color to red
        arc(x, y, 50, 30, PI, TWO_PI, PIE); // Draw a red half circle

        noStroke();
        fill('#659957');//green
        rect(1, 550, 550, 100);

        noStroke();
        fill('#bf9775');//tan
        rect(1, 630, 500, 90);


        fill('#2c4729');//dark green
        rect(0, 630, 700, 10);


        
    }


  }
}

