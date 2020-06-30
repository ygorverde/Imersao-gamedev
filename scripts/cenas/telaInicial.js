class TelaInicial {
constructor(){

}

draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
}

_imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
    image(imagemPergaminho, 0, 0, width/4, height/2);
}

_texto(){
    textFont(fonteTelaInicial)
    textSize(20);
    textAlign(CENTER)
    text('Jogo em constante desenvolvimento', width/2,height / 6);
    textAlign(CENTER)
    textSize(50);
    text('Adventures of', width/2, height / 3);
    textSize(150);
    text('Konin', width/2, height / 5 * 3);
}

_botao(){
    botaoGerenciador.y = height / 7 * 5;    
    botaoGerenciador.draw();
}

}