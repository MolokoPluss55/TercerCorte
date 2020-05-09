var carroKennedy = [];
var carroSuba = [];
var carroEngativa = [];
var carroBosa = [];
var table;
var textoLocalidad = [];
var textoCantidad = [];
var textoAutomovil = [];
var textoMoto = [];
var localidades = []; 
var rowCount;
var totalVehiculos = [];
var totalAutos = [];
var totalMotos = [];
var mapeoCantidad = [];
var mapeoAutos = [];
var mapeoMotos = [];
var cantidad; 
var kennedy;
var bosa;
var engativa;
var suba;
var opcion;
var checkbox;
var checkbox1;
var checkbox2;
var checkbox3;
var mostarEng = true;
var mostarSuba = true;
var mostarBosa = true;
var mostarKen = true;
var correrX = -80;


function preload()
{
	nunito = loadFont('fuentes/Proxima_Nova_Bold.otf');
	table = loadTable("data/vehiculosSegmentados.csv", "header");
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
	textFont(nunito);
 	const row = table.getRows(); 
 	var link1 = createA('jessicacifuentes.html', 'Total Vehículos');
 	var link2 = createA('localidades.html', 'Localidades Mas Pobladas');
 	crearBotonLink(link1,150);
 	crearBotonLink(link2,200);
 	kennedy = new vena(250,-50,0);
 	bosa = new vena(250,100,0);
 	engativa = new vena(250,250,0);
 	suba = new vena(250,400,0);


 	//LEER DATOS DE TABLA
 	for(var i = 0; i < rowCount; i++){
 		textoLocalidad[i] = row[i].getString("localidad");
 		totalVehiculos[i] = row[i].getNum("total");
 		totalAutos[i] = row[i].getNum("automovil");
 		totalMotos[i] = row[i].getNum("moto");
 		mapeoCantidad[i] = map(totalVehiculos[i],60681, 241982, 20, 100);
 		mapeoAutos[i] = map(totalAutos[i],27471, 117280, 10, 50);
 		mapeoMotos[i] = map(totalMotos[i],33210, 124702, 20, 80);
 		textoCantidad[i] = new textoAnio(correrX, 250,20, totalVehiculos[i], 47, 214, 200);
 		textoAutomovil[i] = new textoAnio(correrX, 250,20, totalAutos[i], 47, 214, 200);
 		textoMoto[i] = new textoAnio(correrX, 250,20, totalMotos[i], 47, 214, 200);

 		localidades[i] = new textoAnio(correrX,200,18,textoLocalidad[i].toUpperCase(),255,255,255);

 		correrX+=150;

 	}


 	for(var i = 0; i < 100; i++){

  		carroKennedy[i] = new vehiculo(random(70, 120), 41, 202, 191);
  		carroSuba[i] = new vehiculo(random(-80, -20), 41, 202, 191);
  		carroEngativa[i] = new vehiculo(random(220, 280), 41, 202, 191);
  		carroBosa[i] = new vehiculo(random(380, 420), 41, 202, 191);
  	}

	  //variable del selector de opciones
	  sel = createSelect();
	  sel.position(70, 500);
	  sel.style("width", "500");
	  sel.option('Total');
	  sel.option('Automóviles');
	  sel.option('Motos');
	  	  //cuando se selecciona una opción llama a la funcion mySelectEvent
	  //variable de checkbox 
  	  checkbox1 = createCheckbox('Engativa', true); //palabra al lado del checkbox
  	  checkbox2 = createCheckbox('Suba', true);
  	  checkbox3 = createCheckbox('Bosa', true);
  	  checkbox4 = createCheckbox('Kennedy', true);

  	  crearCheckbox(400,checkbox1);
  	  crearCheckbox(420,checkbox2);
  	  crearCheckbox(440,checkbox3);
  	  crearCheckbox(460,checkbox4);

  	  checkbox1.changed(changeEng);
  	  checkbox2.changed(changeSuba);
  	  checkbox3.changed(changeBosa);
  	  checkbox4.changed(changeKen);


 }

 function draw() {
	background("#181b28");
	noStroke();
	fill("#1f2333");
	square(-680, -320, 370, 650);

	fill("#2b3047");
	square(-680, -180, 370, 50);
	fill("#333954");
	square(-680, -130, 370, 50);
	

	fill("#FFFFFF");
  	textSize(24);
  	text("VEHÍCULOS EN LOCALIDADES MÁS POBLADAS - 2017", -100, -200);

  	push();
  	kennedy.mostrar();
  	pop();
  	push();
  	suba.mostrar();
  	pop();
  	push();
 	engativa.mostrar();
 	pop();
 	push();
  	bosa.mostrar();
  	pop();
  	
	//square(-680, -320, 370, 650);
	sel.changed(mySelectEvent);
	switch(opcion){
		case "Total":
		console.log(mapeoCantidad[2]);

//suba-kennedy-engativa-bosa 
		if(mostarEng){
	
			mostrarTexto(textoCantidad[2], carroEngativa[0]);
			mostrarCarrosTotal(mapeoCantidad[2], carroEngativa);
		}
		
		if(mostarSuba){
			mostrarTexto(textoCantidad[0], carroSuba[0]);
			mostrarCarrosTotal(mapeoCantidad[0], carroSuba);
		}
		if(mostarBosa){
			mostrarTexto(textoCantidad[3], carroBosa[0]);
			mostrarCarrosTotal(mapeoCantidad[3], carroBosa);
		}
		if(mostarKen){
			mostrarTexto(textoCantidad[1], carroKennedy[0]);
			mostrarCarrosTotal(mapeoCantidad[1], carroKennedy);
		}

		break;

		case "Automóviles":
		if(mostarSuba){
			mostrarAutomoviles(mapeoAutos[0], carroSuba);
			mostrarTexto(textoAutomovil[0], carroSuba[0]);
		}
		if(mostarKen){
			mostrarAutomoviles(mapeoAutos[1], carroKennedy);
			mostrarTexto(textoAutomovil[1], carroKennedy[0]);
		}
		if(mostarEng){
			mostrarAutomoviles(mapeoAutos[2], carroEngativa);
			mostrarTexto(textoAutomovil[2], carroEngativa[0]);
		}
		if(mostarBosa){
			mostrarAutomoviles(mapeoAutos[3], carroBosa);
			mostrarTexto(textoAutomovil[3], carroBosa[0]);
		}
		
		break;

		case "Motos":
		if(mostarSuba){
			mostrarMotos(mapeoMotos[0], carroSuba);
			mostrarTexto(textoMoto[0], carroSuba[0]);
		}
		if(mostarKen){
			mostrarMotos(mapeoMotos[1], carroKennedy);
			mostrarTexto(textoMoto[1 ], carroKennedy[0]);
		}
		if(mostarEng){
			mostrarMotos(mapeoMotos[2], carroEngativa);
			mostrarTexto(textoMoto[2], carroEngativa[0]);
		}
		if(mostarBosa){
			mostrarMotos(mapeoMotos[3], carroBosa);
			mostrarTexto(textoMoto[3], carroBosa[0]);
		}	
		console.log("espera");
			
	}

	for(var i = 0; i < localidades.length; i++)
	{
		localidades[i].mostrar();
	}
	

}

