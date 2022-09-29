function setup() {
  createCanvas(innerWidth, innerWidth*4/3);
  background(0,0,0);
  strokeWeight(2);
  stroke(200,200,255); //rgb --> currently light blue
  noFill();
  frameRate(0.5);
}

function draw() {
  clear();
  var margin = 15;
  translate(margin,margin);
   
  var num = 3;//problem with this
   var space = 15;
   var width = innerWidth-2* margin- space*(num-1);
  var height = innerWidth-2* margin - space*(num-1);
  var spotX = mouseX;
  var spotY = mouseY;
   
  var sideLen = width/num;
   var shift = 20;

  
  //if(sqrt )
   for(var x=0; x<(sideLen*num); x = x+sideLen + space){
     for(var y=0; y<(height+sideLen + space+1); y = y+ sideLen + space){
       fill(0, random(150,200), random(150,200), 150)
     quad(x ,y, x+sideLen,y, x+sideLen,y+sideLen, x ,y+sideLen);
     }
   }
  
noLoop();
  
}
