class vena 
{
	constructor(altura, posX, posY)
	{

		this.radio = 40;
		this.height = altura;
		this.detalleX = 10;
		this.detailY = 1; 
		this.posX = posX;
		this.posY = posY;
	}

	mostrar(){
		noFill();
		stroke(255);
		strokeWeight(1);
		translate(this.posX, this.posY , 0);
		rotateY(millis() / 1000);
		cylinder(this.radio, this.height, this.detalleX, this.detailY, false, false);
	}

}