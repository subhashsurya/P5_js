function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES);
}

function draw() {
  background(20);
 translate(450,450);
 rotate(-90);

  let hrs = hour();
  let sec = second();
  let min = minute();
  strokeWeight(20);
 stroke(255,100,150);//color
 noFill();
 let end_s = map(sec,0,60,0,360);
 arc(0,0, 600,600,0,end_s);
 

 stroke(255,100,250);//color
 noFill();
 let end_m = map(min,0,60,0,360);
 arc(0,0, 550,550,0,end_m);
 
 stroke(100,255,150);//color
 noFill();
 let end_h = map(hrs%12,0,12,0,360);
 arc(0,0, 500,500,0,end_h);

 push();
 rotate(end_h);
 stroke(100,255,150);//color
 line(0,0,250,0);
 pop();
 
 push();
 rotate(end_m);
 stroke(255,100,250);//color
 line(0,0,275,0);
 pop();
 
 
 push();
 rotate(end_s);
 stroke(255,100,150);//color
 line(0,0,300,0);
 pop();
 
 point(0,0);
 
 
}