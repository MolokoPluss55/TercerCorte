var globulos = [];
var anios = [];
var table;
var textoTiempo = [];
var textoCantidad = [];
var rowCount;
var maxDato = 0;
var totalVehiculos = [];
var mapeoCantidad = [];
var cantidad; 
var sonido;
var volumen = 0.2;
var musicaSonando = true;
var btn1;
var slider;

class total
{
	constructor() {
		this.rowCount = table.getRowCount();
 		this.row = table.getRows(); 
 		this.globulos = [];
		this.anios = [];
		this.table;
		this.textoTiempo = [];
		this.textoCantidad = [];
		this.rowCount;
		this.maxDato = 0;
		this.totalVehiculos = [];
		this.mapeoCantidad = [];
		this.cantidad; 
		this.sonido;
		this.volumen = 0.2;
		this.musicaSonando = true;
		this.btn1;
	}
	cargar() {
		this.rowCount = table.getRowCount();
 		this.row = table.getRows(); 
		for(var i = 0; i < this.rowCount; i++){
	 		this.textoTiempo[i] = this.row[i].getString("tiempo");
	 		this.totalVehiculos[i] = this.row[i].getNum("total");
	 		this.mapeoCantidad[i] = map(this.totalVehiculos[i],1392930, 2315250, 10, 70);
	 		//rgb(1, 220, 200)
	 		this.anios[i] = new textoAnio(-200,150,30,this.textoTiempo[i],47, 214, 200);
	 		this.textoCantidad[i] = new textoAnio(-240, 190,20, "Total: "+this.totalVehiculos[i], 47, 214, 200);
			 console.log(this.anios[i]);
			
 		}

 		slider = createSlider(0, (this.totalVehiculos.length-1), 0, 1); //(min, max, start)
  		slider.position(900, 510);
		slider.style('width', '200px');
		slider.parent("contenedor");

		this.btn1 = createButton("Encender Sonido");
  			this.btn1.mousePressed(togglePlaying(this.btn1, sonido, this.volume));
			  this.btn1.position(950, 470);
			  this.btn1.parent("contenedor");

  		for(var i = 0; i < 70; i++){
	     	this.globulos[i] = new carro(0.03, random(-90, 0),47, 214, 200); 
	     	
  		}
	}

	mostrar() {
		var valorSlider = slider.value();
  		for(var i = 0; i < this.totalVehiculos.length; i++){
	  		switch(valorSlider){
	  		case i: 
	  			this.cantidad = this.mapeoCantidad[i];
	  			this.anios[i].mostrar();
	  			this.textoCantidad[i].mostrar();
	  			this.volumen = map(valorSlider, 0, 9, 0.1, 0.9);
	  			cambiarColor(this.cantidad, this.globulos);
				  cambiarTexto(this.cantidad, this.textoCantidad, this.anios);
				var titulo = new textoAnio(-100, -180,24, "TOTAL 2010 - 2017", 52,53,79);
				titulo.mostrar();
  			}
		}

		sonido.setVolume(this.volumen);
		for(var i = 0; i < this.cantidad; i++)
		{
	     	push();
	     	this.globulos[i].mostrar();
	     	pop();
	     	this.globulos[i].actualizar();
  	 	}
	}

	
}

function cambiarColor(numero, globs){
		if(numero >= 10 && numero <= 40){
			for(var i = 0; i < globs.length; i++){
				globs[i].r = 247;
				globs[i].g = 152;
				globs[i].b = 123;
				console.log("aaa1");
	  		}
	}

	else if(numero >= 41 && numero <= 61)
	{
		for(var i = 0; i < globs.length; i++){
		 
			globs[i].r = 214;
			globs[i].g = 117;
			globs[i].b = 108;	
			console.log("aaa2");
  		}

	}
	else {
		for(var i = 0; i < globs.length; i++){
			globs[i].r = 221; 
			globs[i].g = 95;
			globs[i].b = 80;
  		}
	}
}

function modificarAudio() 
{
  //escriba en la consola 
	if(musicaSonando){
		musicaSonando = false;
		console.log(musicaSonando);
	}	
	else {
		musicaSonando = true;
		console.log(musicaSonando);
	}
}

function cambiarTexto(numero, textis, anis){
	if(numero >= 10 && numero <= 40){
		for(var i = 0; i < anis.length; i++){
			anis[i].r = 247;
			anis[i].g = 152;
			anis[i].b = 123;
			textis[i].r = 247;
			textis[i].g = 152;
			textis[i].b = 123;

  		}

	}

	else if(numero >= 41 && numero <= 61)
	{
		for(var i = 0; i <  anis.length; i++){
			anis[i].r = 214;
			anis[i].g = 117;
			anis[i].b = 108;
			textis[i].r = 214;
			textis[i].g = 117;
			textis[i].b = 108;
  		}

	}
	else {
		for(var i = 0; i <  anis.length; i++){
			anis[i].r = 221; 
			anis[i].g = 95;
			anis[i].b = 80;
			textis[i].r = 221;
			textis[i].g = 95;
			textis[i].b = 80;
  		}
	}
		

}

function togglePlaying(boton, soni, volum) {
	if(soni.isPlaying()) {
		soni.pause();
		console.log("Holi");
		boton.html("Encender Sonido");
	}
	else {
		soni.setVolume(volum);
		soni.play();
		boton.html("Apagar Sonido");
	}
}
