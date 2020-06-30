function preload() {
    imagemTelaInicial = loadImage('imagens/cenario/background.jpg'); 
    imagemCenario = loadImage('imagens/cenario/fundo.png');
    imagemSilhueta = loadImage('imagens/cenario/silhueta.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/sprite.png');
    imagemShuriken = loadImage('imagens/assets/shuriken.png');
    imagemPergaminho = loadImage('imagens/cenario/pergaminho.png');
    imagemPlataforma = loadImage('imagens/cenario/plataforma.png');
    imagemVida = loadImage('imagens/assets/coracao.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemTroll = loadImage('imagens/inimigos/troll.png');
    imagemBamboo = loadImage('imagens/cenario/bamboo.png');
    imagemBamboo2 = loadImage('imagens/cenario/bamboo2.png');
    imagemGotinhaVoadora = loadImage('imagens/inimigos/gotinha-voadora.png');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    memory = loadJSON('memory/memory.json')
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somFloresta = createAudio('sons/floresta.mp3')
    trollSoundDash = createAudio('sons/trollSoundDash.mp3')
    slimeDash = createAudio('sons/slimeDash.mp3')
    somRun = createAudio('sons/run.mp3');
    efeitoArremesso = loadSound('sons/arremessoShuriken.mp3');
    somPulo = loadSound('sons/somPulo.mp3');
    acerto = loadSound('sons/acerto.mp3');

  }