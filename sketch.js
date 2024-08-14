function setup() {
  createCanvas(4000, 1000);//cria uma página em branco 
 background("lightgreen");//muda cor de fundo 
}
function draw() {
  stroke("black")
 
  fill("purple");
  

  if(mouseIsPressed){
    rect(mouseX,mouseY,10,10);//cria um retângulo(Posição x, posição y, largura,altura) 
}
}
