class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = memory.mapa;
    }

    setup() {
        if (somDoJogo.isPlaying()) {
            somDoJogo.stop();
          } else {
            somDoJogo.setVolume(0.1);
            somDoJogo.play();
          }

        bamboo = new Silhuetas(imagemBamboo, 5 , 0,300, height);
        bamboo2 = new Silhuetas(imagemBamboo2, 8 , 0,400, height);
        silhueta = new Silhuetas(imagemSilhueta, 8, (70 * height) / 100,width + 100, height / 3);
        cenario = new Cenario(imagemCenario, 4);
        pontuacao = new Pontuacao();
        shuriken = new Shurikens(5, 5);
        vida = new Vida(memory.configuracoes.vidamaxima, memory.configuracoes.vidainicial);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 180, 60, 110, 135, 180, 215);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 65, 52, 52, 104, 104, 10);

        const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width - 52, 200, 100, 75, 200, 150, 10);

        const troll = new Inimigo(matrizTroll, imagemTroll, width, 40, 250, 250, 400, 400, 15);

        plataforma = new Plataformas(matrizPlataforma, imagemPlataforma, width + 552, 300, 300, 100, 1600, 320, 8, 1000);

        kunai = new Plataformas(matrizPlataforma, imagemShuriken, width, height/3 * 2, 40, 40, 863, 561, 8, 1000);

        inimigos.push(inimigo);
        inimigos.push(troll);
        inimigos.push(gotinhaVoadora);

        plataformas.push(plataforma);
        kunais.push(kunai);

    }


    draw() {
        somFloresta.play();
        cenario.exibe();
        cenario.move();

        bamboo.exibe();
        bamboo.move();
        personagem.exibe();
        personagem.aplicarGravidade();

        this.mostrarShuriken();

        let linhaAtual = this.mapa[this.indice];
        let inimigo = inimigos[linhaAtual.inimigo];
        let inimigoVisivel = inimigo.x < -inimigo.largura;
        inimigoGlobal = inimigo;

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        silhueta.exibe();
        silhueta.move();
           
        bamboo2.exibe();
        bamboo2.move(); 


        if (inimigoVisivel) {
            pontos += 2;
            pontuacao.pontuar()
        }

        for (let i = 0; i < bullets.length; i++) {
            let blt = bullets[i];
            //console.log(bullets[i].centerX)
            let xPosBullet = bullets[i].centerX;
            if (xPosBullet > width) {
                bullets.splice(i, 1);
            }
            if (inimigo.baleado(blt)) {
                inimigo.desaparece();
                bullets.splice(i, 1)
                acerto.play();
                pontos += 20;
            }

        }

        if(inimigo.largura==250){
            trollSoundDash.volume(0.2);
            trollSoundDash.play();
        }

        if (inimigo.x <= 700 && inimigo.x >= 640) {
            let velocidadeAntiga = this.mapa[this.indice].velocidade;
            this.mapa[this.indice].velocidade += this.velocidadeDash(1,15);
            if(inimigo.largura == 52){
            slimeDash.play();
            }
            setTimeout(() => {
                this.mapa[this.indice].velocidade = velocidadeAntiga;
            }, 200)
        }


        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }



        if (personagem.verificarColisao(inimigo)) {
            vida.perdeVida();
            personagem.ficaInvencivel();
            if (vida.vidas === 0) {
                image(imagemGameOver, width / 2 - 200, height / 3);
                somDoJogo.stop();
                somRun.stop();
                noLoop();
            }

        }


        kunais.forEach(kunai => {
            kunai.exibe();
            kunai.move();
            if(personagem.verificarColisao(kunai)){
                kunais.splice(0,1);
                shuriken.ganhaShuriken();
            }
        })

        
        plataformas.forEach(plataforma => {
            plataforma.exibe();
            plataforma.move();
        })


        vida.draw();
        shuriken.draw();
        pontuacao.exibirPontos();
        pontuacao.pontuar();
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pular();
        }
        if (key === 'ArrowRight') {
            if (shuriken.shurikens != 0) {
                personagem.disparar();
            }
        }
    }

    mostrarShuriken() {
        for (let i = 0; i < bullets.length; i++) {
            let blt = bullets[i];
            blt.show();
        }
    }

    velocidadeDash(max,min){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}

