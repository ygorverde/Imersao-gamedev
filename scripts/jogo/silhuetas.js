class Silhuetas{
    constructor(imagem, velocidade, posY,largura, height){
        this.posY = posY;
        this.height = height;
      this.imagem = imagem;
      this.velocidade = velocidade;
      this.x1 = 0;
      this.x2 = width;
      this.largura = largura;
      }


        exibe(){
        image(this.imagem, this.x1,this.posY, this.largura, this.height);
        image(this.imagem, this.x2, this.posY, this.largura, this.height);
      }
      
      move(){
    
        this.x1 = this.x1 - this.velocidade;
        this.x2 = this.x2 - this.velocidade;
        
        if(this.x1 < -width){
          this.x1=width;
      }
         if(this.x2 < -width){
          this.x2=width;
      }
        
        
      } 
    }