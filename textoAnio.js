class textoAnio
{
	constructor(x, y, size, texto, r, g, b){
		this.x = x;
		this.y = y;
		this.size = size;
		this.texto = texto;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	mostrar()
	{
		noStroke();
		fill(this.r, this.g, this.b);
    	textSize(this.size);  
    	text(this.texto, this.x, this.y);
	}
}