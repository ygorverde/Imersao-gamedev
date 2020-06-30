class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaPulo = -50;
    this.pulos = 0;
    this.xShuriken = this.x;
    this.invencivel = false;
    this.slc = windowWidth * 0.4 / 1900;
    this.yChao = this.yInicial;
    this.matriz = matriz;
    this.grama = this.y;
  }



  pular() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaPulo;
      this.pulos++
      somPulo.setVolume(0.3)
      somPulo.play();
    }
  }

  aplicarGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;

    }
    if(this.y === this.grama){
      somRun.play();
    }else{
      somRun.stop();
    }
    if(this.verificarColisao(plataforma) == true && this.y <= plataforma.y){
      this.y = plataforma.variacaoY - plataforma.altura/5;
      this.yInicial = plataforma.variacaoY;
    }else{
      this.yInicial = this.yChao;
    }
  }

  verificarColisao(inimigo) {
    if (this.invencivel) {
      return false;
    }
    this.xInimigo = inimigo.x;
    this.yInimigo = inimigo.y;
    this.larguraInimigo = inimigo.largura;
    this.alturaInimigo = inimigo.altura;
    noFill();
    const precisao = .7
      if(inimigo.largura == 250){
        this.xInimigo = this.xInimigo + 90;
        this.yInimigo = this.yInimigo + 30;
        this.larguraInimigo = this.larguraInimigo - 100;
        this.alturaInimigo = this.alturaInimigo - 50;
      }
      if(inimigo.largura == 300){
        this.xInimigo = this.xInimigo + 20;
        this.yInimigo = this.yInimigo + 25;
        this.larguraInimigo = this.larguraInimigo - 50;
        this.alturaInimigo = this.alturaInimigo - 50;
      }
      //  rect(this.xInimigo, this.yInimigo, this.larguraInimigo, this.alturaInimigo, 100);
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      this.xInimigo,
      this.yInimigo,
      this.larguraInimigo,
      this.alturaInimigo,
      100
    );
    return colisao;
  }

  ficaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }

  disparar() {
    bullets.push(new bullet(this.x, this.y + 50, 10, 3, 25));
    console.log(shuriken.shurikens);
    shuriken.perdeShuriken();
    efeitoArremesso.play();
  }


}