function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(236,236,236);
  angleMode(DEGREES);
  textSize(20);

  frameRate(15);



}

function draw() {




  // put drawing code here
  translate(windowWidth/2,windowHeight/2);

  if (mouseButton == LEFT) {
    background(236,236,236,275);
    fill(50);
      text( "watch the animation, if you're tired left click/right click",-250,windowHeight/4+150);
      stroke(50);
  }
  else if (mouseButton == RIGHT) {
    background(236,236,236,0);
    fill(50);
      text( "watch the animation, if you're tired left click/right click",-250,windowHeight/4+150);
        stroke(50);
  }
  else {
      background(21,39,61,275-frameCount/2);
    fill(275);
        text( "watch the animation, if you're tired left click/right click",-250,windowHeight/4+150);
       stroke(lerpColor(color('#006783'), color('#ed6d7f'), frameCount/800));
  }

      //text( frameCount,-250,-windowHeight/4+100);
 // with push() you collect the upcoming transformations

rotate(frameCount);
 push();
var angle1 = frameCount*15;
  var xpos1 =200*cos(angle1);
  var ypos1 =200*sin(angle1);
// draw a line between them

  line(xpos1, ypos1,125*cos(frameCount/2), 125*sin(frameCount/2));
  line(xpos1, ypos1,125*cos(180+frameCount/2), 125*sin(180+frameCount/2));
rotate(-frameCount);


//if (angle1 == 360) {
      //noLoop();
    //}
pop();
if (keyIsPressed == true) {  // If the key is pressed,
  background(21,39,61);
   stroke(275);
   var angle1 = frameCount*15;
     var xpos1 =200*cos(angle1);
     var ypos1 =200*sin(angle1);
   // draw a line between them

     line(xpos1, ypos1,125*cos(frameCount/2), 125*sin(frameCount/2));
     line(xpos1, ypos1,125*cos(180+frameCount/2), 125*sin(180+frameCount/2));
     line(xpos1, ypos1,125*cos(90+frameCount/2), 125*sin(90+frameCount/2));
     line(xpos1, ypos1,125*cos(270+frameCount/2), 125*sin(270+frameCount/2));
     rotate(frameCount/2);
    noFill();
     strokeweight(2);
    beginShape();
    vertex(125,0);
    vertex(0,125);
    vertex(-125,0);
    vertex(0,-125);
    endShape();
    rotate(-frameCount/2);
  }
  else {
    rotate(frameCount*2);
    noFill();                    // Otherwise,
  ellipse(250,0,25,25);
    rotate(-frameCount*2);     // draw a rectangle.
  }








}
