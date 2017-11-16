function setup() {
  createCanvas(640, 480);
}

function draw() {

 background(51,0,0);
fill("white");
//tracé du mode de jeu
 rect(30, 30, 270, 55, 20);
for(var i = 30 ; i <=270 ; i+=90){
 rect(i, 90, 89, 55, 20);
}
//tracé des joueurs
for(var i = 30 ; i <=240 ; i+=70){
  rect(i, 150, 55, 55, 20);
  rect(i, 210, 55, 55, 20);
  }

for(var i = PI/20 ; i <(2*PI) ; i+=(PI/10)){
fill("red");
arc(100, 350, 100, 100, i, (PI/10)+i, PIE);

}
}

