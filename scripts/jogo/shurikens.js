class Shurikens {
    constructor(total, inicial){
    this.total = total;
    this.inicial = inicial;
    this.shurikens = this.inicial;
    this.largura = 50
    this.altura = 50
    this.xInicial = 20;
    this.y = 55;
    }
    
    draw (){
        for(let i = 0; i < this.shurikens; i++){
            const margem = i * 30;
            const posicao = this.xInicial * (i + 1);
            image(imagemShuriken, posicao + margem, this.y, this.largura, this.altura);
        }
    }
    
    ganhaShuriken(){
        if(this.shurikens <= this.total){
            this.shurikens ++;
        }
    }
    
    perdeShuriken(){
        this.shurikens --;
    }

    
    }