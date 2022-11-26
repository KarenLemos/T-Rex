let trex, trex_andando;
let solo, soloImg, soloInvisivel;


function preload(){
    // trex_parado = loadAnimation("imagens/trex1.png");
    trex_andando = loadAnimation("imagens/trex1.png", "imagens/trex2.png", "imagens/trex3.png");
    soloImg = loadImage("imagens/ground.png");
}

function setup(){
    createCanvas(700,200);

    solo = createSprite(170,180,350,20);
    solo.addImage(soloImg);
    soloInvisivel = createSprite(170,200,350,20);
    soloInvisivel.visible = false;
    
    trex = createSprite(40,180,20,50);
    trex.addAnimation("trex andando", trex_andando);
    // trex.addAnimation("trex parado", trex_parado);
    trex.scale = 0.5;
}

function draw(){
    background("white");
    
    if(keyDown("space") && trex.y >= 166){
        trex.velocityY = -15;
        
    }
    // if(trex.y < 166){
    //     trex.changeAnimation(trex_parado);
    // }
    trex.velocityY += 1;

    solo.velocityX = -8; 
    if(solo.x < 0){
        solo.x = solo.width/2;
    }

    trex.collide(soloInvisivel);

    drawSprites();
}
