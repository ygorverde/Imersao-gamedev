class Inimigo extends Animacao {
constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,velocidade){
super(matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite);
   this.velocidade = velocidade;
  this.x = width;
  this.largura = largura;
  this.altura = altura;
  this.variacaoY = variacaoY;
}
  
  move(){
  this.x = this.x - this.velocidade;
  }

  aparece(){
    this.x = width;
  }

  desaparece(){
    this.x = - width;
  }

  baleado(bullet) {
    noFill();
    const precisao = .7
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      bullet.centerX,
      bullet.centerY,
      bullet.bodyWidth * 2,
      bullet.bodyHeight * 4
    );
    return colisao;
  }


}
