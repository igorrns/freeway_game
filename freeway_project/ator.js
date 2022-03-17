let xAtor = 85;
let yAtor = 366;

let colisao = false;

let = meusPontos = 0;

function mostrarAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentoAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < 366) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      alturaCarros,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaPosicao();
      somDacolisao.play();
      if (meusPontos > 0) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaPosicao() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPontos() {
  if (yAtor <= 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaPosicao();
  }
}