function crearBotonLink(botonLink,  poxY){
	botonLink.parent("contenedor");
	botonLink.position(75,poxY);
	botonLink.style('color','#ffffff');
	botonLink.style('font-family','ProximaNova');
	botonLink.style('text-decoration','none');
}

function mostrarCarrosTotal(cantidad, carro){
	
	if(cantidad >= 20 && cantidad <=51){

		for(var i = 0; i < cantidad; i++){
		carro[i].r = 47;
		carro[i].g = 214;
		carro[i].b = 200;
		push();
		carro[i].mostrar();
		pop();
		carro[i].actualizar();
		
		}
	}
	else if(cantidad >= 51 && cantidad <=71){
		for(var i = 0; i < cantidad; i++){
			carro[i].r = 255;
			carro[i].g = 130;
			carro[i].b = 70;
			push();
			carro[i].mostrar();
			pop();
			carro[i].actualizar();
		}
	}
	else if(cantidad >=71 && cantidad <=100){
		for(var i = 0; i < cantidad; i++){
			carro[i].r = 252; 
			carro[i].g = 98;
			carro[i].b = 139;
			push();
			carro[i].mostrar();
			pop();
			carro[i].actualizar();
		}
	}
}


function mostrarAutomoviles(cantidad, carro){
	for(var i = 0; i < cantidad; i++){
		carro[i].r = 135;  
		carro[i].g = 242;
		carro[i].b = 172;
		push();
		carro[i].mostrar();
		pop();
		carro[i].actualizar();
	}

}

function mostrarMotos(cantidad, carro){
	for(var i = 0; i < cantidad; i++){
		carro[i].r = 212; 
		carro[i].g = 78;
		carro[i].b =  216;
		push();
		carro[i].mostrar();
		pop();
		carro[i].actualizar();
	}

}

function mySelectEvent() 
{
  //guarda la opción seleccionada en la variable opcion
  opcion = sel.value();
}

function crearCheckbox(posY, checki){
	checki.position(75, posY);
	checki.style('color', '#FFFFFF');
}

function changeEng() 
{
  //si el boton esta activo
  if (checkbox1.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostarEng = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostarEng = false;
  }
}

function changeSuba() 
{
  //si el boton esta activo
  if (checkbox2.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostarSuba = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostarSuba = false;
  }
}

function changeBosa() 
{
  //si el boton esta activo
  if (checkbox3.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostarBosa= true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostarBosa = false;
  }
}

function changeKen() 
{
  //si el boton esta activo
  if (checkbox4.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostarKen = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostarKen = false;
  }
}

function mostrarTexto(textoArray, carroArray) 
{
	textoArray.r = carroArray.r;
	textoArray.g = carroArray.g;
	textoArray.b = carroArray.b;
	textoArray.mostrar();
}