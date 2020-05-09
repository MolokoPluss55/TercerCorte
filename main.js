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
	
	myCanvas = createCanvas(1280,630, WEBGL);
	myCanvas.parent("contenedor");
	myCanvas.position(0,0);
	rowCount = table.getRowCount();
 	const row = table.getRows(); 
 	var link1 = createA('jessicacifuentes.html', 'Total Vehículos');
 	var link2 = createA('localidades.html', 'Localidades Mas Pobladas');
 	crearBotonLink(link1,150);
 	crearBotonLink(link2,200);
 	//LEER DATOS DE TABLA
 	for(var i = 0; i < rowCount; i++){
 		textoTiempo[i] = row[i].getString("tiempo");
 		totalVehiculos[i] = row[i].getNum("total");
 		mapeoCantidad[i] = map(totalVehiculos[i],1392930, 2315250, 10, 70);
 		//rgb(1, 220, 200)
 		anios[i] = new textoAnio(-510,150,30,textoTiempo[i],47, 214, 200);
 		textoCantidad[i] = new textoAnio(110, 250,20, "Total: "+totalVehiculos[i], 47, 214, 200);
 		console.log(anios[i]);
 	}

 	slider = createSlider(0, (totalVehiculos.length-1), 0, 1); //(min, max, start)
  	slider.position(60, 500);
  	slider.style('width', '200px');

  	
  	
	var incre = -50;
	textFont(nunito);
	 for(var i = 0; i < 70; i++){
     globulos[i] = new carro(0.03, random(-50, 50),47, 214, 200); 
     var comi = i;
     incre-=10;
  	}

  btn1 = createButton("Encender Sonido");
  btn1.mousePressed(togglePlaying);
  btn1.position(110, 550);
}

function draw() {
	background("#181b28");
	noStroke();
	fill("#1f2333");
	square(-680, -320, 370, 650);

	fill("#333954");
	square(-680, -180, 370, 50);
	fill("#2b3047");
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
			globulos[i].r = 47;
			globulos[i].g = 214;
			globulos[i].b = 200;

  		}

	}

	else if(numero >= 41 && numero <= 61)
	{
		for(var i = 0; i < globulos.length; i++){
		 
			globulos[i].r = 255;
			globulos[i].g = 130;
			globulos[i].b = 70;	
  		}

	}
	else {
		for(var i = 0; i < globulos.length; i++){
			globulos[i].r = 252; 
			globulos[i].g = 98;
			globulos[i].b = 139;
  		}
	}
		

}

function cambiarTexto(numero){
	if(numero >= 10 && numero <= 40){
		for(var i = 0; i < anios.length; i++){
			anios[i].r = 47;
			anios[i].g = 214;
			anios[i].b = 200;
			textoCantidad[i].r = 47;
			textoCantidad[i].g = 214;
			textoCantidad[i].b = 200;

  		}

	}

	else if(numero >= 41 && numero <= 61)
	{
		for(var i = 0; i <  anios.length; i++){
			anios[i].r = 255;
			anios[i].g = 130;
			anios[i].b = 70;
			textoCantidad[i].r = 255;
			textoCantidad[i].g = 130;
			textoCantidad[i].b = 70;
  		}

	}
	else {
		for(var i = 0; i <  anios.length; i++){
			anios[i].r = 252; 
			anios[i].g = 98;
			anios[i].b = 139;
			textoCantidad[i].r = 247;
			textoCantidad[i].g = 98;
			textoCantidad[i].b = 139;
  		}
	}
		

}

function crearBotonLink(botonLink,  poxY){
	botonLink.parent("contenedor");
	botonLink.position(75,poxY);
	botonLink.style('color','#ffffff');
	botonLink.style('font-family','ProximaNova');
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