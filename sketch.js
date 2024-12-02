var coco=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(coco,155,130); //an RGB color for the canvas' background
  //circle
  strokeWeight(5)
  stroke(210,210,127); // an RGB color for the circle's border
  fill(255,180,157,200); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(150,250,37,37); // center of canvas, 20px dia
  fill(251,random(0,8),100,150);
  ellipse(random(width),random(height),80,90);
  fill(157,200,92,75)
  ellipse(210,coco,80,80);
  textFont("Garamond");
  textSize(90);
  text('Hey',150,116);
}

function mousePressed(){
  if(coco>=255){
    coco=0;
  }else{
  coco=coco+5;
}

  coco=coco+5;
}