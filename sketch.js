 var garden,rabbit;
 var gardenImg,rabbitImg;
 var apple, appleImg;
 var orangeImg;
 var redImg;
 var orange;
 var redl;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangLeaf.png");
  redImg = loadImage("redImage.png");

 }

 function setup(){
  if(keyDown("right")){
    rabbitImg.x = rabbitImg.x + 2;
  }
  if(keyDown("left")){
    rabbitImg.x = rabbitImg.x - 2;
  }
  createCanvas(400,400);
  
// Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 //creating boy running
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
 }

function draw() {
  background(0);

  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();

  drawSprites();
  var select_sprites = Math.round(random(1,2)); 

  if (frameCount % 80 == 0){
  if (select_sprites == 1) {
   createApples();
   } else if(select_sprites == 2) {
   createOranges();
   }
   else{
   createRed();
   }


  }
}

function createApples() {
  apple = createSprite(random(50, 350),40,10,10);
  apple = loadImage(appleImg);
  apple.scale = 0.08;
  apple.velocityY = 3;
  apple.lifetime = 150;
   }

   function createOranges() {
    orange = createSprite(random(50, 350),40,10,10);
    orange = loadImage(orangeImg);
    orange.scale = 0.08;
    orange.velocityY = 3;
    orange.lifetime = 150;
     }

     function createRed() {
      redl = createSprite(random(50, 350),40,10,10);
      redl = loadImage(redImg);
      redl.scale = 0.08;
      redl.velocityY = 3;
      redl.lifetime = 150;
       }