var fixedRect, object1, object2, object3, object4, movingRect;
 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  Object1= createSprite(100,100,50,50);
  Object1.shapeColor="green";

  Object2= createSprite(200,100,50,50);
  Object2.shapeColor="green";

  Object3= createSprite(300,100,50,50);
  Object3.shapeColor="green";

  Object4= createSprite(400,100,50,50);
  Object4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
if(isTouching(Object1,movingRect)){
  Object1.shapeColor="blue";
  movingRect.shapeColor="blue";
}

if(isTouching(Object2,movingRect)){
  Object2.shapeColor="blue";
  movingRect.shapeColor="blue";
}

if(isTouching(Object3,movingRect)){
  Object3.shapeColor="red";
  movingRect.shapeColor="red";
}

if(isTouching(Object4,movingRect)){
  Object4.shapeColor="pink";
  movingRect.shapeColor="pink";
}

if(isTouching(fixedRect, movingRect)) {
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor = "yellow";
}
  
  drawSprites();
}

function isTouching(o1, o2){
  if (o1.x - o2.x < o1.width/2 + o2.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - fixedRect.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
  return true;
}
else {
return false;
}
}

