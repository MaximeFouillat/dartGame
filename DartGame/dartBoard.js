function setup() {
  width = 640;
  height = 480;
  createCanvas(width, height);//deplacement du point[0,0] au centre du canvas
}

function draw() {
noStroke();
background(200,200,200);
 translate(width/2, height/2);
 fill("blue");

 fill("black");
 arc(0, 0, height, height, 0, 2*PI, PIE);
for(var i = -PI/20 ; i <(2*PI) ; i+=(PI/5)){
fill("green");
arc(0, 0, 0.9*height, 0.9*height, i, (PI/10)+i, PIE);
}
for(var i = PI/20 ; i <(2*PI) ; i+=(PI/5)){
fill("red");
arc(0, 0, 0.9*height, 0.9*height, i, (PI/10)+i, PIE);
}
for(var i = -PI/20 ; i <(2*PI) ; i+=(PI/5)){
fill("white");
arc(0, 0, 0.8*height, 0.8*height, i, (PI/10)+i, PIE);
}
for(var i = PI/20 ; i <(2*PI) ; i+=(PI/5)){
fill("black");
arc(0, 0, 0.8*height, 0.8*height, i, (PI/10)+i, PIE);
}
for(var i = -PI/20 ; i <(2*PI) ; i+=(PI/5)){
fill("green");
arc(0, 0, 0.47*height, 0.47*height, i, (PI/10)+i, PIE);
}
for(var i = PI/20 ; i <(2*PI) ; i+=(PI/5)){
fill("red");
arc(0, 0, 0.47*height, 0.47*height, i, (PI/10)+i, PIE);
}
for(var i = -PI/20 ; i <(2*PI) ; i+=(PI/5)){
fill("white");
arc(0, 0, 0.4*height, 0.4*height, i, (PI/10)+i, PIE);
}
for(var i = PI/20 ; i <(2*PI) ; i+=(PI/5)){
fill("black");
arc(0, 0, 0.4*height, 0.4*height, i, (PI/10)+i, PIE);
}

fill("green");
arc(0, 0, 0.15*height, 0.15*height, 0, 2*PI, PIE);
fill("red");
arc(0, 0, 0.075*height, 0.075*height, 0, 2*PI, PIE);
//text numbers 1 to 20
fill("white");
text("20",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("1",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("18",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("4",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("13",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("6",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("10",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("15",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("2",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("17",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("3",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("19",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("7",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("16",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("8",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("11",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("14",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("9",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("12",-9,-222);
textSize(20);
fill("white");
rotate(PI/10.0);
text("5",-9,-222);
textSize(20);
/*beginPath();
endPath();*/
}

function mousePressed() {
  Xoff = width/2;
  Yoff = height/2;
  fill("blue");
  ellipse(mouseX - Xoff, mouseY - Yoff, 50, 50);
  // prevent default
  Xclicked = (mouseX - Xoff)/240;
  Yclicked = -(mouseY - Yoff)/240;
  console.log("xclic : "  + Xclicked);
  console.log("yclic : "+ Yclicked);
  r=sqrt(Xclicked*Xclicked + Yclicked*Yclicked);
  console.log("r :" + r);
  //0 à 90 °C
  if (Xclicked > 0 && Yclicked >= 0){
    teta=atan(Yclicked/Xclicked)*180/PI;
    console.log("teta1 :" + teta);
    if(teta > 80 && teta<90){
      if(r > 0.8 && r < 0.9)
      {
        console.log("score : 40");
      }
      if(r > 0.4 && r < 0.47)
      {
        console.log("score : 60");
      }
      if((r > 0.2 && r < 0.4) || r > 0.47 && r < 0.8){
        console.log("score : 20");
      }
    }
    if(teta > 63 && teta<80){
      console.log("score : 1");
    }
    if(teta > 45 && teta<63){
      console.log("score : 18");
    }
    if(teta > 27 && teta < 45){
      console.log("score : 4");
    }
    if(teta > 9 && teta<27){
      console.log("score : 13");
    }
    if(teta < 9){
      console.log("score : 6");
    }
  }
  if (Xclicked > 0 && Yclicked < 0){
    teta=atan(Yclicked/Xclicked)*180/PI + PI +360;
    console.log("teta2 :" + teta);
    if(teta > 352){
      console.log("score : 6");
    }
    if(teta > 334 && teta< 352){
      console.log("score : 10");
    }
    if(teta > 316 && teta<334){
      console.log("score : 15");
    }
    if(teta > 297 && teta<316){
      console.log("score : 2");
    }
    if(teta > 279 && teta < 297){
      console.log("score : 17");
    }
    if(teta > 270 && teta<279){
      console.log("score : 3");
    }
  }
  if (Xclicked < 0 ){
    teta=atan(Yclicked/Xclicked)*180/PI + PI +180;
    console.log("teta3 :" + teta);
  }
  if(teta > 90 && teta < 99){
    console.log("score : 20");
  }
  if(teta > 99 && teta<117){
    console.log("score : 5");
  }
  if(teta > 117 && teta<135){
    console.log("score : 12");
  }
  if(teta > 135 && teta < 153){
    console.log("score : 9");
  }
  if(teta > 153 && teta<171){
    console.log("score : 14");
  }
  if(teta > 171 && teta < 189){
    console.log("score : 11");
  }
  if(teta > 189 && teta< 207){
    console.log("score : 8");
  }
  if(teta > 207 && teta<225){
    console.log("score : 16");
  }
  if(teta > 225 && teta<243){
    console.log("score : 7");
  }
  if(teta > 243 && teta < 261){
    console.log("score : 19");
  }
  if(teta > 261 && teta<270){
    console.log("score : 3");
  }
  return false;
}
