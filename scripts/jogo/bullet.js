class bullet {
	constructor(x, y, height, scale, speed){
		this.scale = scale;
		this.speed = speed;
		this.bodyHeight = height;
		this.bodyWidth = 5*this.scale;
        this.init(x, y);
        
	}

	init(x, y){
		this.centerX = x;
		this.centerY = y;
		this.body();

	}

	body(){
		this.bodyX1 = this.centerX - this.bodyWidth/2;
		this.bodyY1 = this.centerY + this.bodyHeight/2;
		this.bodyX2 = this.centerX + this.bodyWidth/2;
        this.bodyY2 = this.centerY - this.bodyHeight/2;
        let bodyx1let = this.bodyX1;
    }

	show(){
		this.centerX += this.speed;
		this.init(this.centerX, this.centerY);
        image(imagemShuriken, this.bodyX1,this.bodyY1,40,40);
	}


}