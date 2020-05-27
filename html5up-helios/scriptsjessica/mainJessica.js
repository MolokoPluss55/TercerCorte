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

function preload()
{
	nunito = loadFont('fuentes/Proxima_Nova_Bold.otf');
	table = loadTable("data/vehiculosBogota.csv", "header");
	soundFormats('ogg', 'mp3');
  	sonido = loadSound('assets/trafico.mp3');
}


function setup()

//rgb(238, 241, 250)
{
	
	myCanvas = createCanvas(1220,630, WEBGL);
	myCanvas.parent("hola");
	//myCanvas.position(0,0);
	rowCount = table.getRowCount();
 	const row = table.getRows(); 
 	var link1 = createA('total.html#hola', 'Total Vehículos', "_self");
 	var link2 = createA('porLocalidad.html#hola2', 'Localidades Mas Pobladas', "_self");
 	crearBotonLink(link1,510);
 	crearBotonLink(link2,560);
 	//LEER DATOS DE TABLA
 	for(var i = 0; i < rowCount; i++){
 		textoTiempo[i] = row[i].getString("tiempo");
 		totalVehiculos[i] = row[i].getNum("total");
 		mapeoCantidad[i] = map(totalVehiculos[i],1392930, 2315250, 10, 70);
 		//rgb(1, 220, 200)
 		anios[i] = new textoAnio(-500,80,30,textoTiempo[i],47, 214, 200);
 		textoCantidad[i] = new textoAnio(110, 250,20, "Total: "+totalVehiculos[i], 47, 214, 200);
 		console.log(anios[i]);
 	}

 	slider = createSlider(0, (totalVehiculos.length-1), 0, 1); //(min, max, start)
  	slider.position(120, 790);
  	slider.style('width', '200px');
  	slider.parent("hola");

  	
	var incre = -50;
	textFont(nunito);
	 for(var i = 0; i < 70; i++){
     globulos[i] = new carro(0.03, random(-50, 50),47, 214, 200); 
     var comi = i;
     incre-=10;
  	}

  btn1 = createButton("Encender Sonido");
  btn1.mousePressed(togglePlaying);
  btn1.position(130, 900);
  btn1.parent("hola");
}

function draw() {
	background("#111111");
	noStroke();
	fill("#262626");
	square(-680, -320, 370, 650);

	fill("#2e2e2e");
	square(-680, -180, 370, 50);
	fill("#383838");
	square(-680, -130, 370, 50);
	
	//square(-680, -320, 370, 650);

	var valorSlider = slider.value();
  	for(var i = 0; i < totalVehiculos.length; i++){
  		switch(valorSlider){
  		case i: 
  			cantidad = mapeoCantidad[i];
  			anios[i].mostrar();
  			textoCantidad[i].mostrar();
  			volumen = map(valorSlider, 0, 9, 0.1, 0.9);
  			cambiarColor(cantidad);
  			cambiarTexto(cantidad);
  		}

  	}


	sonido.setVolume(volumen);
	
	 for(var i = 0; i < cantidad; i++)
	 {
     	push();
     	globulos[i].mostrar();
     	pop();
     	globulos[i].actualizar();


  	 }
  	 fill("#FFFFFF");
  	 textSize(36);
  	 text("TOTAL DE VEHÍCULOS",20, -210);
  	

}


function cambiarColor(numero){
	if(numero >= 10 && numero <= 40){
		for(var i = 0; i < globulos.length; i++){
			globulos[i].r = 82;
			globulos[i].g = 145;
			globulos[i].b = 255;

  		}

	}

	else if(numero >= 41 && numero <= 61)
	{
		for(var i = 0; i < globulos.length; i++){
		 
			globulos[i].r = 255;
			globulos[i].g = 94;
			globulos[i].b = 82;	
  		}

	}
	else {
		for(var i = 0; i < globulos.length; i++){
			globulos[i].r = 240; 
			globulos[i].g = 29;
			globulos[i].b = 36;
  		}
	}
		

}

function cambiarTexto(numero){
	if(numero >= 10 && numero <= 40){
		for(var i = 0; i < anios.length; i++){
			anios[i].r = 82;
			anios[i].g = 145;
			anios[i].b = 255;
			textoCantidad[i].r = 82;
			textoCantidad[i].g = 145;
			textoCantidad[i].b = 255;

  		}

	}

	else if(numero >= 41 && numero <= 61)
	{
		for(var i = 0; i <  anios.length; i++){
			anios[i].r = 255;
			anios[i].g = 94;
			anios[i].b = 82;
			textoCantidad[i].r = 255;
			textoCantidad[i].g = 94;
			textoCantidad[i].b = 82;
  		}

	}
	else {
		for(var i = 0; i <  anios.length; i++){
			anios[i].r = 240; 
			anios[i].g = 29;
			anios[i].b = 36;
			textoCantidad[i].r = 240;
			textoCantidad[i].g = 29;
			textoCantidad[i].b = 36;
  		}
	}
		

}

function crearBotonLink(botonLink,  poxY){
	botonLink.parent("hola");
	botonLink.position(110,poxY);
	botonLink.style('color','#ffffff');
	botonLink.style('font-family','ProximaNova');
	botonLink.style('font-size','16px');
	botonLink.style('text-decoration','none');
}

//cuando se oprime el botón btn
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

function togglePlaying() {
	if(!sonido.isPlaying()) {
		sonido.setVolume(volumen);
		sonido.play();
		btn1.html("Apagar Sonido");
	}
	else {
		sonido.pause();
		console.log("Holi");
		btn1.html("Encender Sonido");
	}
}