let x,y,rad, xDir, yDir; 
let r,g,b;
let angle1, angle2, angle3; 

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  r = 100; 
  g = 200; 
  b = 100; 
  
  x = random(width);
  y = random(height);
  
  rad = 10; 
  
  xDir = random(-1,1);
  yDir = random(-1,1);
  
  angle1 = 0; 
  angle2 = 90; 
  angle3 = 180;
}

function draw() {
  background(255,60,100,10);
  
  rad = mapSinAngle(5,15,angle1);
  
  r = mapSinAngle(20,255,angle1);
  g = mapSinAngle(100,255,angle2);
  b = mapSinAngle(100,200,angle3);
  
  display(r,g,b,5);
  update(2);
  bounds();
  
  
  angle1 += 3;
  angle2 += 2;
  angle3 += 4; 
}

function draw() {
  // Set background to black
  background(0);

  // Map the mouse position to RGB values for dynamic color changes
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = map(mouseX + mouseY, 0, width + height, 0, 255);

  // Set the fill color of the circle
  fill(r, g, b);
  noStroke();

  // Draw a circle in the center of the canvas
  ellipse(width / 2, height / 2, 200, 200);
}
