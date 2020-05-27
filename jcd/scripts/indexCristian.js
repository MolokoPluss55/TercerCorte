let table;

let particulasBolita = [];

let slider;

let rowCount;

let cnv;

let textoH2A;

let sel;

let valorOpcion;

let nombres = [];

let cantidad;

let row;

let cantidadGente = [];

let mapeoGente = [];

let anio2010 = [];

let anio2011 = [];

let anio2012 = [];

let anio2013 = [];

let anio2014 = [];

let anio2015 = [];

let anio2016 = [];

let anio2017 = [];

let anio2018 = [];

let mapeo2010 = [];

let mapeo2011 = [];

let mapeo2012 = [];

let mapeo2013 = [];

let mapeo2014 = [];

let mapeo2015 = [];

let mapeo2016 = [];

let mapeo2017 = [];

let mapeo2018 = [];

let cantidadSlider;

let cantidadReal;

let nombreAnio;

let mapaAN;
let mapaBU;
let mapaB;
let mapaC;
let mapaCB;
let mapaE;
let mapaF;
let mapaK;
let mapaLC;
let mapaLM;
let mapaPA;
let mapaRUU;
let mapaSC;
let mapaSF;
let mapaS;
let mapaSP;
let mapaTQ;
let mapaTJ;
let mapaUQ;
let mapaU;

let cmapaAN;
let cmapaBU;
let cmapaB;
let cmapaC;
let cmapaCB;
let cmapaE;
let cmapaF;
let cmapaK;
let cmapaLC;
let cmapaLM;
let cmapaPA;
let cmapaRUU;
let cmapaSC;
let cmapaSF;
let cmapaS;
let cmapaSP;
let cmapaTQ;
let cmapaTJ;
let cmapaUQ;
let cmapaU;

let opcion;

let imagenPersona;

let particulasAntonioNarino = [];

let particulasBarriosUnidos = [];

let particulasBosa = [];

let particulasChapinero = [];

let particulasCiudadBolivar = [];

let particulasEngativa = [];

let particulasFontibon = [];

let particulasKennedy = [];

let particulasLaCandelaria = [];

let particulasLosMartires = [];

let particulasPuenteAranda = [];

let particulasRafaelUribeUribe = [];

let particulasSanCristobal = [];

let particulasSantaFe = [];

let particulasSuba = [];

let particulasSumapaz = [];

let particulasTeusaquillo = [];

let particulasTunjuelito = [];

let particulasUsaquen = [];

let particulasUsme = [];


function preload()
{
  	table = loadTable("assets/PoblacionFinalPart.csv", "header");
	mapaAN = loadImage("assets/AntonioNarino.png");
	mapaBU = loadImage("assets/BarriosUnidos.png");
	mapaB = loadImage("assets/Bosa.png");
	mapaC = loadImage("assets/Chapinero.png");
	mapaF = loadImage("assets/Fontibon.png");
	mapaK = loadImage("assets/Kennedy.png");
	mapaLC = loadImage("assets/LaCandelaria.png");
	mapaLM = loadImage("assets/LosMartires.png");
	mapaCB = loadImage("assets/CiudadBolivar.png");
	mapaE = loadImage("assets/Engativa.png");
	mapaPA = loadImage("assets/PuenteAranda.png");
	mapaRUU = loadImage("assets/RafaelUribe.png");
	mapaSC = loadImage("assets/SanCristobal.png");
	mapaSF = loadImage("assets/SantaFe.png");
	mapaS = loadImage("assets/Suba.png");
	mapaSP = loadImage("assets/Sumapaz.png"); 
	mapaTQ = loadImage("assets/Teusaquillo.png");
	mapaTJ = loadImage("assets/Tunjuelito.png");
	mapaUQ = loadImage("assets/Usaquen.png");
	mapaU = loadImage("assets/Usme.png");
	imagenPersona = loadImage("assets/HombreAzul.png");

}

