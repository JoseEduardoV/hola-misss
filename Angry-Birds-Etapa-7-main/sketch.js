var Original_Bob;
var Bob,Bob2,Bob3;
var Bob_slides,Bob_jumps;
var Bob_shield,Bob_rocket;
var wall1,wall2;
var rocket,shield;
var Base,base_false,Base_broken;
var clouds;
var autoestima,bob_standing;
var kevin,keving_punch;
var bob_kick;
var fondo;
var gamestate=0;
var ob1,ob2,ob3;
var OBS;
var A, B;
var Bluegroup, Purplegroup;

function preload()
{
Bob=loadAnimation("Stickman_1.png","Stickman_1.5.png","Stickman_2.png");
clouds=loadImage("storm-clouds-from-above.jpg");
ob1=loadImage("Base_1.png");
ob2=loadImage("False_base.png");
ob3=loadImage("Base_Broken.png");
Bob_jumps=loadAnimation("Jumping.png");
Bob_slides=loadAnimation("Sliding.png")
}




function setup()
{  
createCanvas(800,600);
console.log(windowWidth)
fondo=createSprite(600,400,1200,800);
Original_Bob=createSprite(200,50,10,50);
Original_Bob.addAnimation("Running",Bob);
Original_Bob.scale=.1;
kevin=createSprite(50,350,20,500);
fondo.addImage(clouds);
Original_Bob.addAnimation("Jump",Bob_jumps);
A=createSprite(400,300,500,10);
B=createSprite(400,580,1200,20);
B.visible=false;
Original_Bob.addAnimation("Slides",Bob_slides);
Bluegroup=new Group();
Purplegroup=new Group();
Original_Bob.debug=true;
Original_Bob.setCollider("rectangle",0,0,100,00);
}



function draw()
{
background("white");
fondo.velocityX=-3;
if(fondo.x<0)
{
    fondo.x=fondo.width/2;
}

Bases();
Purplegroup.collide(Original_Bob);

if(keyDown("up"))
{
Original_Bob.velocityY=-10;
Original_Bob.changeAnimation("Jump",Bob_jumps);
}

if(keyDown("right"))
{
Original_Bob.x+=5
Original_Bob.changeAnimation("Running",Bob);
}

if(keyDown("left"))
{
Original_Bob.x-=5
Original_Bob.changeAnimation("Slides",Bob_slides);
}


Original_Bob.velocityY=Original_Bob.velocityY+1;

Original_Bob.collide(A);
//Original_Bob.collide()

A.velocityX=-3;

drawSprites();
}

/*if(keyDown("space"))//&&T_rex.y>=330)
{
Original_Bob.velocityY=-20;
Original_Bob.changeAnimation("Jumping",Bob_jumps);
}*/

//Original_Bob.velocityY=Original_Bob.velocityY+1;//La gravedad



function mousePressed()
{
gamestate=1;
//fondo.velocityX=-1;
console.log("holalalalallalal")
}

function Bases()
{
    if(frameCount%80==0){
OBS=createSprite(700,200,200,10);
OBS.setCollider("rectangle",0,0,50,5);
OBS.debug=true
OBS.scale=.1
OBS.velocityX=-2;
//Original_Bob.collide(OBS);
OBS.y=Math.round(random(300,400));  
var rand=Math.round(random(1,2));  
Purplegroup.add(OBS);
  switch(rand)
  {
case 1:OBS.addImage(ob1);
break;
case 2:OBS.addImage(ob2);
break;
default:break;
  }
}


 }