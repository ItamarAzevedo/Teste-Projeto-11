var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

//Criando menino que corre 
boy=createSprite(180,340,30,30);
boy.addImage(" JakeRunning",boyImg);
boy.scale=0.8;

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
Boundary=createSprite(410,0,100,800);
leftBoundary.visible = false;
}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);



 //Reiniciar o fundo
 if(path.y>400){
     path.y=height/2
 }



 drawSprites();

 }




