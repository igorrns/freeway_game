let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarros() {
  for (let i = 0; i < imagensCarros.length; i++) {
    image(
      imagensCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      alturaCarros
    );
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagensCarros.length; i++)
    xCarros[i] -= velocidadeCarros[i];
}

function voltaCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    if (xCarros[i] < -50) {
      xCarros[i] = 600;
    }
  }
}
