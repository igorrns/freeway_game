
function setup() {
  createCanvas(500, 400);
  somDatrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  movimentoAtor();
  mostraCarros();
  movimentaCarro();
  voltaCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}