function setup()
{
  let myCanvas = createCanvas(1300,600);
  myCanvas.parent("contenedorLoc");
  sel = createSelect();
  sel.parent("contenedorLoc");
  sel.position (450, 200);
  sel.option('Antonio Nariño, Barrios Unidos, Bosa, Chapinero');
  sel.option('Ciudad Bolivar, Engativa, Fontibon, Kennedy');
  sel.option('La Candelaria, Los Martires, Puente Aranda, Rafael Uribe Uribe');
  sel.option('San Cristobal, Santa Fe, Suba, Sumapaz');
  sel.option('Teusaquillo, Tunjuelito, Usaquen, Usme');

	cmapaAN = new mapa(10, mapaAN);
	cmapaBU = new mapa(320, mapaBU);
	cmapaB = new mapa(630, mapaB);
	cmapaC = new mapa(940, mapaC);
	cmapaCB = new mapa(10, mapaCB);
	cmapaE = new mapa(320, mapaE);
	cmapaF = new mapa(630, mapaF);
	cmapaK = new mapa(940, mapaK);
	cmapaLC = new mapa(10, mapaLC);
	cmapaLM = new mapa(320, mapaLM);
	cmapaPA = new mapa(630, mapaPA);
	cmapaRUU = new mapa(940, mapaRUU);
	cmapaSC = new mapa(10, mapaSC);
	cmapaSF = new mapa(320, mapaSF);
	cmapaS = new mapa(630, mapaS);
	cmapaSP = new mapa(940, mapaSP);
	cmapaTQ = new mapa(10, mapaTQ);
	cmapaTJ = new mapa(320, mapaTJ);
	cmapaUQ = new mapa(630, mapaUQ);
	cmapaU = new mapa(940, mapaU);

	rowCount = table.getRowCount();

  row = table.getRows();

  for (let i = 0; i < rowCount; i++)
  {
    nombres[i] = row[i].getString("name");
    cantidadGente[i] = row[i].getNum("poblacion");
    //Remplazar valores nomericos por minimo y maximo
    mapeoGente[i] = map(cantidadGente[i], 6693, 1039013, 5, 100);
    anio2010[i] = row[i].getNum("2010P");
    anio2011[i] = row[i].getNum("2011P");
    anio2012[i] = row[i].getNum("2012P");
    anio2013[i] = row[i].getNum("2013P");
    anio2014[i] = row[i].getNum("2014P");
    anio2015[i] = row[i].getNum("2015P");
    anio2016[i] = row[i].getNum("2016P");
    anio2017[i] = row[i].getNum("2017P");
    anio2018[i] = row[i].getNum("2018P");
    mapeo2010[i] = map(anio2010[i], 6814, 1068188, 5, 100);
    mapeo2011[i] = map(anio2011[i], 6910, 1097642, 5, 100);
    mapeo2012[i] = map(anio2012[i], 6990, 1127402, 5, 100);
    mapeo2013[i] = map(anio2013[i], 7063, 1157514, 5, 100);
    mapeo2014[i] = map(anio2014[i], 7139, 1188071, 5, 100);
    mapeo2015[i] = map(anio2015[i], 7224, 1219135, 5, 100);
    mapeo2016[i] = map(anio2016[i], 7330, 1250734, 5, 100);
    mapeo2017[i] = map(anio2017[i], 7457, 1282978, 5, 100);
    mapeo2018[i] = map(anio2018[i], 7584, 1315509, 5, 100);
    //console.log(nombres[i]);
  }
   for(var i = 0; i < 100; i++){

      particulasAntonioNarino[i] = new particulasf(random(270,10));
      particulasBarriosUnidos[i] = new particulasf(random(550,320));
      particulasBosa[i] = new particulasf(random(900,630));
      particulasChapinero[i] = new particulasf(random(1200,940));
      particulasCiudadBolivar[i] = new particulasf(random(270,10));
      particulasEngativa[i] = new particulasf(random(550,320));
      particulasFontibon[i] = new particulasf(random(900,630));
      particulasKennedy[i] = new particulasf(random(1200,940));
      particulasLaCandelaria[i] = new particulasf(random(270,10));
      particulasLosMartires[i] = new particulasf(random(550,320));
      particulasPuenteAranda[i] = new particulasf(random(900,630));
      particulasRafaelUribeUribe[i] = new particulasf(random(1200,940));
      particulasSanCristobal[i] = new particulasf(random(270,10));
      particulasSantaFe[i] = new particulasf(random(550,320));
      particulasSuba[i] = new particulasf(random(900,630));
      particulasSumapaz[i] = new particulasf(random(1200,940));
      particulasTeusaquillo[i] = new particulasf(random(270,10)); 
      particulasTunjuelito[i] = new particulasf(random(550,320));
      particulasUsaquen[i] = new particulasf(random(900,630));
      particulasUsme[i] = new particulasf(random(1200,940));

   }

}

