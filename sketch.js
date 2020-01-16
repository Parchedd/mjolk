let x = 50;
let y = 20;
let h = 0;
let w = 50;
let x1;
let y1;
let y3;
let x3;
let y2;
let x2;
let x4;
let y4;
let y5;
let x5;
let y6;
let x6;
let y7;
let x7;
let score;
let y8;
let gameover;
let x8;
let highscore;

let realheight;

let sizex;
let sizex2;
let sizey;
let sizey2;
let sizex3;
let sizex4;
let sizey3;
let sizey4;
let sizex5;
let sizey5;



let yspeed = 2;
let yacc = 0.20;
let fric = 0.80;
let xtarget = 450;
let ytarget = 0;
let targetspeed = 4;
let targetH = 150;
let xtargeta = 450;
let ytargeta = 300;
let targetspeeda = 4;

  x1 = 300;
  y1 = 330;
  y2 = 330;
  x2 = 200;
  gameovertext = "Game over!"
  x3 = 500;
  y3 = 330;
  maxScore = 0 ;
  x4 = 400
  y4 = 330
  x5 = 100
  y5 = 330
  x6 = 600
  y6 = 330
  x7 = 0
  y7 = 330
  x8 = 0
  y8 = 330
  lose = "You sadly lost."
  score = 0

  sizex2 = 240;
  sizey2 = 120;
  sizex = 240;
  sizey = 120;
  sizex3 = 240;
  sizey3 = 120;
  sizex4 = 240;
  sizey4 = 120;
  sizex5 = 240;
  gameover = 0
  sizey5 = 120;



function preload() {
monkey = ellipse;
highscore = loadStrings('highscoreserver.txt')
}

  
function setup() {
  createCanvas(400, 400);
  wilson = loadImage("bakke.png");
  wilson2 = loadImage("bakke.png");
  wilson3 = loadImage("bakke.png");
  wilson4 = loadImage("bakke.png");
  wilson5 = loadImage("bakke.png");
  wilson6 = loadImage("bakke.png");
  wilson7 = loadImage("bakke.png");
  wilson8 = loadImage("bakke.png");
  realheight = 400;
}

function draw() {
  background(220);
  
  //kode for spiller
  ellipse(x, y, 40, 40);
  yspeed = yspeed + yacc;
  y = y + yspeed;
  if (y > height - 50)
  {
    y = y - yspeed;
    yspeed = yspeed * -1;
    yspeed = yspeed * fric;
  }
  if (y < height - height + 20)
  {
    y = y - yspeed;
    yspeed = yspeed * 1;
    yspeed = yspeed * fric;
  }
  
  //kode for target
  rect(xtarget, ytarget, w, targetH, 0);
  xtarget = xtarget - targetspeed;
  if (xtarget < -50)
  {
  xtarget = 450;
  }
  rect(xtargeta, ytargeta, w, targetH, 0);
  xtargeta = xtargeta - targetspeed ;
  if (xtargeta < -50)
  {
  xtargeta = 450;
  }
  
  
  image(wilson, x1, y1, sizex, sizey);
  image(wilson2, x2, y2, sizex2, sizey2);
  image(wilson3, x3, y3, sizex3, sizey3);
  image(wilson4, x4, y4, sizex4, sizey4);
  image(wilson5, x5, y5, sizex5, sizey5);
  image(wilson6, x6, y6, sizex5, sizey5);
  image(wilson7, x7, y6, sizex5, sizey5);
  image(wilson8, x8, y7, sizex5, sizey5);
  
  
  x1 -= 3;
  x2 -= 3;
  x3 -= 3;
  x4 -= 3;
  x5 -= 3;
  x6 -= 3;
  x7 -= 3;
  x8 -= 3;
  
  if(x1 <= -sizex) { x1 = width; }
  
  if(x2 <= -sizex2) { x2 = width; }
  
  if(x3 <= -sizex3) { x3 = width; }
  
  if(x4 <= -sizex4) { x4 = width; }
  
  if(x5 <= -sizex5) { x5 = width; } 
    
  if(x6 <= -sizex5) { x6 = width; }
  
  if(x7 <= -sizex5) { x7 = width; }
  
  if(x8 <= -sizex5) { x8 = width; }
  text(str("Score = " + int(score)), 100, 100, 70, 80)
  text(str("Blobscore = " + int(highscore)), 10, 10, 70, 80)
  text(str("If you pass the blobscore, you win a blob file with a gift inside."), 300, 10, 90, 90)
  
  
    //collition detection up
  if (x + 10 > xtarget && x - 10 < xtarget + w && y - 10 > ytarget && y < ytarget + targetH - 30){
  text(str(gameovertext), 200, 200, 1000, 100)
     console.log("crashup")
    frameRate(0)
      if (score > highscore){
  saveStrings(str(score), 'highscoreserver.txt')
  }
  }

    
  //collition detection down
  if (x + 10 > xtargeta && x - 10 < xtargeta + w   && y + 10 > ytargeta && y < ytargeta + targetH){ 
    
text(gameovertext, 200, 200, 80, 80);
  console.log("crashdown")
      text(str(gameovertext), 200, 200, 1000, 100)
    frameRate(0)
    if (score > highscore){
  saveStrings(score, 'highscoreserver.txt')
  }
  
  }
  score += 1
    

  }


function keyPressed() {
  if (keyCode === 32)
    yspeed = -7 ; 
}


