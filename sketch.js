var background, background2,form,code,security,puzzles;
var score=0;

function preload(){
background1=loadImage("background.jpeg");
background3=loadImage("background3.jpeg")
}

function setup(){
    createCanvas(1000,500);
    puzzles=new Puzzle()
    security=new Security()

}

function draw(){
    background(background1);
    code();
    security.display();
    fill("white");
    text("Score:"+score,450,50);

    if(score === 3) {
        clear()
        background(background3);
        fill("black")
        textSize(40);
        text("PUZZLE COMPLETED",250,200);
    }
    drawSprites()

}