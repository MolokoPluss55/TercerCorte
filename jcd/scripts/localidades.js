var carroKennedy = [];
var carroSuba = [];
var carroEngativa = [];
var carroBosa = [];
var table;
var textoLocalidad = [];
var textoCantidad = [];
var textoAutomovil = [];
var textoMoto = [];
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
var checkbox4;
var mostarEng = true;
var mostarSuba = true;
var mostarBosa = true;
var mostarKen = true;
var correrX = -200;
var sel;
var opcion;
class localidades 
{
	constructor() 
	{
		this.rowCount;
		 this.row;
		 this.kennedy;
		 this.bosa,
		 this.engativa;
		 this.suba;
		 this.textoLocalidad = [];
		 this.textoCantidad = [];
		 this.textoAutomovil = [];
		 this.textoMoto = [];
		 this.textoCantidad = [];
		 this.totalAutos = [];
		 this.totalMotos = [];
		 this.totalVehiculos = [];
		 this.mapeoCantidad = [];
		 this.mapeoAutos = [];
		 this.mapeoMotos = [];
		 this.localidades = [];
		 this.carroKennedy = [];
		 this.carroSuba = [];
		 this.carroEngativa = [];
		 this.carroBosa = [];
		 
		
	}

	cargar()
	{
		this.rowCount = table2.getRowCount();
		this.row = table2.getRows();
		this.kennedy = new vena(250,-150,0);
		this.bosa = new vena(250,0,0);
		this.engativa = new vena(250,150,0);
		this.suba = new vena(250,300,0);

		for(var i = 0; i < this.rowCount; i++)
		{
			this.textoLocalidad[i] = this.row[i].getString("localidad");
			this.totalVehiculos[i] = this.row[i].getNum("total");
			this.totalAutos[i] = this.row[i].getNum("automovil");
			this.totalMotos[i] = this.row[i].getNum("moto");
			this.mapeoCantidad[i] = map(this.totalVehiculos[i],60681, 241982, 20, 100);
			this.mapeoAutos[i] = map(this.totalAutos[i],27471, 117280, 10, 50);
			this.mapeoMotos[i] = map(this.totalMotos[i],33210, 124702, 20, 80);
			this.textoCantidad[i] = new textoAnio(correrX, 230,20, this.totalVehiculos[i], 47, 214, 200);
			this.textoAutomovil[i] = new textoAnio(correrX, 230,20, this.totalAutos[i], 47, 214, 200);
			this.textoMoto[i] = new textoAnio(correrX, 230,20, this.totalMotos[i], 47, 214, 200);

			this.localidades[i] = new textoAnio(correrX,200,18,this.textoLocalidad[i].toUpperCase(),52,53,79);
			correrX += 160;
 			
		}

		for(var i = 0; i < 100; i++){
			//Crear 20 localidades
			this.carroKennedy[i] = new vehiculo(random(-20, 20), 41, 202, 191);
			this.carroSuba[i] = new vehiculo(random(-170, -130), 41, 202, 191);
			this.carroEngativa[i] = new vehiculo(random(120, 160), 41, 202, 191);
			this.carroBosa[i] = new vehiculo(random(280, 300), 41, 202, 191);
		 }
   
		 //variable del selector de opciones
		 sel = createSelect();
		 sel.position(500, 500);
		 sel.style("width", "500");
		 //suba - kennedy - ñaña 
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

	mostrar() 
	{

		
		fill("#FFFFFF");
		textSize(24);
		var titlee = new textoAnio(-300, -180,24,"VEHÍCULOS EN LOCALIDADES MÁS POBLADAS - 2017", 52,53,79);
		titlee.mostrar();
		push();
		this.kennedy.mostrar();
		pop();
		push();
		this.suba.mostrar();
		pop();
		push();
		this.engativa.mostrar();
		pop();
		push();
		this.bosa.mostrar();
		pop();

		sel.changed(mySelectEvent);
	switch(opcion){
		case "Total":
		console.log(this.mapeoCantidad[2]);

//suba-kennedy-engativa-bosa 
			if(mostarEng){
		
				mostrarTexto(this.textoCantidad[2], this.carroEngativa[0]);
				mostrarCarrosTotal(this.mapeoCantidad[2], this.carroEngativa);
			}
			
			if(mostarSuba){
				mostrarTexto(this.textoCantidad[0], this.carroSuba[0]);
				mostrarCarrosTotal(this.mapeoCantidad[0], this.carroSuba);
			}
			if(mostarBosa){
				mostrarTexto(this.textoCantidad[3], this.carroBosa[0]);
				mostrarCarrosTotal(this.mapeoCantidad[3], this.carroBosa);
			}
			if(mostarKen){
				mostrarTexto(this.textoCantidad[1], this.carroKennedy[0]);
				mostrarCarrosTotal(this.mapeoCantidad[1], this.carroKennedy);
			}

			break;

		case "Automóviles":
			if(mostarSuba){
				mostrarAutomoviles(this.mapeoAutos[0], this.carroSuba);
				mostrarTexto(this.textoAutomovil[0], this.carroSuba[0]);
			}
			if(mostarKen){
				mostrarAutomoviles(this.mapeoAutos[1], this.carroKennedy);
				mostrarTexto(this.textoAutomovil[1], this.carroKennedy[0]);
			}
			if(mostarEng){
				mostrarAutomoviles(this.mapeoAutos[2], this.carroEngativa);
				mostrarTexto(this.textoAutomovil[2], this.carroEngativa[0]);
			}
			if(mostarBosa){
				mostrarAutomoviles(this.mapeoAutos[3], this.carroBosa);
				mostrarTexto(this.textoAutomovil[3], this.carroBosa[0]);
			}
			
			break;

		case "Motos":
			if(mostarSuba){
				mostrarMotos(this.mapeoMotos[0], this.carroSuba);
				mostrarTexto(this.textoMoto[0], this.carroSuba[0]);
			}
			if(mostarKen){
				mostrarMotos(this.mapeoMotos[1], this.carroKennedy);
				mostrarTexto(this.textoMoto[1 ], this.carroKennedy[0]);
			}
			if(mostarEng){
				mostrarMotos(this.mapeoMotos[2], this.carroEngativa);
				mostrarTexto(this.textoMoto[2], this.carroEngativa[0]);
			}
			if(mostarBosa){
				mostrarMotos(this.mapeoMotos[3], this.carroBosa);
				mostrarTexto(this.textoMoto[3], this.carroBosa[0]);
			}	
			console.log("espera");
				
		}

		for(var i = 0; i < this.localidades.length; i++)
		{
			this.localidades[i].mostrar();
		}


	}
}


function mostrarCarrosTotal(cantidad, carro){
	
	if(cantidad >= 20 && cantidad <=51){

		for(var i = 0; i < cantidad; i++){
		carro[i].r = 248;
		carro[i].g = 160;
		carro[i].b = 131;
		push();
		carro[i].mostrar();
		pop();
		carro[i].actualizar();
		
		}
	}
	else if(cantidad >= 51 && cantidad <=71){
		for(var i = 0; i < cantidad; i++){
			carro[i].r = 214;
			carro[i].g = 117;
			carro[i].b = 108;
			push();
			carro[i].mostrar();
			pop();
			carro[i].actualizar();
		}
	}
	else if(cantidad >=71 && cantidad <=100){
		for(var i = 0; i < cantidad; i++){
			carro[i].r = 221; 
			carro[i].g = 95;
			carro[i].b = 80;
			push();
			carro[i].mostrar();
			pop();
			carro[i].actualizar();
		}
	}
}


function mostrarAutomoviles(cantidad, carro){
	for(var i = 0; i < cantidad; i++){
		carro[i].r = 157;  
		carro[i].g = 185;
		carro[i].b = 204;
		push();
		carro[i].mostrar();
		pop();
		carro[i].actualizar();
	}

}

function mostrarMotos(cantidad, carro){
	for(var i = 0; i < cantidad; i++){
		carro[i].r = 151; 
		carro[i].g = 100;
		carro[i].b =  113;
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
	checki.position(500, posY);
	checki.style('color', '#FFFFFF');
}

function changeEng(checki) 
{
  //si el boton esta activo
  if (checki.checked()) 
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
  if (checkbox1.checked()) 
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