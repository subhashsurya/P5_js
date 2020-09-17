let time =0;// angle time moves forward 
let wave= [];
let circleslider;
let speedslider;
function setup() {
  createCanvas(1550, 675);
  circleslider= createSlider(1,100,1);
  print(circleslider.value());
  speedslider= createSlider(1,5,1);

}

function draw() {
  background(20); 
  translate(300, 300);
  let x=0;
  let y=0;
  for(let i=0; i<circleslider.value(); i++){
    let prevx=x;
    let prevy=y;
    let n= i*2 +1;// 1 3 7 11 ... 
    let radius = 100* ( 4/ (n*PI));
    x= x+ radius * cos(n* time);
    y= y+ radius * sin(n* time);

    stroke(255,100);
    noFill();
    ellipse(prevx, prevy, radius*2);
    
    stroke(255);
    line(prevx,prevy,x,y);

  } 
  wave.unshift(y); 
  translate(200,0);
  line(x-200,y,0,wave[0]); 
    
  beginShape();
  noFill();
  for(let i=0; i<wave.length;i++){
    vertex(i,wave[i]);
}
   endShape();  

   time= time+0.02*speedslider.value();
 
   if(wave.length>550){
   wave.pop();
 } 
  
}