
var r1 , r2, r3 ; 

function setup(){
  createCanvas(800,400);

  r1  = createSprite(400,200,50,50);

  r2  = createSprite(600,100,30,80);

  r3  = createSprite(50,50,150,50);

}

function draw(){

  background(200);

  r2.x  = mouseX;
  r2.y = mouseY;


 if(ourownisTouching(r3,r2)){
   r2.shapeColor  = "blue"
 }
 else{
   r2.shapeColor  = "grey";
 }

drawSprites()


}