function draw(){
	background(255, 250, 246);
	/*
	let anioSlider = slider.value();
  for (let i = 0; i < nombres.length; i++)
  {
    switch(valorOpcion)
    {
      case nombres[i]: 
      if(anioSlider == 0)
      {
        cantidad = mapeo2010[i];
        cantidadReal = anio2010[i];
        nombreAnio = "2010";
        //console.log(cantidad);
      }
      else if(anioSlider == 1){
        cantidad = mapeo2011[i];
        cantidadReal = anio2011[i];
        nombreAnio = "2011";
        //console.log(cantidad);
      }
      else if(anioSlider == 2){
        cantidad = mapeo2012[i];
        cantidadReal = anio2012[i];
        nombreAnio = "2012";
        //console.log(cantidad);
      }
      else if(anioSlider == 3){
        cantidad = mapeo2013[i];
        cantidadReal = anio2013[i];
        nombreAnio = "2013";
        //console.log(cantidad);
      }
      else if(anioSlider == 4){
        cantidad = mapeo2014[i];
        cantidadReal = anio2014[i];
        nombreAnio = "2014";
        //console.log(cantidad);
      }
      else if(anioSlider == 5){
        cantidad = mapeo2015[i];
        cantidadReal = anio2015[i];
        nombreAnio = "2015";
        //console.log(cantidad);
      }
      else if(anioSlider == 6){
        cantidad = mapeo2016[i];
        cantidadReal = anio2016[i];
        nombreAnio = "2016";
        //console.log(cantidad);
      }
      else if(anioSlider == 7){
       cantidad = mapeo2017[i];
        cantidadReal = anio2017[i];
        nombreAnio = "2017";
        //console.log(cantidad);
      }
      else if(anioSlider == 8){
        cantidad = mapeo2018[i];
        cantidadReal = anio2018[i];
        nombreAnio = "2018";
        //console.log(cantidad);
      }
    }
  }
  */
	sel.changed(cambiarMapas);
	switch(opcion){
		case 'Antonio Nariño, Barrios Unidos, Bosa, Chapinero':
			cmapaAN.mostrar();
			cmapaBU.mostrar();
			cmapaB.mostrar();
			cmapaC.mostrar();
			mostrarPersonas(mapeo2010[0], particulasAntonioNarino);
			mostrarPersonas(mapeo2010[1], particulasBarriosUnidos);
			mostrarPersonas(mapeo2010[2], particulasBosa);
			mostrarPersonas(mapeo2010[3], particulasChapinero);
			//console.log(mapeo2017[1]);
		
			break;
		case 'Ciudad Bolivar, Engativa, Fontibon, Kennedy':
			cmapaCB.mostrar();
			cmapaE.mostrar();
			cmapaF.mostrar();
			cmapaK.mostrar();
			mostrarPersonas(mapeo2010[4], particulasCiudadBolivar);
			mostrarPersonas(mapeo2010[5], particulasEngativa);
			mostrarPersonas(mapeo2010[6], particulasFontibon);
			mostrarPersonas(mapeo2010[7], particulasKennedy);
			break;
		case 'La Candelaria, Los Martires, Puente Aranda, Rafael Uribe Uribe':
			cmapaLC.mostrar();
			cmapaLM.mostrar();
			cmapaPA.mostrar();
			cmapaRUU.mostrar();
			mostrarPersonas(mapeo2010[8], particulasLaCandelaria);
			mostrarPersonas(mapeo2010[9], particulasLosMartires);
			mostrarPersonas(mapeo2010[10], particulasPuenteAranda);
			mostrarPersonas(mapeo2010[11], particulasRafaelUribeUribe);
			break;
		case 'San Cristobal, Santa Fe, Suba, Sumapaz':
			cmapaSC.mostrar();
			cmapaSF.mostrar();
			cmapaS.mostrar();
			cmapaSP.mostrar();
			mostrarPersonas(mapeo2010[12], particulasSanCristobal);
			mostrarPersonas(mapeo2010[13], particulasSantaFe);
			mostrarPersonas(mapeo2010[14], particulasSuba);
			mostrarPersonas(mapeo2010[15], particulasSumapaz);
			break;	
		case 'Teusaquillo, Tunjuelito, Usaquen, Usme':
			cmapaTQ.mostrar();
			cmapaTJ.mostrar();
			cmapaUQ.mostrar();
			cmapaU.mostrar();
			mostrarPersonas(mapeo2010[16], particulasTeusaquillo);
			mostrarPersonas(mapeo2010[17], particulasTunjuelito);
			mostrarPersonas(mapeo2010[18], particulasUsaquen);
			mostrarPersonas(mapeo2010[19], particulasUsme);
			break;	
	}

	
}

/*particulasAntonioNarino[i].mostrar();
     		particulasBarriosUnidos[i].mostrar();
      		particulasBosa[i].mostrar();
      		particulasChapinero[i].mostrar();
      		particulasAntonioNarino[i].actualizar();
     		particulasBarriosUnidos[i].actualizar();
      		particulasBosa[i].actualizar();
      		particulasChapinero[i].actualizar();*/

function cambiarMapas()
{
	 opcion = sel.value();
}

 
function mostrarPersonas(cantidad, localidad){
    
    for (let i = 0; i < cantidad; i++) 
    {

      localidad[i].actualizar();
      localidad[i].mostrar();
       console.log( particulasAntonioNarino[i]);
      
      //Es true cuando el alpha es igual a 
     }
}