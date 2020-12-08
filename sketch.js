var groundObj//, division1,division2,division3,division4,division5,division6,division7
//var plinko1,plinko2,plinko3,plinko4
//var part1,part2,part3,part4,part5,part6,part7,part8,part9,part10

var divisionHeight = 300
var particles = [];
var plinkos = [];
var divisions = [];

for (var k = 0; k <=width; k = k+80){
   divisions.push(new Divisions(k, height-divisionheight/2, 10, divisionHeight));
}

for (var j = 40; j <=width; j=j+50){

  plinkos.push(new Plinko(j,75))
}

for (var j = 15; j <=width-10; j=j+50){

  plinkos.push(new Plinko(j,175))

}
for (var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,275))
}


for (var j = 0; j < particles.length; j++){

  particles[j].display();
}

for (var i = 0; i < plinkos.length; i++){

  plinkos[i].display();
}

for (var h = 0; h < divisions.length; h++){

  divisions[h].display();
}

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  groundObj = new Ground(240,790,480,20);
}

function draw() {
  background(255,255,255); 
  
  groundObj.display();

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));

  }
  drawSprites();
}