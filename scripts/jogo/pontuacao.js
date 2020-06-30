class Pontuacao {
  constructor(){
  this.pontos = 0;
  }

  exibirPontos(){
  textAlign(RIGHT);
  fill('#fff')
  textSize(25);
  text('Pontos: '+ pontos, width - 30, 50)
  text('LEVEL 1', width/2, 50)
  }
  
  pontuar(){
  this.pontos = this.pontos + this.pontos;
  }

  despontuar(){
    this.pontos = this.pontos - 20;
  }
}