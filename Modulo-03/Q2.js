class Bola {
constructor(x, y, cor){
this.x = x;
this.y = y;
this.cor = cor;
}
desenhar(){
noStroke();
fill(this.cor);
ellipse(this.x, this.y, 50, 50);
}
mover(){
this.x = this.x + 10;
this.y = this.y + 10;
}
}
let bolinha1 = new Bola(0, 100, "purple");
function setup() {
createCanvas(400, 400);
}
function draw() {
background(220);
bolinha1.desenhar();
bolinha1.mover();
}
