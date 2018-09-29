function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(21,38,60);
  angleMode(DEGREES);
  textSize(20);

  frameRate(10);

}

function draw() {

  text( frameCount,200,300);

  // put drawing code here
  translate(windowWidth/2,windowHeight/2);
 // with push() you collect the upcoming transformations
 if (mouseY <= windowHeight/2) {
   stroke(122,178,205);
   var angle5 = frameCount*20;
    var xpos5 =125*cos(angle5);
    var ypos5 =125*sin(angle5);
  // draw a line between them
    stroke(275)
    line(xpos5, ypos5,125*cos(180), 125*sin(180));
  
   else {
     rect(300, 300, 100, 50); // Lower-right
   }
stroke(275);
 push();
 var angle1 = frameCount*20;
  var xpos1 =125*cos(angle1);
  var ypos1 =125*sin(angle1);
// draw a line between them
  stroke(275)
  line(xpos1, ypos1,125*cos(0), 125*sin(0));
if (angle1 == 360) {
      noLoop();
    }
    var angle2 = frameCount*20;
     var xpos2 =125*cos(angle1);
     var ypos2 =125*sin(angle1);
   // draw a line between them
     stroke(275)
     line(xpos2, ypos2,125*cos(90), 125*sin(90));
   if (angle1 == 360) {
         noLoop();
       }
   var angle3 = frameCount*20;
        var xpos3 =125*cos(angle1);
        var ypos3 =125*sin(angle1);
      // draw a line between them
        stroke(275)
        line(xpos3, ypos3,125*cos(180), 125*sin(180));
      if (angle1 == 360) {
            noLoop();
          }
          var angle4 = frameCount*20;
               var xpos4 =125*cos(angle1);
               var ypos4 =125*sin(angle1);
             // draw a line between them
               stroke(275)
               line(xpos4, ypos4,125*cos(270), 125*sin(270));
             if (angle1 == 360) {
                   noLoop();
                 }
                 pop();
                 push();
                 rotate(45);
                 var angle1 = frameCount*20;
                  var xpos1 =125*cos(angle1);
                  var ypos1 =125*sin(angle1);
                // draw a line between them
                  stroke(275)
                  line(xpos1, ypos1,125*cos(0), 125*sin(0));
                if (angle1 == 360) {
                      noLoop();
                    }
                    var angle2 = frameCount*20;
                     var xpos2 =125*cos(angle1);
                     var ypos2 =125*sin(angle1);
                   // draw a line between them
                     stroke(275)
                     line(xpos2, ypos2,125*cos(90), 125*sin(90));
                   if (angle1 == 360) {
                         noLoop();
                       }
                   var angle3 = frameCount*20;
                        var xpos3 =125*cos(angle1);
                        var ypos3 =125*sin(angle1);
                      // draw a line between them
                        stroke(275)
                        line(xpos3, ypos3,125*cos(180), 125*sin(180));
                      if (angle1 == 360) {
                            noLoop();
                          }
                          var angle4 = frameCount*20;
                               var xpos4 =125*cos(angle1);
                               var ypos4 =125*sin(angle1);
                             // draw a line between them
                               stroke(275)
                               line(xpos4, ypos4,125*cos(270), 125*sin(270));
                             if (angle1 == 360) {
                                   noLoop();
                                 }
                                 pop();








}
